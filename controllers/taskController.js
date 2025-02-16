// Aquí se pueden crear todas las funciones para crear, actualizar, borrar ... que luego llamamos desde taskRoutes.js

const taskModels = require('../models/TaskModel');

const taskController = {
    // funcion para crear una tarea
    async createTask (req,res) {
        try {
            const task = await Task.create({...req.body, completed: false});
            res.status(201).json(task);
            // en Postman tenemos que enviar petición con POST desde el body y con método raw
        } catch(error) {
            console.error('Error al crear la tarea: ', error);
        }
    },

    // funcion para obtener todas las tareas
    async getAllTasks (req, res) {
        try {
            const task = await Task.find()
            res.json(task);
            // mostrar en consola todas las tareas
            console.log(task.title);
        } catch(error) {
            console.error(error);
            res.status(500).send('Error al traer todas las tareas');
        }
    }
}

module.exports = taskController;

/* 

Ahora en taskRoutes.js importariamos este archivo:

const taskController = require('../controllers/taskController');

y la ruta para crear una tarea en taskRoutes.js quedaría así:

router.post('/', taskController.createTask);

o la ruta para ver todas las tareas en taskRoutes.js quedaría así:

router.get('/', taskController.getAllTasks);

De esta manera, cada función en taskController se puede usar en taskRoutes.js para manejar las peticiones relacionadas con las tareas,
 y que el codigo en taskRoutes.js se vea más limpio

*/