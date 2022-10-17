const cors = require('cors')
const express = require('express');
const mongoose = require("mongoose");
const router = require('./routes');

const serverApp = require('./routes/user');
serverApp().then(app=>{
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use("/api/v1", router)

    const corsOption = {
        origin: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
        exposedHeaders: [
            "x-auth-token",
            "authorization",
        ]
    };
    app.use(cors(corsOption));

    mongoose.connect("mongodb+srv://ayushi:ayushi123@cluster0.z61ir0f.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true, useUnifiedTopology: true,
    }).then(() => {
        console.log("database connected successfully!!");
    }).catch((error) => {
        console.log("error", error);
    })
    const port = 3000;
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

})


