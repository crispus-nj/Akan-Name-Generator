// data in array
let femaleAkanNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
];
let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let dayOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
];
let user_answer = document.querySelector(".user-answer") 
// console.log(user_answer)
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
    // user_answer.innerHTML()
    // console.log(name, dateNumber, gender);
    if(gender == "male"){
        
      user_answer.innerHTML = `<div>
      <h4>Name: ${name} </h4>
      <h4>Date Of Birth: ${dateOfBirth}</h4>
      <h4>Gender: ${gender} </h4>
      <h4><strong>Day of the week born</strong>: ${dayOfTheWeek[dateNumber]}</h4>
      <h4><strong>Akan Name</strong>: ${maleAkanNames[dateNumber]}</h4>

  </div>`
    }else{
       user_answer.innerHTML = `<div>
       <h4>Name: ${name} </h4>
       <h4>Date Of Birth: ${dateOfBirth}</h4>
       <h4>Gender: ${gender} </h4>
       <h4><strong>Day of the week born</strong>: ${dayOfTheWeek[dateNumber]}</h4>
       <h4><strong>Akan Name</strong>: ${maleAkanNames[dateNumber]}</h4>

   </div>`        // console.log(`Your name is ${name} and you were born on ${dayOfTheWeek[dateNumber]} and your akan name is ${femaleAkanNames[dateNumber]}`)
    }

};

