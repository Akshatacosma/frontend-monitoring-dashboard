export const state = {
    metrics: {
        cpu: 40,
        memory: 65,
        latency: 120,
        uptime: 99.98
    },
    services: [
        { name: "Auth Service", status: "online" },
        { name: "Payment Gateway", status: "online" },
        { name: "Email Engine", status: "degraded" },
        { name: "Analytics", status: "online" },
        { name: "Notification Service", status: "down" }
    ],
    subscribers: []
};

export function subscribe(fn) {
    state.subscribers.push(fn);
}

export function notify() {
    state.subscribers.forEach(fn => fn());
}
