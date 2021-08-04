import { ListProps } from ".";
import { usePageState, usePageStateDispatcher } from "~/pages/list/pageState";
import { deleteTodo } from "~/adaptors/storage/todo/deleteTodo";

export const useCreateVM = (): ListProps => {
  const pageState = usePageState();
  const dispatch = usePageStateDispatcher();

  return {
    todos: pageState.todos.map((todo) => ({
      ...todo,
      onDeleteTodo: () => {
        if (!dispatch) return;

        (async () => {
          await deleteTodo({ id: todo.id });

          dispatch({
            type: "deleteTodo",
            payload: { id: todo.id },
          });
        })();
      },
    })),
  };
};
