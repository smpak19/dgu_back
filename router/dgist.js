const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    // res.send('hello dgist');
    console.log("here is dgist")
});

module.exports = router;
