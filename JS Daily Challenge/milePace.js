function milePace(miles, duration) {
  let ave = 0;
  const time = duration.split(":");
  const totalTimeSecs = Number(time[0] * 60) + Number(time[1]);
  const aveSec = totalTimeSecs / miles;
  let min = Math.floor(aveSec / 60);
  let sec = Math.floor(aveSec % 60);
  min = min > 9 ? String(min) : "0" + String(min);
  sec = sec > 9 ? String(sec) : "0" + String(sec);
  ave = min + ":" + sec;
  return ave;
}

console.log(milePace(3, "24:00"));

console.log(milePace(1, "06:45"));

console.log(milePace(26.2, "120:35"));
