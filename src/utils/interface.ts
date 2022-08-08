export interface todos {
  id: number;
  todo: string;
  isDone: boolean;
}

  
export interface IInputFields {
    todos: todos[];
    setTodos: React.Dispatch<React.SetStateAction<todos[]>>;
  }