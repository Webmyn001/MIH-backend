const express = require('express')
const mongoose = require('mongoose')
const Lesson = require ("../models/lessonModel")

const {createLesson,
    deleteLesson,
    getLessons,
    getLesson,
    updatelesson,
   
} = require('../controller/lessonController')

const router = express.Router()




router.post('/add', createLesson)
router.get('/', getLessons)
router.get('/:id', getLesson)
router.delete('/:id', deleteLesson)
router.patch('/:id', updatelesson)


 

module.exports= router
