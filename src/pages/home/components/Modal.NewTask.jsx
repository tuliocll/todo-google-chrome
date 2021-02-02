import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
} from "@material-ui/core";

function NewTaskModal({ show, onClose, onAdd }) {
  const [taskName, setTaskName] = useState("");

  function addNewTask() {
    onAdd(taskName);
    setTaskName("");
    onClose();
  }

  return (
    <Dialog open={show} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        Adicionar uma nova tarefa
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Insira o nome da tarefa que deseja inserir
        </DialogContentText>
        <TextField
          id="task_name"
          autoFocus
          margin="dense"
          label="Titulo da tarefa"
          type="text"
          fullWidth
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={addNewTask} color="primary">
          Adicionar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewTaskModal;
