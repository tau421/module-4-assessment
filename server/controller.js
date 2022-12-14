const fortunes =  ["A faithful friend is a strong defense.","A fresh start will put you on your way.","A golden egg of opportunity falls into your lap this month.","A lifetime friend shall soon be made.","A light heart carries you through all the hard times."]

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
        
        
        let randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomFortuneIndex];

        res.status(200).send(randomFortune);
    }

    ,

    addFortune: (req, res) => {
        let {fortune} = req.body;
        fortunes.push(fortune)
        res.status(200).send(fortunes)
    }

    ,

    deleteFortune: (req, res) => {
        const { id } = req.params
        fortunes.splice(id-1 , 1)
        res.status(200).send(fortunes)
    }

    ,

    editFortune: (req, res) => {
        const { id } = req.params
        fortunes.splice(id-1, 1, fortunes[id-1].toUpperCase())
        res.status(200).send(fortunes)
    }
}