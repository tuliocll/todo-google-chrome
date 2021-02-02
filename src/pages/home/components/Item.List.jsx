import React from "react";
import { Box, Paper, Grid } from "@material-ui/core";
import { DateRange, AccessTime } from "@material-ui/icons";
import { format, formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

function randomColor() {
  const colors = ["#eb4034", "#B8FF33", "#33FFA8", "#7B5EBF"];

  return colors[Math.floor(Math.random() * (colors.length - 1)) + 1];
}

function ItemList({ task, onClick }) {
  return (
    <Box
      paddingLeft={0.5}
      marginTop={1}
      borderRadius={4}
      style={{ backgroundColor: randomColor() }}
      onClick={() => onClick(task.id)}
      className={task.status === "disabled" ? "finished" : ""}
    >
      <Paper style={{ minHeight: 60, padding: 10, paddingTop: 1 }}>
        <h3>{task.title}</h3>
        <Grid container justify="space-between">
          <Grid>
            <small>
              <Grid container justify="center" alignItems="center">
                <DateRange fontSize="small" /> {format(task.date, "dd/MM/yyyy")}
              </Grid>
            </small>
          </Grid>
          <Grid>
            <small>
              <Grid container justify="center" alignItems="center">
                <AccessTime fontSize="small" />
                {formatDistance(task.date, new Date(), {
                  locale: ptBR,
                })}
              </Grid>
            </small>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default ItemList;
