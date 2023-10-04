// time and date
function updateClock() {
    let now = new Date();
    let dName = now.getDay(),
      mo = now.getMonth(),
      dNum = now.getDate(),
      yr = now.getFullYear(),
      hou = now.getHours(),
      min = now.getMinutes(),
      sec = now.getSeconds(),
      pe = "AM";
  
    if (hou === 0) {
      hou = 12;
    } else if (hou > 12) {
      hou = hou - 12;
      pe = 'PM';
    }
  
    if (hou < 10) {
      hou = "0" + hou;
    } if (min < 10) {
      nameInput
      min = "0" + min;
    } if (sec < 10) {
      sec = "0" + sec;
    }
  
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let iDs = ['dayName', 'month', 'dayNum', 'year', 'hour', 'minutes', 'seconds', 'period'];
    let values = [week[dName], months[mo], dNum, yr, hou, min, sec, pe];
    for (let i = 0; i < iDs.length; i++) {
      document.getElementById(iDs[i]).firstChild.nodeValue = values[i];
    }
  }
  
  function initClock() {
    updateClock();
    window.setInterval(updateClock, 1000);
  }
  
  initClock(); // Start the clock
  
  const greeting = document.querySelector('#greeting');
  const hour = new Date().getHours();
  const grTypes = ["Good morning,", "Good afternoon,", "Good evening,"];
  let grText = "";
  
  if (hour < 12) {
    grText = grTypes[0];
  }
  else if (hour < 18) {
    grText = grTypes[1];
  }
  else {
    grText = grTypes[2];
  }
  
  greeting.innerHTML = grText;
  