const button = document.getElementById("themeBtn");

button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Switch to Light Mode";
    } else {
        button.textContent = "Switch to Dark Mode";
    }
})

document.getElementById("changeJobBtn").addEventListener("click", () => {
  const newTitle = prompt("Enter a new job title:");

  if (newTitle && newTitle.trim() !== "") {
    document.getElementById("job-title").textContent = newTitle;
  }
});

const btn = document.getElementById("skillsBtn");
const skills = document.getElementById("skills-info");

btn.addEventListener("click", () => {
    if (skills.style.display === "none") {
        skills.style.display = "block";
        btn.textContent = "Hide Skills"
    } else {
        skills.style.display = "None";
        btn.textContent = "Show Skills";
    }
});

const message = document.getElementById("message");
const counter = document.getElementById("counter");

message.addEventListener("keypress", () => {
    const max = message.maxLength;
    const current = message.value.length;
    const remaining = max - current;

    counter.textContent = remaining;

    if (remaining <= 20) {
        counter.style.color = "red";
    } else {
        counter.style.color = "white";
    }
});

function validateForm() {
    const name = document.getElementById("nameField").value.trim();
    const email = document.getElementById("emailField").value.trim();

    if (name === "" || email === "") {
        alert("Please Fill Out the Name and Email Before Sending.");
        return false;
    }
    return true;
};

const dateDisplay = document.getElementById("dateDisplay");
const today = new Date().toLocaleDateString();

dateDisplay.textContent = today;

const profilePic = document.getElementById("profile-img");
const changePic = document.getElementById("changePicBtn");

const Photos = [
    "kyroll.png",
    "graduateKyroll.png",
    "formalKyroll.png"
];

let index = 0;
changePic.addEventListener("click", () => {
    index++;

    if (index >= Photos.length) {
        index = 0;
    }

    profilePic.src = Photos[index]

});

