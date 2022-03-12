function uniqueID() {
  return Math.floor(Math.random() * Date.now());
}

function formatTime(time) {
  const newTime = new Date(time).setMilliseconds(0);
  return new Date(newTime).setSeconds(0);
}
class Clock {
  constructor() {
    this.alarms = [];
  }

  getAlarms() {
    return this.alarms;
  }
  setAlarm(time) {
    const obj = {
      id: uniqueID(),
      time: formatTime(time),
      on: true,
      snoozeRemaining: 3,
    };
    this.alarms.push(obj);

    refreshAlarmsInUI();
    // addAlarmToUI(time,obj.id)
  }

  deleteAlarm(id) {
    this.alarms = this.alarms.filter((alarm) => alarm.id !== id);
  }

  snoozeAlarm(id, cancel = false) {
    this.alarms.map((alarm) => {
      if (id === alarm.id) {
        const para = document.getElementById(id).getElementsByTagName("p")[0];

        if (alarm.snoozeRemaining === 0 || cancel) {
          para.innerText = "Cancelling alarm for today";
          //set it for next week by subtracting 15 mins
          const newTime =
            Date.now(alarm.time) +
            7 * 24 * 60 * 60 * 1000 -
            5 * (3 - alarm.snoozeRemaining) * 60 * 1000;
          alarm.time = formatTime(new Date(newTime));
        } else {
          para.innerText = "Snoozing for 5 mins";

          // add 5 mins to the time
          const newTime = Date.now(alarm.time) + 5 * 60 * 1000;
          console.log(newTime);
          alarm.time = formatTime(new Date(newTime));
        }
        alarm.snoozeRemaining = alarm.snoozeRemaining - 1;

        setTimeout(() => refreshAlarmsInUI(), 2000);
      }
      return alarm;
    });
  }

  playAlarm(id) {
    console.log("Alarm playing");
  }

  turnOff(id) {
    this.alarms.map((alarm) => {
      if (id === alarm.id) {
        // alarm.snoozeRemaining = alarm.snoozeRemaining - 1;
        const newTime =
          Date.now(alarm.time) +
          7 * 24 * 60 * 1000 -
          (3 - snoozeRemaining) * 5 * 60 * 1000;
        alarm.time = formatTime(new Date(newTime));

        alarm.snoozeRemaining = 3;
      }
      return alarm;
    });

    refreshAlarmsInUI();
  }
}

const isTimeSame = (time1, time2) => {
  console.log("checking");
  console.log(new Date(time1), new Date(time2));
  if (formatTime(new Date(time1)) === formatTime(new Date(time2))) {
    return true;
  }
  return false;
};

const clock = new Clock();

setInterval(function () {
  const alarms = clock.getAlarms();
  alarms.forEach((alarm) => {
    if (isTimeSame(alarm.time, new Date())) {
      clock.playAlarm(alarm.id);
      console.log("alarm playing ");
      const elem = document.getElementById(alarm.id);
      const para = document.createElement("p");
      para.innerText = "Ringing";
      elem.appendChild(para);
      window.addEventListener(
        "keydown",
        (e) => handleSnoozeCancel(e, alarm.id, elem),
        { once: true }
      );
    }
  });
}, 60 * 1000);
function x(e, num) {
  console.log(e.key, num);
}

function handleSnoozeCancel(e, alarmId, elem) {
  console.log("key pressed");
  const snoozeOrCancel = e.key;
  console.log(snoozeOrCancel);

  if (snoozeOrCancel === "s") {
    clock.snoozeAlarm(alarmId);
  } else if (snoozeOrCancel === "c") {
    clock.snoozeAlarm(alarmId, true);
  } else {
    window.alert("Invalid response, snoozing the alarm for 5 mins");
    clock.snoozeAlarm(alarmId);
  }
}

const addAlarmBtn = document.getElementById("submit");
const alarmDay = document.getElementById("day");
const alarmTime = document.getElementById("time");
const alarms = document.getElementById("alarms");

addAlarmBtn.addEventListener("click", function () {
  console.log(alarmTime.value, alarmDay.value);
  const hh = parseInt(alarmTime.value.split(":")[0]);
  const min = parseInt(alarmTime.value.split(":")[1]);

  const currDate = new Date().getDate();
  const currDay = new Date().getDay();
  const currHours = new Date().getHours();
  const currMins = new Date().getMinutes();
  const currYear = new Date().getFullYear();
  const currMonth = new Date().getMonth();

  let date = currDate - currDay + parseInt(alarmDay.value);

  if (
    date < currDate ||
    (date === currDate &&
      (hh < currHours || (hh === currHours && min <= currMins)))
  ) {
    date = date + 7;
  }

  let timeForAlarm = new Date(currYear, currMonth, date, hh, min, 0, 0);
  clock.setAlarm(timeForAlarm);
});

const refreshAlarmsInUI = () => {
  alarms.innerHTML = "";
  const sortedAlarms = clock.getAlarms().sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.time) - new Date(b.time);
  });
  sortedAlarms.forEach((alarm) => {
    addAlarmToUI(alarm.time, alarm.id);
  });
};
const addAlarmToUI = (timeForAlarm, id) => {
  const day = new Date(timeForAlarm).getDay();
  const timeHH = new Date(timeForAlarm).getHours();
  const timeMin = new Date(timeForAlarm).getMinutes();
  const alarmEl = document.createElement("div");

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayName = days[day];

  alarmEl.innerHTML = `<h3 id=${id}>${
    alarms.childElementCount + 1
  }. ${dayName} ${timeHH.toString().padStart(2, "0")}:${timeMin
    .toString()
    .padStart(2, "0")}
    </h3>
    <p>Next Alarm on ${new Date(timeForAlarm)}</p>
    `;

  alarms.appendChild(alarmEl);
};

clock.setAlarm(new Date().setMinutes(new Date().getMinutes() + 1));
