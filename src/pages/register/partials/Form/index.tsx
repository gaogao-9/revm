import { ChangeEventHandler, FormEventHandler } from "react";
import { useCreateVM } from "./viewModel";

export interface FormProps {
  todoText: string;
  onChangeText: ChangeEventHandler<HTMLInputElement>;
  onSubmitForm: FormEventHandler<HTMLFormElement>;
}

// Partialのラッパー要素はゼロマージンでの実装として、Partial間の余白の指定等の配置によるスタイリング調整はPage側に委ねるものとする
export const FormContents: React.VFC<FormProps> = ({
  todoText,
  onChangeText,
  onSubmitForm,
}) => {
  return (
    <form onSubmit={onSubmitForm}>
      <div>TODO: </div>
      <input type="text" value={todoText} onChange={onChangeText} />
      <button type="submit">保存</button>
    </form>
  );
};

export const Form: React.VFC = () => {
  const vm = useCreateVM();

  return <FormContents {...vm} />;
};
