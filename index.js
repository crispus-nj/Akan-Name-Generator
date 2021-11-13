// data in array
let femaleAkanNames = [
    "Akosua",
    "Abenaa",
    "Kwabena",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
];
let makeAkanName = ["Kwasi", "Kwadwo", "kwaku", "Yaw", "Kofi", "Kwame"];
let dayOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
];
let buttonOnsubmit = document.getElementById("btn-submit");
buttonOnsubmit.addEventListener("click", (e) => {
    e.preventDefault();
    generateName(e)
});


generateName = (e) => {
    e.preventDefault()
    let name = document.getElementById("name").value;
    let dateOfBirth = document.getElementById("date").value;
    let gender = document.getElementById("gender").value;
    let dateNumber = new Date(dateOfBirth).getDay()
    // console.log(name, dateNumber, gender);
    if(gender == "male"){
        console.log(`Your name is ${name} and you were born on ${dayOfTheWeek[dateNumber]} and your akan name is ${makeAkanName[dateNumber]}`)
    }else{
        console.log(`Your name is ${name} and you were born on ${dayOfTheWeek[dateNumber]} and your akan name is ${femaleAkanNames[dateNumber]}`)
    }

};

