import express from 'express';
import kitten from './kittens';

const router = express();

router.use('/kitten', kitten);

router.get('/heart_beat', async (req, res) => {
  res.send('hi');
});

export default router;
