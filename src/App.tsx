import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import ActiveTask from "./components/activeTask";
import CompletedTask from "./components/completedTask";
import InputField from "./components/inputField";
import { todos } from "./utils/interface";

const App: React.FC = () => {
  const [todos, setTodos] = useState<todos[]>([]);


  return (
    <Box p={10} pb={0} bgcolor="skyblue" height={900}>
      <Typography variant="h3" textAlign={"center"} marginBottom={4}>
        Todo
      </Typography>
      

      <InputField todos={todos} setTodos={setTodos} />
     
      <Box display="flex" p={10}>
        <ActiveTask todos={todos} setTodos={setTodos}/>
        <CompletedTask todos={todos} setTodos={setTodos}/>
      </Box>
    </Box>
    //
  );
};

export default App;
