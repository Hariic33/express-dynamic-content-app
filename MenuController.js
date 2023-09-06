import express from 'express';

const router = express.Router();

router.get('/menu1', (_, res) => {
    res.json({ items: ['Menu 1'] });
});

router.get('/menu2', (_, res) => {
    res.json({ items: ['Menu 2'] });
});

export default router;
