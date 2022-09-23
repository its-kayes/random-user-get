// const { fs } = require("file-system");
// const file = require('file-system');
const fs = require('fs');
const path = require('path');
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

module.exports.saveUsers = async (req, res) => {
    try {
        let preData = users;
        const user = req.body;
        // console.log(user);
        // const newData = preData.push(user);
        preData.push(user);

        // console.log(newData);
        return res.send(preData);
        // res.send({UpdateData: newData});

    } catch (error) {

    }
}
