import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import List from "./components/List";
import generateId from "../../utils/IdGenerator";
import NewTaskModal from "./components/Modal.NewTask";
import EditTaskModal from "./components/Modal.ChangeTaskStatus";

function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState();
  const [showNewTaskModal, setNewTaskModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  function handleNewTask(taskName) {
    const newTask = {
      id: generateId(),
      title: taskName,
      date: new Date(),
      status: "enabled",
    };

    setTasks([...tasks, newTask]);
  }

  function handleUpdateTask(id) {
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
      return;
    }

    const tasksCopy = [...tasks];
    const taskUpdate = { ...tasks[taskIndex] };

    taskUpdate.status = "disabled";
    tasksCopy[taskIndex] = taskUpdate;

    setTasks(tasksCopy);
  }

  function handleItemClick(id) {
    const itemToEdit = tasks.find((task) => task.id === id);

    if (!itemToEdit) {
      return;
    }

    setTaskToEdit(itemToEdit);
    setShowEditModal(true);
  }

  return (
    <div class="container">
      <List tasks={tasks} handleItemClick={handleItemClick} />
      <Fab
        color="primary"
        style={{ position: "absolute", bottom: "30px", right: "10px" }}
        onClick={() => setNewTaskModal(true)}
      >
        <Add />
      </Fab>

      <NewTaskModal
        show={showNewTaskModal}
        onClose={() => setNewTaskModal(false)}
        onAdd={handleNewTask}
      />

      <EditTaskModal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={handleUpdateTask}
        taskToEdit={taskToEdit}
      />
    </div>
  );
}

export default HomePage;
