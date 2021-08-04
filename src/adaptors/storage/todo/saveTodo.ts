export interface SaveTodo {
  ({ todoText }: { todoText: string }): Promise<{
    id: string;
    todoText: string;
  }>;
}

export const dummySaveTodo: SaveTodo = async ({ todoText }) => {
  const oldTodos = JSON.parse(window.localStorage["todo"] ?? "[]");
  const newTodo = {
    id: Math.floor(Math.random() * 2 ** 32).toString(16),
    todoText,
  };
  const newTodos = [...oldTodos, newTodo];

  window.localStorage["todo"] = JSON.stringify(newTodos);

  return newTodo;
};

// 今回はそのまま代入しているけど、実際は環境変数等で条件分岐を行えるように実装する
// (ContextHookは使わずにDIコンテナを実現させ、UIライフサイクルに依存しないように作る)
export const saveTodo = dummySaveTodo;
