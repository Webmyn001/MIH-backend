const express = require('express')
const mongoose = require('mongoose')
const Lesson = require ("../models/lessonModel")

const {
    CreateUpdate,
    deleteUpdate,
    getUpdateNews,
} = require ('../controller/lessonController')

const router = express.Router()



router.post('/addupdate', CreateUpdate)
router.get('/getupdates', getUpdateNews)
router.delete('/deleteupdate/:id',deleteUpdate)
 

module.exports= router
