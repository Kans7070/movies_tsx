import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import ActiveTask from "./components/activeTask";
import CompletedTask from "./components/completedTask";
import InputFields from "./components/inputFields";
import { todos } from "./utils/interface";

const App: React.FC = () => {
  const [todos, setTodos] = useState<todos[]>([]);
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <Box p={10} pb={0} bgcolor="skyblue" height={900}>
      <Typography variant="h3" textAlign={"center"} marginBottom={4}>
        Todo
      </Typography>
      <InputFields todos={todos} setTodos={setTodos} />
      <Box display="flex" pt={10}>
        <ActiveTask></ActiveTask>
        <CompletedTask></CompletedTask>
      </Box>
    </Box>
    //
  );
};

export default App;
