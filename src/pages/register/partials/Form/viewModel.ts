import { useCallback } from "react";
import { useRouter } from "next/router";
import { FormProps } from ".";
import {
  usePageState,
  usePageStateDispatcher,
} from "~/pages/register/pageState";
import { validateAddTodo } from "~/adaptors/service/validateAddTodo";
import { saveTodo } from "~/adaptors/storage/todo/saveTodo";

export const useCreateVM = (): FormProps => {
  const pageState = usePageState();
  const dispatch = usePageStateDispatcher();
  const router = useRouter();

  return {
    todoText: pageState.todoText,
    onChangeText: useCallback(
      (eve) => {
        if (!dispatch) return;

        dispatch({
          type: "updateTodoText",
          payload: { todoText: eve.target.value },
        });
      },
      [dispatch],
    ),
    onSubmitForm: useCallback(
      (eve) => {
        eve.preventDefault();

        (async () => {
          await validateAddTodo({ todoText: pageState.todoText });
          await saveTodo({ todoText: pageState.todoText });
          console.log(pageState);

          router.push("/list");
        })().catch((err) => {
          console.error(err);
          alert("ToDOの追加に失敗しました。");
        });
      },
      [pageState.todoText],
    ),
  };
};
