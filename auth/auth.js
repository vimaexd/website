const express = require("express")
const fetch = require("node-fetch")
const btoa = require('btoa');
const queryString = require('querystring')
const config = require("../config.json")
const router = express.Router()

let redirect, redirect_raw, url;
if(process.env.NODE_ENV === "production"){
    url = config.urls.prod
    redirect = encodeURIComponent("https://stringy.software/auth/callback")
    redirect_raw = "https://stringy.software/auth/callback"
} else {
    redirect = encodeURIComponent("http://localhost:8080/auth/callback");
    redirect_raw = "http://localhost:8080/auth/callback"
    url = config.urls.dev
}

router.all('/', (req, res) => {
    res.redirect("https://www.youtube.com/watch?v=RKW6rjnYEkc")
})

router.all('/login', (req, res) => {
    res.redirect(`https://discord.com/oauth2/authorize?client_id=${config.discordKeys.clientID}&response_type=code&redirect_uri=${redirect}&scope=identify`)
})

router.all('/logout', (req, res) => {
    res.clearCookie("at")
    res.clearCookie("tt")
    res.redirect('/')
})

router.all('/callback', async (req, res) => {
    console.log(redirect)
    if(!req.query.code) return res.json({success: false, message: "No code supplied"})
    let dscres = await fetch("https://discord.com/api/oauth2/token", {
        method: "POST",
        body: queryString.stringify({
            'client_id': config.discordKeys.clientID,
            'client_secret': config.discordKeys.clientSecret,
            'grant_type': 'authorization_code',
            'code': req.query.code,
            'redirect_uri': redirect_raw,
            'scope': 'identify'
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    let oauth = await dscres.json()
    let access_token = oauth.access_token
    let token_type = oauth.access_token

    fetch(`https://api.stringy.software/auth/addusertodb?strsftauth=${config.strsftauth}&accesstoken=${access_token}&tokentype=${token_type}`, {
        method: 'POST'
    })
    .then(res => res.json())
    .then(diderror => {
        if(!diderror.success){
            return res.json({success: false, error: diderror.message})
        }
    })

    res.cookie('at', access_token);
    res.cookie('tt', token_type);

    res.redirect("/")
})

module.exports = router;