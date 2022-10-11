const fortunes = require('./db.json')

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

    ,

    getFortune: (req, res) => {
        const fortuneGenerator =  ["A faithful friend is a strong defense.","A fresh start will put you on your way.","A golden egg of opportunity falls into your lap this month.","A lifetime friend shall soon be made.","A light heart carries you through all the hard times."]
        
        let randomFortuneIndex = Math.floor(Math.random() * fortuneGenerator.length);
        let randomFortune = fortuneGenerator[randomFortuneIndex];

        res.status(200).send(randomFortune);
    }

    ,

    addFortune: (req, res) => {
        let {fortuneData} = req.body;
        let newFortune = {
            fortuneData
        }
        fortunes.push(fortuneData)
        res.status(200).send(fortunes)
    }
}