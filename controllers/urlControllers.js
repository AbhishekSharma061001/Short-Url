const { nanoid } = require("nanoid");
const URL = require("../models/url.js");

async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;
    if(!body.URL){
        return res.status(400).json({error : "URL is required"});
    }
    const shortId = nanoid(8);
    await URL.create({
        shortId: shortId,
        redirectURL : body.URL,
        visitHistory : [],
        createdBy : req.user._id,
    });
    return res.render("home",{
        id : shortId,
    });
}

async function handleGenerateAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    if(!result){
        return res.status(404).json({error : "Short URL not found"});
    }
    return res.json({
        totalClicks : result.visitHistory.length,
        analytics : result.visitHistory,
    });
}


module.exports = {
    handleGenerateNewShortUrl,
    handleGenerateAnalytics,
}