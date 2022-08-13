export interface todos {
  id: number;
  todo: string;
  isDone: boolean;
}


export interface ITodosPropsOnly {
  todos: todos[];
  setTodos: React.Dispatch<React.SetStateAction<todos[]>>;
}

export interface IEditFunction {
  (data: todos): void | null
}

export interface IIdPropsOnly {
  (id: number): void | null
}

export interface ITaskProps {
  todo: todos,
  handleOnDelete ?: IIdPropsOnly | null,
  handleOnDone ?: IIdPropsOnly | null,
  completed?: boolean
}