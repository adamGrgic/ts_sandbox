
// Chart 1

//@ts-ignore
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Groceries', 'Electronics', 'Weekend Activities', 'Rent', 'Utilities'],
        datasets: [{
            // label: '# of Votes',
            data: [5, 12, 8, 17, 10, 6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(235, 186, 52, 0.2)',
                'rgba(134, 235, 52, 0.2)',
                'rgba(52, 235, 147, 0.2)',
                'rgba(52, 147, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(235, 186, 52, 1)',
                'rgba(134, 235, 52, 1)',
                'rgba(52, 235, 147, 1)',
                'rgba(52, 147, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'May Spending Breakdown'
            },
            legend: {
                display: false,
                position: 'right'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        
    }
});


// Chart 2
//@ts-ignore
const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [5, 12, 8, 17, 10, 6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



// Chart 3
//@ts-ignore
const ctx3 = document.getElementById('myChart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'radar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [5, 12, 8, 17, 10, 6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Chart 4
//@ts-ignore
const ctx4 = document.getElementById('myChart4').getContext('2d');
const myChart4 = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [5, 12, 8, 17, 10, 6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// Chart 5
//@ts-ignore
const ctx5 = document.getElementById('myChart5').getContext('2d');
const myChart5 = new Chart(ctx5, {
    type: 'scatter',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [{
                x: -10,
                y: 0
              }, {
                x: 0,
                y: 10
              }, {
                x: 10,
                y: 5
              }, {
                x: 0.5,
                y: 5.5
              }],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          }
        }
      }
});


// Chart 6
//@ts-ignore
const ctx6 = document.getElementById('myChart6').getContext('2d');
const myChart6 = new Chart(ctx6, {
    type: 'bubble',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'First Dataset',
            data: [{
              x: 20,
              y: 30,
              r: 15
            }, {
              x: 40,
              y: 10,
              r: 10
            }],
            backgroundColor: 'rgb(255, 99, 132)'
          }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});