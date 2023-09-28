const express = require("express");
const {
  getAllTask,
  createTask,
  editTask,
  deleteTask,
  eachTask,
} = require("../controller/taskController");

const router = express.Router();

// const { getAllTask } = require("../controller/taskController");

router.get("/", getAllTask);

router.post("/create", createTask);

router.patch("/:id", editTask);
router.delete("/:id", deleteTask);
router.get("/:id", eachTask); // "/each"

// MVC MODEL VIEW AND CONTROLER
// BUT FOR FULL-STACK JUST FOCUSE ON CONTROLLER AND MODEL

module.exports = router;
