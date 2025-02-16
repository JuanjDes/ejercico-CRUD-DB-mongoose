/*
## Endpoints de la API
- POST /create: Endpoint para crear una tarea.
- GET /: Endpoint para traer todas las tareas.
- GET /id/:_id: Endpoint para buscar tarea por id.
- PUT /markAsCompleted/:_id: Endpoint para marcar una tarea como completada.
- PUT /id/:_id: Endpoint para actualizar una tarea y que solo se pueda cambiar el título de la tarea. Es decir, que no me deje cambiar el campo  “completed” desde este endpoint, sino solo, el título.
- DELETE /id/:_id: Endpoint para eliminar una tarea. */


const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Traemos todas las tareas

router.get('/task', async(req, res) => {
    try {
        const task = await Task.find()
        res.json(task);
        // mostrar en consola todas las tareas
        console.log(task.title);
    } catch(error) {
        console.error(error);
        res.status(500).send('Error en el Server');
    }
});

router.post('/create', async(req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).send(task);
    } catch(error) {
        console.error(error);
        res.status(500).send('Error en el Server');
    }
})

module.exports = router;