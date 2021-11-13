// data in array
let dayOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
];
let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

let femaleAkanNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
];

// let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

// answer section
let user_answer = document.querySelector(".user-answer")
// console.log(user_answer)
let buttonOnsubmit = document.getElementById("btn-submit");
buttonOnsubmit.addEventListener("click", (e) => {
    e.preventDefault();
    generateName(e)
});


generateName = (e) => {
    let name = document.getElementById("name").value;
let dateOfBirth = document.getElementById("date").value;
let gender = document.getElementById("gender").value;
let dateNumber = new Date(dateOfBirth).getDay()
    e.preventDefault()
    // user_answer.innerHTML()
    // console.log(name, dateNumber, gender);
    if (gender == "male") {
       return user_answer.innerHTML = `
        <div>
            <h5><strong>Name</strong>: ${name} </h5>
            <h5><strong>Date Of Birth</strong>:${dateOfBirth}</h5>
            <h5><strong>Gender</strong>: ${gender} </h5>
            <h5><strong>Day of the week</strong>: ${dayOfTheWeek[dateNumber]}</h5>
            <h5><strong>Akan Name</strong>:${maleAkanNames[dateNumber]}</h5>
         </div>`
    //  console.log(`Your name is ${name} and you were born on ${dayOfTheWeek[dateNumber]} and your akan name is ${maleAkanNames[dateNumber]}`)

    }else {
      return  user_answer.innerHTML = `
       <div>
            <h5><strong>Name</strong>: ${name} </h5>
            <h5><strong>Date Of Birth</strong>:${dateOfBirth}</h5>
            <h5><strong>Gender</strong>: ${gender} </h5>
            <h5><strong>Day of the week</strong>: ${dayOfTheWeek[dateNumber]}</h5>
            <h5><strong>Akan Name</strong>:${femaleAkanNames[dateNumber]}</h5>
     </div>
       `        
    //    console.log(`Your name is ${name} and you were born on ${dayOfTheWeek[dateNumber]} and your akan name is ${femaleAkanNames[dateNumber]}`)
    }
    

};

