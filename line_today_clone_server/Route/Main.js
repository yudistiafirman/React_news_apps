const Router=require('express').Router()
const { getNewfromLineApi, getImage } = require('../Controller/lineController')




Router.get('/news',getNewfromLineApi)
Router.get('/image',getImage)

module.exports=Router