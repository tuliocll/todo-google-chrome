import React from "react";
import { Box } from "@material-ui/core";

import ItemList from "./Item.List";

function List({ tasks, handleItemClick }) {
  return (
    <Box padding={1}>
      {tasks &&
        tasks.map((task) => <ItemList task={task} onClick={handleItemClick} />)}

      {tasks.length === 0 && (
        <div className="no-tasks">
          <span>Sem tarefas, crie uma agora mesmo!</span>
        </div>
      )}
    </Box>
  );
}

export default List;
