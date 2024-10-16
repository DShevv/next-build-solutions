import express from "express";
import { sendFeedback } from "./bot.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.post("/feedback", async (req, res) => {
  try {
    const { phone, comment } = req.body;

    if (!phone) {
      return res.status(400).send("Недостаточно параметров");
    }
    console.log(phone, comment);
    sendFeedback(phone, comment);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
