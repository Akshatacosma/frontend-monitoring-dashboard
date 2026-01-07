import { state, notify } from "./state.js";

export function updateMetrics() {
    state.metrics.cpu = random(30, 85);
    state.metrics.memory = random(40, 90);
    state.metrics.latency = random(80, 250);
    notify();
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
