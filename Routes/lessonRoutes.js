const express = require('express')
const mongoose = require('mongoose')
const Lesson = require ("../models/lessonModel")
const multer = require('multer')

const {createLesson,
    deleteLesson,
    getLessons,
    getLesson,
    updatelesson,
   
} = require('../controller/lessonController')

const router = express.Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Images")
  },
  filename: function(req, file, cb){
    cb(null, file.originalname)
  }
})



  let upload = multer({storage : storage})
  const multipleUpload = upload.fields([
    {name : "IDcardimage",  maxCount: 1 },
    {name: "Jambimage",  maxCount: 1 }

])


router.post('/add', createLesson)
router.get('/', getLessons)
router.get('/:id', getLesson)
router.delete('/:id', deleteLesson)
router.patch('/:id', updatelesson)


 

module.exports= router
