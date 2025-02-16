const express = require('express');
const router = express.Router();
const Task = require('../models/TaskModel');

// Traemos todas las tareas

router.get('/task', async(req, res) => {
    try {
        const task = await Task.find()
        res.json(task);
        // mostrar en consola todas las tareas
        console.log(task.title);
    } catch(error) {
        console.error(error);
        res.status(500).send('Error al traer todas las tareas');
    }
});

// Traemos tarea con un id concreto

router.get('/id/:_id', async(req, res) => {
    try {
        const task = await Task.findById(req.params._id);
        res.json(task);
        // mostrar en consola todas las tareas
        console.log(task.title);
    } catch(error) {
        console.error(error);
        res.status(500).send('Error al traer la tarea');
    }
});

// Creamos una tarea

router.post('/create', async(req, res) => {
    try {
        const task = await Task.create({...req.body, completed: false});
        res.status(201).json(task);
        // en Postman tenemos que enviar petición con POST desde el body y con método raw
    } catch(error) {
        console.error('Error al crear la tarea: ', error);
    }
});

// Marcamos una tarea como completada

router.put('/markAsCompleted/:_id', async(req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params._id,     // obtenemos de parametros el id a actualizar
            { completed: true}, // actualizamos el campo completed a true
            { new: true }       // se actualiza en el momento de ejecutar el update
        );

        res.json(task);
        // mostrar en consola la tarea que se ha marcado como completada
        console.log('Actualizada tarea: ', task.title);
    } catch(error) {
        console.error('Error al marcar la tarea como completada: ', error);
    }
});

// actualizar una tarea y que solo se pueda cambiar el título de la tarea

router.put('/id/:_id', async(req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params._id,     // obtenemos de parametros el id a actualizar
            { title: req.body.title}, // actualizamos el campo title con lo que nos llega en el body
            { new: true }       // se actualiza en el momento de ejecutar el update
        );

        res.json(task);
        // mostrar en consola la tarea que se ha actualizado
        console.log('Actualizada tarea: ', task.title);
    } catch(error) {
        console.error('Error al actualizar la tarea: ', error);
    }
});

// Eliminamos una tarea por id

router.delete('/id/:_id', async(req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params._id);
        res.json(task);
        // mostrar en consola la tarea que se ha eliminado
        console.log('Eliminada tarea: ', task.title);
    } catch(error) {
        console.error('Error al eliminar la tarea: ', error);
    }
});

module.exports = router;