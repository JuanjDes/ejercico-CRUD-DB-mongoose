const mongoose = require('mongoose');

// Creo un esquema de tareas

const taskSchema = new mongoose.Schema ({
    title: String,
    completed: String,
}, {timestamp: true});

// Creo un modelo de tareas utilizando el esquema

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

// Este codigo se conecta a una base de datos MongoDB y crea un modelo de tareas con los campos title, description y completed.
