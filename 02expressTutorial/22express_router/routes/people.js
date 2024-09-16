const express = require('express')
let {people} = require('../data')
const router = express.Router();


router.get('/', (req, res) => {
    res.json({success: true, data: people})         
})  



router.post('/', (req, res) => {
    // inspect -> network -> payload ( to see the data what we pased in form)

    // console.log(req.body)
    const {name} = req.body

    if (!name) {
        return res.status(400).send({sucess: false, msg: 'please add some value'})
    }
    return res.status(201).send({sucess: true, person: name}) // 201 is required for post 
            
})


router.post('/postman', (req, res) => {
    const {name} = req.body;
    if (!name){
        return res.status(400).send({success: false, msg: "Hey something went wrong"})
    }
    
    return res.status(201).send({success:true, userData: [...people, name]})
}) 

router.put('/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body

    const person = people.find((person) => {
        if (person.id === Number(id)){
            return person
        }
    })

    if (!person){
        return res.status(400).send(`Person with id:${id} not found`)
    }

    const newUpdate = people.map((p)  => {
        if (p.id === Number(id)){
            p.name =name;
        }
        return p;
    })

    return res.status(200).send({success: true, data: newUpdate    })

} )


router.delete('/delete/:id', (req, res) => {
    const person = people.find((person) => {
        if (person.id === Number(req.params.id)){
            return person
        }       
    })

    if (!person){
        return res.status(400).send({success: false, error: `Person with id:${req.params.id} not found`})
    } 

    const newPerson = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({sucess: true, data: newPerson})
})

module.exports = router;
