export interface DeleteTodo {
  ({ id }: { id: string }): Promise<void>;
}

export const dummyDeleteTodo: DeleteTodo = async ({ id }) => {
  const oldTodos = JSON.parse(window.localStorage["todo"] ?? "[]") as Array<{
    id: string;
    todoText: string;
  }>;
  const targetTodoIndex = oldTodos.findIndex((todo) => todo.id === id);

  if (targetTodoIndex < 0)
    throw new Error("対象のToDoアイテムが存在しません。");

  const newTodos = [...oldTodos];

  newTodos.splice(targetTodoIndex, 1);

  window.localStorage["todo"] = JSON.stringify(newTodos);
};

// 今回はそのまま代入しているけど、実際は環境変数等で条件分岐を行えるように実装する
// (ContextHookは使わずにDIコンテナを実現させ、UIライフサイクルに依存しないように作る)
export const deleteTodo = dummyDeleteTodo;
