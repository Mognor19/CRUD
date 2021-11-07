import { render } from 'pug';
import con from '../database/connection.js'

export const alumnos = (req, res, next)=>{
    con.query('SELECT * FROM alumno', (err, result)=>{
        if(err){
            console.log('Ocurrio un error al seleccionar los datos.');
            return
        }
        req.alumnos = result
        next()
    })
}

export const carreras = (req,res, next)=>{
    con.query('SELECT * FROM carrera', (err,result)=>{
        if(err){
            console.log('Ocurrio un error al seleccionar los datos.');
            return
        }
        req.carreras = result
        next()
    })
}

export const create = (req,res,next)=>{
    const {carrera, mensualidad, numeroClases} = req.body

    const data = {
        nombreCarrera:carrera,
        mensualidad:mensualidad,
        numeroClases:numeroClases
    }

    con.query('INSERT INTO carrera SET ?',data, (err,result)=>{
        if(err){
            console.log('Ocurrio un error al seleccionar los datos.');
            return
        }
        res.render('carreras')
    })
}

export const deleteCarrera = (req, res) => {
    const {idCarrera} = req.body

    con.query('DELETE FROM carrera WHERE idCarrera = ?',idCarrera, (err, result) => {
        if (err) {
            console.log(`Ocurrio un error al eliminar ${err}`)
            return
        }
        res.redirect('/carreras')
    })
}

export const deleteCarreraGet = (req, res, next) => {
    con.query('SELECT * FROM carrera', (err,result)=>{
        if(err){
            console.log('Ocurrio un error al seleccionar los datos.');
            return
        }
        req.carreras = result
        next()
    })
}