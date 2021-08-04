import { ReactEventHandler } from "react";
import { useCreateVM } from "./viewModel";

export interface ListProps {
  todos: Array<{
    id: string;
    todoText: string;
    onDeleteTodo: ReactEventHandler<HTMLButtonElement>;
  }>;
}

// Partialのラッパー要素はゼロマージンでの実装として、Partial間の余白の指定等の配置によるスタイリング調整はPage側に委ねるものとする
export const ListContents: React.VFC<ListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map(({ id, todoText, onDeleteTodo }) => (
        <li key={id}>
          {todoText}
          <button type="button" onClick={onDeleteTodo}>
            完了
          </button>
        </li>
      ))}
    </ul>
  );
};

export const List: React.VFC = () => {
  const vm = useCreateVM();

  return <ListContents {...vm} />;
};
