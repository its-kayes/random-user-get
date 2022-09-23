const users = require("../users.json");


// Get all users by limits
module.exports.getAllUsers = async (req, res) => {
    try {
        const query = req.query;
        if (query) {
            const { limit } = query;
            const data = await users.slice(0, limit);
            res.send(data)
        }
        else {
            res.send(users)
        }
    } catch (error) {
        console.log(error);
        res.send(error.massage);
    }
}


// Get Random Files
module.exports.randomUser = async (req, res) => {
    try {
        const data = users;
        const randomId = Math.floor(Math.random() * data.length);
        const filteredData = data.filter(data => data.id === (randomId + 1));
        res.send(filteredData);
    } catch (error) {
        res.send(error.massage);
    }
}

