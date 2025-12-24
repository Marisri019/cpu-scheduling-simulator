import { Process, fcfsScheduling } from "./scheduler.js";

let processes = [];

document.getElementById("addBtn").addEventListener("click", () => {
  const pid = document.getElementById("pid").value;
  const at = Number(document.getElementById("arrival").value);
  const bt = Number(document.getElementById("burst").value);

  if (!pid || bt <= 0) return alert("Invalid input");

  processes.push(new Process(pid, at, bt));
  renderTable(processes);
});

document.getElementById("runBtn").addEventListener("click", () => {
  const result = fcfsScheduling(processes);
  renderTable(result);
});

function renderTable(data) {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  data.forEach(p => {
    tbody.innerHTML += `
      <tr>
        <td>${p.pid}</td>
        <td>${p.arrivalTime}</td>
        <td>${p.burstTime}</td>
        <td>${p.waitingTime}</td>
        <td>${p.turnaroundTime}</td>
      </tr>
    `;
  });
}
