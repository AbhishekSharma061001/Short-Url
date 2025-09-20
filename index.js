const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./connection");
const { checkForAuthentication, restrictTo } = require("./middlewares/auth");

const URL = require("./models/url");

const userRoute = require("./routes/user");
const urlRoute = require("./routes/urlRoutes");
const staticRoute = require("./routes/staticUrl");

const app = express();
const PORT = 8000;

connectDB("mongodb://localhost:27017/short-url").then(() => {
    console.log("DB Connected");
});

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(checkForAuthentication);

app.use("/url",restrictTo(["NORMAL"]), urlRoute);
app.use("/user",userRoute);
app.use("/", staticRoute);

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    if(!shortId){
        return res.status(400).json({error : "ShortId is required"});
    }
    const entry = await URL.findOneAndUpdate(
        {shortId},
        {$push :{
            visitHistory : {
                timeStamp : Date.now(),
            }
        }
    });
    if(!entry){
        return res.status(404).json({error : "Short URL not found"});
    }
    res.redirect(entry.redirectURL);
})

app.listen(PORT,() => {
    console.log(`Server Started at PORT : ${PORT}`);
});