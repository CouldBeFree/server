const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Another middleware');
    res.send('<h1>Root route</h1>')
});

module.exports = router;
