import { getGptResponse, testGptConnection } from '../services/gptApi';
import { Router } from 'express';

const router = Router();

router.post('/', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await getGptResponse(message);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const response = await testGptConnection();
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
