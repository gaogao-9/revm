import React, {
  createContext,
  Dispatch,
  ProviderProps,
  useContext,
  useReducer,
} from "react";

export interface PageState {
  todos: Array<{ id: string; todoText: string }>;
}

export type PageStateDispatcher = Dispatch<PageAction>;

export type PageAction =
  | {
      type: "fetchedTodos";
      payload: { todos: Array<{ id: string; todoText: string }> };
    }
  | {
      type: "deleteTodo";
      payload: { id: string };
    };

interface PageStateProviderValue {
  state: PageState;
  dispatch: PageStateDispatcher;
}

export type PageStateProviderProps = ProviderProps<PageStateProviderValue>;

const reducer = (prev: PageState, action: PageAction): PageState => {
  switch (action.type) {
    case "fetchedTodos":
      return {
        ...prev,
        todos: action.payload.todos,
      };
    case "deleteTodo": {
      const index = prev.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      );

      if (index < 0) return prev;

      const todos = [...prev.todos];

      todos.splice(index, 1);

      return {
        ...prev,
        todos,
      };
    }
    default: {
      const typeCheck: never = action;
      return typeCheck;
    }
  }
};

const createInitState = (): PageState => ({
  todos: [],
});

const PageStateContext = createContext(createInitState());
const PageStateDispatchContext = createContext<PageStateDispatcher | null>(
  null,
);

export const PageStateProvider: React.FC<PageStateProviderProps> = ({
  value,
  children,
}) => {
  return (
    <PageStateDispatchContext.Provider value={value.dispatch}>
      <PageStateContext.Provider value={value.state}>
        {children}
      </PageStateContext.Provider>
    </PageStateDispatchContext.Provider>
  );
};

export const usePageStateProviderValue = (): PageStateProviderValue => {
  const [state, dispatch] = useReducer(reducer, createInitState());

  return { state, dispatch };
};

export const usePageState = (): PageState => useContext(PageStateContext);

export const usePageStateDispatcher = (): PageStateDispatcher | null =>
  useContext(PageStateDispatchContext);
