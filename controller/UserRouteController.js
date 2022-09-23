const users = require("../users.json");

module.exports.getAllUsers = async (req, res) => {
    console.log(users);
    res.send(users);
}