const express = require('express');
const router = express.Router()
const service = require('../service/user');
const validator = require('../validator/user');
const { celebrate } = require('celebrate');

router.get('/users', (req,res) => {
    // call service and return data to res
    service.findAll().then((data) => {
        res.status(200).json(data)
    }).catch((error) => {
        res.status(500).json(error)
    })
})

router.get('/user/:id',celebrate(validator.getUser), (req,res) => {
    // call service and return data to res
    service.findUser(req.params.id).then((data) => {
        res.status(200).json(data)
    }).catch((error) => {
        res.status(500).json(error)
    })
})

// to create a new user
router.post('/user', celebrate(validator.createUser), (req, res)=> {
    service.createUser(req.body).then((data) => {
        console.log(data)
       return res.status(200).json(data)
    }).catch((error) => {
       return res.status(500).json(error)
    }) 
})

router.put('/user/:id',celebrate(validator.updateUser), (req,res) => {
    // call service and return data to res
    service.updateUser(req.params.id, req.body).then((data) => {
        res.status(200).json(data)
    }).catch((error) => {
        res.status(500).json(error)
    })
})

router.delete('/user/:id',celebrate(validator.deleteUser), (req,res) => {
    // call service and return data to res
    service.deleteUser(req.params.id).then((data) => {
        res.status(200).json(data)
    }).catch((error) => {
        res.status(500).json(error)
    })
})

router.get('/typeahead/:input',celebrate(validator.typeahead), (req,res) => {
    // call service and return data to res
    service.typeahead(req.params.input).then((data) => {
        res.status(200).json(data)
    }).catch((error) => {
        res.status(500).json(error)
    })
})

module.exports = router;
