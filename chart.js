var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ["hability","hability","hability","hability","hability","hability","hability","hability"],
        datasets: [{
            label: "",
            data: [12, 19, 3, 8, 12, 8, 3, 19],
            backgroundColor: "rgba(255,0,232,0.5)",
            borderColor: "rgba(255,0,232,1)",
        }]
    },
    options: {
      legend: { display: false },
      scale: {
        ticks: {
          beginAtZero: true,
          max: 8
        }
      }
    }
});