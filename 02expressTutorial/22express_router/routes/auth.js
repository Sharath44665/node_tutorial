const express = require('express');
const router = express.Router()


router.post('/', (req, res) => {
    // console.log(req.body) // [Object: null prototype] { name: '  demo' } 
    // please note that, there is name in html form
    const { name } = req.body;

    if (name) {
        return res.status(200).send({success: true, msg: `Successful login for ${name}`})
    }

    return res.status(404).send({success: false, msg:       'Error! Please add the user'})  
}) 

module.exports= router