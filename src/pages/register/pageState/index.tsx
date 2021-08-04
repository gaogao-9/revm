import React, {
  createContext,
  Dispatch,
  ProviderProps,
  useContext,
  useReducer,
} from "react";

export interface PageState {
  todoText: string;
}

export type PageStateDispatcher = Dispatch<PageAction>;

export type PageAction = {
  type: "updateTodoText";
  payload: { todoText: string };
};

interface PageStateProviderValue {
  state: PageState;
  dispatch: PageStateDispatcher;
}

export type PageStateProviderProps = ProviderProps<PageStateProviderValue>;

const reducer = (prev: PageState, action: PageAction): PageState => {
  switch (action.type) {
    case "updateTodoText":
      return {
        ...prev,
        todoText: action.payload.todoText,
      };
    default: {
      const typeCheck: never = action.type;
      return typeCheck;
    }
  }
};

const createInitState = (): PageState => ({
  todoText: "",
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
