const express = require('express');

const router = express.Router();

const Event = require('../models/eventModel')

router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).send(events)
    } catch (error) {
        console.log(error)
    }
})


router.post('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) {
            res.status(404).json({
                message: "Event not present"
            })
        }

        event.participants += 1;
        await event.save();

        res.status(200).send(event);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;