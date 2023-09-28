const Task = require("../models/task");
const validateID = require("../utils/validateID");

// CRUD (CREATE, READ, UPDATED, DELETE) on a database

// ========================================================================================================
const getAllTask = async (req, res) => {
  const tasks = await Task.find({}); // tag: "urgent"
  res.status(200).json({ tasks });
};

// const createTask = async (req, res) => {
//   const task = await Task.create({
//     name: "Opeyemi",
//     age: 90,
//     nickName: "Barnxx",
//   });
//   res.status(201).json({ message: "Task created Successfully", newTask: task });
// };
// =========================================================================================================
const createTask = async (req, res) => {
  const { title, description, tag } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Please Provide a Title" });
  }

  if (!description) {
    return res.status(400).json({ message: "Please Provide a Description" });
  }

  if (!tag) {
    return res.status(400).json({ message: "Please Provide Tag" });
  }

  const task = await Task.create(req.body);

  res.status(201).json({ message: "Task created Successfully", task });
};

// ===========================================================================================================
const editTask = async (req, res) => {
  const { id } = req.params;

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }

  const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!task) {
    return res.status(404).json({ message: `anao Task with ID:${id}` });
  }
  res.status(200).json({ message: "Task Updated Successfully" });
};

// ===============================================================================================================
const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }

  const task = await Task.findOneAndDelete({ _id: id });

  if (!task) {
    return res.status(400).json({ message: `No Task with ID:${id}` });
  }
  res.status(200).json({ message: "Task Successfully Deleted" });
};

// ===============================================================================================================
const eachTask = async (req, res) => {
  const { id } = req.params;

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }

  const task = await Task.findOne({ _id: id });
  if (!task) {
    return res.status(404).json({ message: `No Task with ID: ${id}` });
  }
  res.status(200).json({ task });
};

// ==================================================================================================================
module.exports = {
  getAllTask,
  createTask,
  editTask,
  deleteTask,
  eachTask,
};
