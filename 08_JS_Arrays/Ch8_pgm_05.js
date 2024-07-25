
var reportForFriday = getVisitorReport(visitors, 5);
console.log(reportForFriday); 

var getVisitorReport = function (visitorArray, dayInWeek) {
    var days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    var index = dayInWeek - 1;
    var visitorReport;

    if (index < 0 || index >= days.length) {
        return "Invalid day index";
    }

    visitorReport = "There were ";
    visitorReport += visitorArray[index];
    visitorReport += " visitors ";
    visitorReport += "on " + days[index];

    return visitorReport;
};

var getMonthlyVisitorReport = function (monthArray, weekIndex, dayIndex) {
    var week = monthArray[weekIndex];
    
    if (!week) {
        return "Invalid week index";
    }
    
    return getVisitorReport(week, dayIndex);
};

var week1 = [354, 132, 210, 221, 481, 300, 250];
var week2 = [400, 150, 220, 230, 500, 320, 270];
var week3 = [420, 160, 230, 240, 490, 310, 260];
var week4 = [430, 170, 240, 250, 510, 330, 280];

var month = [week1, week2, week3, week4];
console.log(getMonthlyVisitorReport(month, 0, 5)); 
console.log(getMonthlyVisitorReport(month, 2, 7)); 
console.log(getMonthlyVisitorReport(month, 1, 4)); 
