import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import ActiveTask from "./components/activeTask";
import CompletedTask from "./components/completedTask";
import InputField from "./components/inputField";
import { todos } from "./utils/interface";

const App: React.FC = () => {
  const [todos, setTodos] = useState<todos[]>([]);


  return (
    <Grid p={10} pb={0} bgcolor="skyblue" height={900}>

      <Typography variant="h3" textAlign={"center"} marginBottom={4} >
        Todo
      </Typography>

      <Grid container justifyContent={'center'} marginBottom={4}>
        <Grid xs={10} md={8}>
          <InputField todos={todos} setTodos={setTodos} />
        </Grid>
      </Grid>

      <Grid container justifyContent={'space-around'}>
        
        <Grid xs={10} md={5}>
          <ActiveTask todos={todos} setTodos={setTodos} />
        </Grid>
        <Grid xs={10} md={5}>
          <CompletedTask todos={todos} setTodos={setTodos} />
        </Grid>
      </Grid>
    </Grid>
    
  );
};

export default App;
