import express from 'express';

const router = express.Router();

router.get('/menu1', (_, res) => {
    res.json({ items: ['Menu 1'] });
});

router.get('/menu2', (_, res) => {
    res.json({ items: ['Menu 2'] });
});

router.get('/getDynamicContent/:menu', (req, res) => {
    const menu = req.params.menu;
    res.render('dynamicContent', { items: [menu] });
});

export default router;
