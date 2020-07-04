const express = require('express');
const router = express.Router();
require('../db/mongoose')
const User = require('../db/model/user')

const multer = require('multer');

const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, callback) {
        if (file.originalname.endsWith('.pdf')) {
            return callback(new Error('Please Upload a pdf.'));
        }
        callback(undefined, true);
    }
});

const uploadDP = multer({
    dest: 'images/avatars',
    limits: {
        fileSize: 10000000
    },
    fileFilter(req, file, cb) {
        if (file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload a image.'));
        }
        cb(undefined, true);
    }
});


router.post("/upload", upload.single('upload'), (req, res) => {
    res.send();
});

router.post("/users/me/avatar", uploadDP.single('uploadDP'), (req, res) => {
    res.send();
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message });
});


router.post("/users", async(req, res) => {

    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }

});

router.get("/users", async(req, res) => {
    try {
        const users = await User.find({});

        res.status(201).send(users)
    } catch (e) {
        res.status(400).send(e)
    }
});

router.get("/user/:id", async(req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findById(_id);
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(user);
    }
});

router.patch("/user/:id", async(req, res) => {
    const _id = req.params.id;
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    });

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid Updates' });
    }

    try {
        const user = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
        if (!user)
            return res.status(404).send(user)
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error)
    }
});

module.exports = router;