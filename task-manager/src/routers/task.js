const express = require('express');
require('../db/mongoose');
const Task = require('../db/model/task');
const router = express.Router();


router.get("/task/:id", async(req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findById(_id);
        if (!task)
            return res.status(404).send();
        res.status(201).send(task);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.post("/task", async(req, res) => {
    const task = new Task(req.body);
    try {
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/task", async(req, res) => {
    try {
        const task = await Task.find({});
        if (!task)
            return res.status(404).send();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.patch('/task/:id', async(req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    });
    if (!isValidOperation)
        return res.status(400).send({ error: 'Invalid Updates' });

    try {
        const task = Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
        if (!task)
            return res.status(404).send();
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;