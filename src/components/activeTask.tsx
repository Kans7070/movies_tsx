
import { Box, Typography } from "@mui/material";
import React from "react";
import { IIdPropsOnly, IEditFunction, ITodosPropsOnly, todos } from "../utils/interface";
import { subHeadingStyle } from "../utils/styles";
import Task from "./Task";


const ActiveTask = ({ todos, setTodos }: ITodosPropsOnly) => {

  const handleOnDelete: IIdPropsOnly = (id: number): void => {
    console.log(id)
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const handleOnDone: IIdPropsOnly = (id: number): void => {
    setTodos(todos.filter(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone
      }
      return todo
    }))
  }
  return (
    <Box width="100%" p={2} >
      <Typography variant="h5" sx={subHeadingStyle} >
        Active Tasks
      </Typography>

      {todos.map(todo => {
        if (!todo.isDone) {
          return <Task key={todo.id} todo={todo} handleOnDelete={handleOnDelete} handleOnDone={handleOnDone} />
        }
        return null
      }
      )
      }
    </Box>
  );
};

export default ActiveTask;
