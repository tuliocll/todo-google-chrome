import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@material-ui/core";

function ModalChangeStatus({ show, onClose, onSave, taskToEdit }) {
  function finishTask() {
    onSave(taskToEdit.id);
    onClose();
  }

  return (
    <Dialog open={show} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Concluir tarefa</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Deseja marcar a tarefa "{taskToEdit && taskToEdit.title}" como
          concluida ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={finishTask} color="primary">
          Concluir
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalChangeStatus;
