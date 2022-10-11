const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const fortuneSubmitBtn = document.getElementById("fortuneSubmit")
const complimentDeleteBtn = document.getElementById("complimentDelete")
const fortuneDeleteBtn = document.getElementById("fortuneDelete")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
};

const newFortune = (body) => {
    axios.post("http://localhost:4000/api/fortune/", body)
        .then(res => {
    alert("You added a fortune to the fortune list.")})     
};

const fortuneSubmission = () => {
    let fortuneSubmission = document.querySelector("#addFortune")
    let bodyObj = {
        fortune: fortuneSubmission.value
    }
    newFortune(bodyObj)
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
fortuneSubmitBtn.addEventListener('click', fortuneSubmission)
