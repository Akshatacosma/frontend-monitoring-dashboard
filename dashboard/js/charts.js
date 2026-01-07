export function initChart() {
    const ctx = document.getElementById("performanceChart");

    return new Chart(ctx, {
        type: "line",
        data: {
            labels: [],
            datasets: [{
                label: "Latency (ms)",
                data: [],
                borderWidth: 2,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            animation: false,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

export function pushChartData(chart, value) {
    const time = new Date().toLocaleTimeString();

    chart.data.labels.push(time);
    chart.data.datasets[0].data.push(value);

    if (chart.data.labels.length > 10) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }

    chart.update();
}
