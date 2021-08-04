import { useEffect } from "react";
import { usePageStateDispatcher } from "./pageState";
import { fetchTodos } from "~/adaptors/storage/todo/fetchTodos";

export const useLifeCycle = () => {
  const dispatch = usePageStateDispatcher();

  useEffect(() => {
    if (!dispatch) return;

    (async () => {
      const todos = await fetchTodos();

      dispatch({ type: "fetchedTodos", payload: { todos } });
    })();
  }, [dispatch]);
};
