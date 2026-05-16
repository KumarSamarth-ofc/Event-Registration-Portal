const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')
const Event = require('./models/eventModel')

app.use(cors());
app.use(express.json());

const eventRoutes = require('./routes/eventRoutes')

mongoose.connect("mongodb://127.0.0.1:27017/eventportal")
    .then(async () => {
        console.log("MongoDB Connected!");

        const count = await Event.countDocuments();

        if (count == 0) {
            await Event.insertMany([
              {
                eventName: "Tech Fest 2026",
                date: "10 June 2026",
                location: "Delhi",
                participants: 12,
              },
              {
                eventName: "AI Workshop",
                date: "15 June 2026",
                location: "Mumbai",
                participants: 8,
              },

              {
                eventName: "Hackathon",
                date: "20 June 2026",
                location: "Bangalore",
                participants: 25,
              },
            ]);

            console.log("Events added");
        }
    })
    .catch((err) => {
        console.log(err);
    });
app.use('/api/event', eventRoutes);

app.listen(3000, () => {
    console.log("3000 server running!!")
})
