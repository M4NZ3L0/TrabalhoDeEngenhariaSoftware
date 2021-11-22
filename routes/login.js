import express from "express";
import loginAuth from "../models/logic/LoginAuthentication.js";

const router = express.Router();


router.route("/login").get((req, res) => {
    res.render("login.ejs");
}).post(loginAuth);


export default router;