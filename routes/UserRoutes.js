const express = require('express');
const router = express.Router();
const usersRoute = require("../controller/UserRouteController.js");

router
    .get("/all", usersRoute.getAllUsers);


module.exports = router;