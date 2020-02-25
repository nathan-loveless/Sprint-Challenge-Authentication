const router = require('express').Router();

const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

router.use('/auth', authRouter);
router.use('/jokes', jokesRouter);

router.get('/', (req, res) => {
  res.json({ api: "Online" });
});

module.exports = router;