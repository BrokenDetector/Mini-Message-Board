const express = require("express");
const router = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Mini Message Board", messages: messages });
});

router
    .route("/new")
    .get(function (req, res) {
        res.render("form", { title: "Mini Message Board" });
    })
    .post(function (req, res, next) {
        console.log(req.body.messageUser, req.body.messageText);
        messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });
        res.redirect("/");
    });

module.exports = router;
