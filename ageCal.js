let userBdayDate = document.getElementById("date");
userBdayDate.max = new Date().toISOString().split("T")[0];

let year = document.getElementById("year");
let month = document.getElementById("month");
let days = document.getElementById("days");

function calcAge() {
    let birthdayValue = userBdayDate.value;


    if (!birthdayValue) {
        alert("No date selected");
        return;  
    }

    let birthday = new Date(birthdayValue);

    let dateBirth = birthday.getDate();
    let monthBirth = birthday.getMonth() + 1; 
    let yearBirth = birthday.getFullYear();

    let currentDate = new Date();
    let yourDate = currentDate.getDate();
    let yourMonth = currentDate.getMonth() + 1;  
    let yourYear = currentDate.getFullYear();

    let yourAgeYear = yourYear - yearBirth;
    let yourAgeMonth;
    let yourAgeDay;


    if (yourMonth >= monthBirth) {
        yourAgeMonth = yourMonth - monthBirth;
    } else {
        yourAgeYear--;  
        yourAgeMonth = 12 + yourMonth - monthBirth;
    }

    if (yourDate >= dateBirth) {
        yourAgeDay = yourDate - dateBirth;
    } else {
        yourAgeMonth--;  
        if (yourAgeMonth < 0) {  
            yourAgeMonth = 11;
            yourAgeYear--;
        }
        yourAgeDay = getExactDate(yourYear, yourMonth - 1) + yourDate - dateBirth;
    }

    year.innerHTML = yourAgeYear;
    month.innerHTML = yourAgeMonth;
    days.innerHTML = yourAgeDay;

}

function getExactDate(year, month) {
    return new Date(year, month, 0).getDate(); 
}
