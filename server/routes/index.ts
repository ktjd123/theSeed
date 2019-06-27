import express from 'express';
import auth from './auth';

const router = express();

router.use('/auth', auth);

router.get('/heart_beat', async (req: express.Request, res: express.Response) => {
  res.send();
});

export default router;
