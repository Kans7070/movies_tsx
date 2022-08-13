import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { ITodosPropsOnly } from "../utils/interface";
import { inputStyle } from "../utils/styles";



const InputField = ({ todos, setTodos }: ITodosPropsOnly) => {
  const [todo, setTodo] = useState<string>("");

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <Box  >

      <form
        onSubmit={handleOnSubmit}
        style={{
          background: "white",

          borderRadius: 10,
          margin: "0 auto",
          paddingLeft: 8,
          alignItems: "center",
          justifyContent: 'space-between',
          height: 'fit-content',
          display: "flex"
        }}
      >

        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          style={inputStyle}

        />

        <Button type="submit" size="large">
          Add
        </Button>



      </form>
    </Box>
  );
};

export default InputField;
