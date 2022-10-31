const cors = require('cors')
const express = require('express');
const mongoose = require("mongoose");
const expressJSDocSwagger = require('express-jsdoc-swagger');
const validators = require("./common/validators");
const router = require('./routes');

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use("/", router)
const options = {
    info: {
        version: '1.0.0',
        title: 'User Management',
        license: {
            name: 'MIT',
        },
    },
    filesPattern: './controller/*.js',
    baseDir: __dirname,
};
const instance = expressJSDocSwagger(app)(options);
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
mongoose.connect("mongodb+srv://ayushi:ayushi123@cluster0.ujmhr25.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true,
}).then(() => {
    console.log("database connected successfully!!");
}).catch((error) => {
    console.log("error", error);
})

validators(instance).then(({ validateRequest }) => {
    app.use(
        "/api/v1",
        validateRequest({
            header: false,
        }),
        router
    );
    const port = 4000;
    app.listen(port, () =>
        console.log(`Example app listening at http://localhost:${port}`)
    );
});
// const port = 4000;
// module.exports=app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));




