import { Button } from "@mui/material";
import React, { useState } from "react";
import { IInputFields } from "../utils/interface";



const InputFields = ({ todos, setTodos }: IInputFields) => {
  const [todo, setTodo] = useState<string>("");

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    setTodo("");
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      style={{
        background: "white",
        width: "fit-content",
        borderRadius: 10,
        margin: "0 auto",
      }}
    >
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        style={{ border: "none", outlineWidth: "0", margin: "0 10px" }}
      />
      <Button type="submit" size="large">
        Add
      </Button>
    </form>
  );
};

export default InputFields;
