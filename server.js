const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let watchRequests = [];

// API to Receive Video Link & Screens Count
app.post("/start-watch", (req, res) => {
    const { videoUrl, screens } = req.body;
    if (!videoUrl || !screens) {
        return res.status(400).json({ message: "Missing video URL or screens count" });
    }

    watchRequests.push({ videoUrl, screens, timestamp: new Date() });
    res.json({ message: "Watch request added successfully!" });
});

// API to Get Watch Requests (For Debugging)
app.get("/watch-requests", (req, res) => {
    res.json(watchRequests);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));