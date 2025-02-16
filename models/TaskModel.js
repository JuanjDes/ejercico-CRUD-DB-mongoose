const mongoose = require('mongoose');

// Creo un esquema de tareas

const taskSchema = new mongoose.Schema (
    {title: String, completed: Boolean},
    {timestamp: true}   // timestamp crea fecha de creación y de actualización
);

// Creo un modelo de tareas utilizando el esquema

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

// Este codigo se conecta a una base de datos MongoDB y crea un modelo de tareas con los campos title y completed.
