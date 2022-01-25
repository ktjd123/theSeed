import express from "express";

const router = express();

router.get("/heart_beat", async (req, res) => {
  res.sendStatus(200);
});

export default router;
