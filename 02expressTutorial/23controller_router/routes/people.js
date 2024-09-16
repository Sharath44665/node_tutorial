const express = require('express')
const router = express.Router();
const { getAll, addPerson, postman, personUpdate, personDelete } = require('../controllers/people');

router.get('/', getAll ) 
// or you can use the below format 
// router.route('/').get(getAll)
router.post('/', addPerson) 
// or
// router.route('/').post(addPerson)
router.post('/postman', postman) 
router.put('/:id', personUpdate)
router.delete('/delete/:id', personDelete)

module.exports = router;
