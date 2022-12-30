function createEmployeeRecord(array){
    let record = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return record;
    
};

function createEmployeeRecords(arrays){
    return arrays.map((array)=>createEmployeeRecord(array))
};

function createTimeInEvent (object, timeStamp){
    // let record = createEmployeeRecord(object);
    let [date, hour] = timeStamp.split(' ')
    object.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date,
    })
    // console.log(record)
    return object
    
};

function createTimeOutEvent(object, timeStamp){
    // let record = createEmployeeRecord(object);
    let [date, hour] = timeStamp.split(' ')
    object.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date,
    })
    // console.log(record)
    return object
};

function hoursWorkedOnDate(object, timeStamp){

    let dateIn = object.timeInEvents.find((e) => e.date === timeStamp)
    let dateOut = object.timeOutEvents.find((e) => e.date === timeStamp)

    return (dateOut.hour - dateIn.hour) / 100
};

function wagesEarnedOnDate(object, date){
let wage = hoursWorkedOnDate(object,date) * object.payPerHour
return wage
return parseFloat(wage.toString())
};

function allWagesFor(object){
    let workDates = object.timeInEvents.map((e)=>e.date)
    let totalPay = workDates.reduce((e,date)=> e + wagesEarnedOnDate(object, date), 0)
    return totalPay
};

function calculatePayroll(array){
    return array.reduce((e, r) => e + allWagesFor(r), 0)
};
