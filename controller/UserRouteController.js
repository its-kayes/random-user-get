const users = require("../users.json");

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

module.exports.randomUser = async (req, res) => {
    try {
        const data = users;
        const randomId = Math.floor(Math.random() * data.length);
        console.log(randomId);
        res.send({id: randomId});
    } catch (error) {

    }
}