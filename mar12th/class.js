// function uniqueID(){
//     return Math.floor(Math.random()*Date.now())
// }

class Utilities{
    static uniqueID(){
        return Math.floor(Math.random()*Date.now())
    }
    static formatTime(time){
        // Makes the seconds and the milliseconds of the given time as 0
        let newTime = new Date(time)
        newTime.setMilliseconds(0)
        newTime.setSeconds(0)
        return new Date(newTime)
        // return newTime
    }

    static getAlarmTime(day,time){

        const hh = parseInt(time.split(":")[0])
        const min = parseInt(time.split(":")[1])
        console.log(hh,min)
        const todaysDate = new Date()
        const currYear = todaysDate.getFullYear()
        const currMonth = todaysDate.getMonth()
        
        const currDate = todaysDate.getDate()
        const currDay = todaysDate.getDay()
        const currHours = todaysDate.getHours()
        const currMins = todaysDate.getMinutes()
        let date = currDate - currDay + parseInt(day)

        if(date<currDate){
            date=date+7
        }else if(date===currDate){
            if(hh<currHours){
                date=date+7
            }else if(hh===currHours){
                if(min<currMins){
                    date=date+7
                }
            }
        }
        const timeForAlarm = new Date(currYear,currMonth,date,hh,min,0,0)
        console.log(timeForAlarm)
        return timeForAlarm
    }

}

const refreshAlarmsInUI = () => {
    alarms.innerHTML = ''
    const heading = document.createElement("h1")
    heading.innerText="Alarms"
    alarms.appendChild(heading)
    const sortedAlarms = clock.getAlarms().sort(function(a,b){
        return new Date(a.time)-new Date(b.time)
    })
    sortedAlarms.forEach((alarm,index)=>{
        addAlarmToUI(alarm.time,alarm.id,index)
    })
}
const addAlarmToUI = (timeForAlarm,id,index) => {
    const dateObj = new Date(timeForAlarm)
    const day = dateObj.getDay()
    const timeHH = dateObj.getHours().toString()
    const timeMin = dateObj.getMinutes().toString()

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

    const dayName = days[day]

    const alarmEl = document.createElement("div")

    alarmEl.innerHTML = `<h3 id=${id}>${index+1}. ${dayName} ${timeHH.padStart(2,"0")}:${timeMin.padStart(2,"0")}</h3>
    <p>Next Alarm on ${new Date(timeForAlarm)}</p>
    `
    alarms.appendChild(alarmEl)
}

class Clock{

    constructor(){
        this.alarms=[]
    }

    getAlarms(){
        return this.alarms
    }

    setAlarm(time){
        const obj = {
            id: Utilities.uniqueID(),
            time: Utilities.formatTime(time),
            snoozeRemaining:3
        }
        this.alarms.push(obj)

        refreshAlarmsInUI()
    }

    deleteAlarm(id){
        this.alarms = this.alarms.filter((alarm)=>alarm.id!=id)
    }

    playAlarm(id){
        console.log("Alarm playing for ID ",id)
    }

    snoozeOrOff(id,cancel=false){
        this.alarms.map((alarm)=>{
            if(id===alarm.id){
                const para = document.getElementById(id).getElementsByTagName("p")[0]
                if(alarm.snoozeRemaining===0 || cancel){
                    // Set it for next week
                    para.innerText="Cancelling alarm for today"
                    const newTime = Date.now() + 7*24*60*60*1000 - 5*60*1000*(3-alarm.snoozeRemaining)
                    alarm.time = Utilities.formatTime(newTime)
                }else{
                    // Set it for 5 mins in the future
                    para.innerText="Snoozing for 5 mins"
                    const newTime = Date.now(alarm.time) + 5*60*1000
                    alarm.time=Utilities.formatTime(new Date(newTime))
                }
                alarm.snoozeRemaining=alarm.snoozeRemaining-1
            }
            setTimeout(()=>refreshAlarmsInUI(),2000)

            return alarm
        })
    }
}

const clock = new Clock()

const addAlarmBtn = document.getElementById("submit")
const alarmDay = document.getElementById("day")
const alarmTime = document.getElementById("time")
const alarms = document.getElementById("alarms")

addAlarmBtn.addEventListener("click",() => {
    console.log(alarmTime.value,alarmDay.value)

    const timeForAlarm = Utilities.getAlarmTime(alarmDay.value,alarmTime.value)
    // console.log(timeForAlarm)
    clock.setAlarm(timeForAlarm)
})

const isTimeSame = (time1,time2) => {

    // console.log(time1,new Date(time2))
    const f1 = Utilities.formatTime(time1)
    const f2 = Utilities.formatTime(time1)

    // console.log(f1.getTime()===f2.getTime())
    // // console.log(`comparing for ${Utilities.formatTime(new Date(time1))} and ${Utilities.formatTime(new Date(time2))}`)
    
    if(f1.getTime()===f2.getTime()){
        return true;
    }
    return false;
    // if(Date.now(Utilities.formatTime(new Date(time1)))===Date.now(Utilities.formatTime(new Date(time1)))){
    //     console.log("in true")
    //     return true;
    // }
    // console.log("in false")
    // return false;
}

console.log(isTimeSame(new Date(), new Date().setMinutes(20)))


setInterval(function(){
    const alarms = clock.getAlarms()
    alarms.forEach((alarm)=>{

        if(isTimeSame(alarm.time,new Date())){
            clock.playAlarm(alarm.id)

            const elem = document.getElementById(alarm.id)
            const para = document.createElement("p")
            para.innerText="Ringing"
            elem.appendChild(para)
            window.addEventListener("keydown",e=>handleSnoozeCancel(e,alarm.id,elem),{once:true})
        }
    })
},60*1000)

function handleSnoozeCancel(e,alarmId,elem){
    if(e.key==="s"){
        clock.snoozeOrOff(alarmId)
    }else if(e.key==="c"){
        clock.snoozeOrOff(alarmId,true)
    }else{
        window.alert("Invalid response, snoozing the alarm for 5 mins")
        clock.snoozeOrOff(alarmId)
    }
}
// clock.getAlarms()
// let currTime = new Date()

// currTime.setMinutes(30)
// clock.setAlarm(currTime)

// currTime.setDate(13)

// clock.setAlarm(currTime)

// currTime.setMinutes(35)
// clock.setAlarm(currTime)

// currTime.setHours(23)
// clock.setAlarm(currTime)

// clock.getAlarms()

