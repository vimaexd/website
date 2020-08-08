const express = require("express")
const pack = require("./package.json")
const colors = require("colors")
const app = express()

app.set('view engine', 'ejs')

app.use(express.static("./views/front", {
    extensions: ['html', 'htm'],
}))

app.use("/fluterun", express.static("./views/flutequest"));
app.use("/assets", express.static("assets"));
app.use("/idiotcon", express.static("./views/idiotcon"));
app.use("/auth", require('./auth/auth'));

app.get("/profile/:userid", (req, res) => {
    res.render("profile/profile", {userID: req.params.userid});
})

// bad
// app.get("/setCookie", (req, res) => {
//     res.cookie('access_token', req.query.access_token, {maxAge: 1209600000});
//     res.cookie('token_type', req.query.token_type, {maxAge: 1209600000})
//     res.redirect("/")
// })

app.listen("8080", () => {
    console.log("Stringy Software Site".yellow.bold)
    console.log(`v${pack.version} | Running in whogivesashit mode`.green)
    console.log("by etStringy | :ufo:".blue)
    console.log(`Listening on port 8080`.reset)
})