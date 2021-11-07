import express from 'express'
import {alumnos, carreras, create, deleteCarrera, deleteCarreraGet} from '../controllers/loadController.js'
const router = express.Router()

router.get('/', alumnos,(req,res)=>{
    res.render('alumnos', {alumno: req.alumnos })
})

router.get('/carreras', carreras,(req,res)=>{
    res.render('carreras', {carrera: req.carreras})
})

router.get('/deleteCarrera', deleteCarreraGet, (req,res)=>{
    res.render('deleteCarrera', {carrera:req.carreras})
})

router.post('/carreras', create)
router.post('/deleteCarrera', deleteCarrera)

export default router