const socket = io('http://localhost:3000'); // Adjust the URL as needed

// User statistics chart
const userCtx = document.getElementById('userChart').getContext('2d');
let userChart = new Chart(userCtx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Active Users',
            data: [],
            borderColor: 'rgba(126, 87, 194, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Number of Users'
                },
                beginAtZero: true
            }
        }
    }
});

// Financial metrics chart
const financialCtx = document.getElementById('financialChart').getContext('2d');
let financialChart = new Chart(financialCtx, {
    type: 'bar',
    data: {
        labels: ['Revenue', 'Expenses', 'Profit'],
        datasets: [{
            label: 'Financial Metrics',
            data: [10000, 5000, 5000],
            backgroundColor: ['#2980b9', '#e74c3c', '#27ae60']
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount in $'
                }
            }
        }
    }
});

// Real-time data update
socket.on('dataUpdate', (data) => {
    const currentTime = new Date().toLocaleTimeString();
    
    // Update user chart
    userChart.data.labels.push(currentTime);
    userChart.data.datasets[0].data.push(data.activeUsers);
    
    // Update data cards
    document.getElementById('activeUsers').innerText = data.activeUsers;
    document.getElementById('newSignups').innerText = data.newSignups;
    document.getElementById('totalRevenue').innerText = `$${data.totalRevenue}`;
    document.getElementById('avgOrderValue').innerText = `$${data.avgOrderValue}`;

    userChart.update();
    financialChart.update();
});