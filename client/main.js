const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const fortuneSubmitBtn = document.getElementById("fortuneSubmit")
const fortuneDeleteBtn = document.getElementById("fortuneDelete")
const fortuneDeleteDropdown = document.getElementById("fortuneDeleteDropdown")
const fortuneEditBtn = document.getElementById("fortuneEdit")
const fortuneEditDropdown = document.getElementById("fortuneEditDropdown")

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

const deleteFortune = () => {
    axios.delete("http://localhost:4000/api/fortune/:id")
        .then(res => {
            alert("You deleted a fortune.")
        })
}

const editFortune = () => {
    let fortuneId = fortuneEditDropdown.value;
    console.log(fortuneId)
    axios.put("http://localhost:4000/api/fortune/", (req, res) => {
        
    } )
        .then(res => {
            alert("You changed your fortune.")
        })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
fortuneSubmitBtn.addEventListener('click', fortuneSubmission)
fortuneDeleteBtn.addEventListener('click', deleteFortune)
fortuneEditBtn.addEventListener('click', editFortune)
