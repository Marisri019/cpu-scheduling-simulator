export class Process {
  constructor(pid, arrivalTime, burstTime) {
    this.pid = pid;
    this.arrivalTime = arrivalTime;
    this.burstTime = burstTime;
    this.waitingTime = 0;
    this.turnaroundTime = 0;
  }
}

export function fcfsScheduling(processes) {
  let time = 0;

  processes.sort((a, b) => a.arrivalTime - b.arrivalTime);

  processes.forEach(p => {
    if (time < p.arrivalTime) {
      time = p.arrivalTime;
    }
    p.waitingTime = time - p.arrivalTime;
    time += p.burstTime;
    p.turnaroundTime = p.waitingTime + p.burstTime;
  });

  return processes;
}
