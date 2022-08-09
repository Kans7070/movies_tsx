import { Box, Typography } from "@mui/material";
import React from "react";
import { IIdPropsOnly, ITodosPropsOnly } from "../utils/interface";
import { subHeadingStyle } from "../utils/styles";
import Task from "./Task";

const CompletedTask = ({ todos, setTodos }: ITodosPropsOnly) => {
  const handleOnDelete: IIdPropsOnly = (id: number): void => {
    console.log(id)
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <Box width="50%" textAlign="center" p={2}>
      <Typography variant="h5" sx={subHeadingStyle}>
        Completed Tasks
      </Typography>

      {todos.map((todo) => {
        if (todo.isDone) {
          return <Task key={todo.id} todo={todo} completed={true} handleOnDelete={handleOnDelete} />
        }
        return null
      })}
    </Box>
  );
};

export default CompletedTask;
