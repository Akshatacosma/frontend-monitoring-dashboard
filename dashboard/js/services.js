import { state } from "./state.js";

export function renderServices() {
    const list = document.getElementById("serviceList");
    list.innerHTML = "";

    state.services.forEach(service => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${service.name}</span>
            <span class="${service.status}">
                ${service.status.toUpperCase()}
            </span>
        `;
        list.appendChild(li);
    });
}
