const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path'); // Import path module

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files
app.use(express.static(path.join(__dirname, '/')));

// Route to serve the dashboard.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html')); // Adjust the filename if it's different
});

io.on('connection', (socket) => {
    console.log('New client connected');

    // Send random data every 2 seconds
    setInterval(() => {
        const randomValue = Math.floor(Math.random() * 100); // Random value for fluctuation
        socket.emit('dataUpdate', { activeUsers: randomValue });
    }, 2000);

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start server
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});