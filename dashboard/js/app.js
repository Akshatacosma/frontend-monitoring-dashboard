import { state, subscribe } from "./state.js";
import { updateMetrics } from "./metrics.js";
import { renderServices } from "./services.js";
import { initChart, pushChartData } from "./charts.js";

const metricsContainer = document.getElementById("metrics");
const chart = initChart();

function renderMetrics() {
    metricsContainer.innerHTML = `
        ${metric("CPU Usage", state.metrics.cpu + "%")}
        ${metric("Memory Usage", state.metrics.memory + "%")}
        ${metric("Latency", state.metrics.latency + " ms")}
        ${metric("Uptime", state.metrics.uptime + "%")}
    `;
}

function metric(title, value) {
    return `
        <div class="metric-card">
            <h3>${title}</h3>
            <span>${value}</span>
        </div>
    `;
}

subscribe(() => {
    renderMetrics();
    renderServices();
    pushChartData(chart, state.metrics.latency);
});

setInterval(updateMetrics, 3000);
