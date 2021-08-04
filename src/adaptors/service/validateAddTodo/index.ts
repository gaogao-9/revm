export interface ValidateAddTodo {
  ({ todoText }: { todoText: string }): Promise<boolean>; // serviceは必ず非同期メソッドで実装する
}

export const dummyValidateAddTodo: ValidateAddTodo = async ({ todoText }) => {
  if (!todoText.length) throw new Error("ToDoの内容が空です");

  return true;
};

// 今回はそのまま代入しているけど、実際は環境変数等で条件分岐を行えるように実装する
// (ContextHookは使わずにDIコンテナを実現させ、UIライフサイクルに依存しないように作る)
export const validateAddTodo = dummyValidateAddTodo;
