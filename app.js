// Chart.js Implementation for different chart types

// Stack Chart
const stackCtx = document.getElementById('stackChart').getContext('2d');
const stackChart = new Chart(stackCtx, {
    type: 'bar',
    data: {
        labels: ['Beverages', 'Cereals', 'Confections', 'Meat/Poultry', 'Produce'],
        datasets: [{
            label: 'Sales',
            data: [12000, 19000, 3000, 5000, 2000],
            backgroundColor: '#2980b9'
        }]
    },
    options: {
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    }
});

// Bubble Chart
const bubbleCtx = document.getElementById('bubbleChart').getContext('2d');
const bubbleChart = new Chart(bubbleCtx, {
    type: 'bubble',
    data: {
        datasets: [{
            label: 'Bubble Chart',
            data: [
                {x: 20, y: 30, r: 15},
                {x: 40, y: 10, r: 10},
                {x: 30, y: 20, r: 25}
            ],
            backgroundColor: '#27ae60'
        }]
    }
});

// Area Chart
const areaCtx = document.getElementById('areaChart').getContext('2d');
const areaChart = new Chart(areaCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Profit',
            data: [3000, 2000, 4000, 5000, 3500],
            backgroundColor: 'rgba(142, 68, 173, 0.2)',
            borderColor: '#8e44ad'
        }]
    }
});

// Donut Chart
const donutCtx = document.getElementById('donutChart').getContext('2d');
const donutChart = new Chart(donutCtx, {
    type: 'doughnut',
    data: {
        labels: ['Beverages', 'Cereals', 'Confections'],
        datasets: [{
            label: 'Product Distribution',
            data: [30, 40, 30],
            backgroundColor: ['#f39c12', '#27ae60', '#2980b9']
        }]
    }
});

// Map Chart (Example: Data by Regions)
const mapCtx = document.getElementById('mapChart').getContext('2d');
const mapChart = new Chart(mapCtx, {
    type: 'choropleth',
    data: {
                labels: ['North America', 'Europe', 'Asia', 'South America', 'Africa'],
        datasets: [{
            label: 'Regional Sales',
            data: [
                { region: 'North America', value: 30000 },
                { region: 'Europe', value: 25000 },
                { region: 'Asia', value: 20000 },
                { region: 'South America', value: 15000 },
                { region: 'Africa', value: 10000 }
            ],
            backgroundColor: ['#e74c3c', '#f39c12', '#27ae60', '#2980b9', '#8e44ad']
        }]
    },
    options: {
        scales: {
            x: {
                display: true
            },
            y: {
                display: true
            }
        },
        plugins: {
            legend: {
                display: true
            }
        }
    }
});

// Radar Chart
const radarCtx = document.getElementById('radarChart').getContext('2d');
const radarChart = new Chart(radarCtx, {
    type: 'radar',
    data: {
        labels: ['Speed', 'Reliability', 'Comfort', 'Safety', 'Efficiency'],
        datasets: [{
            label: 'Car Ratings',
            data: [90, 85, 70, 95, 80],
            backgroundColor: 'rgba(231, 76, 60, 0.2)',
            borderColor: '#e74c3c',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        },
        elements: {
            line: {
                tension: 0.1
            }
        }
    }
});

// Pie Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: 'Color Distribution',
            data: [300, 50, 100],
            backgroundColor: ['#e74c3c', '#3498db', '#f1c40f']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Pie Chart Example'
            }
        }
    }
});