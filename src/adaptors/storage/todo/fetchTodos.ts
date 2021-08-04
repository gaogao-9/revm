export interface FetchTodos {
  (): Promise<Array<{ id: string; todoText: string }>>;
}

export const dummyFetchTodos: FetchTodos = async () => {
  return JSON.parse(window.localStorage["todo"] ?? "[]");
};

// 今回はそのまま代入しているけど、実際は環境変数等で条件分岐を行えるように実装する
// (ContextHookは使わずにDIコンテナを実現させ、UIライフサイクルに依存しないように作る)
export const fetchTodos = dummyFetchTodos;
