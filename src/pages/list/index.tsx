import React from "react";
import { List } from "./partials/List";
import { PageStateProvider, usePageStateProviderValue } from "./pageState";
import { useLifeCycle } from "./useLifeCycle";
import { Header } from "~/components/Organisms/Header";

// Partialコンポーネントは原則として最外部をFragmentとし、PageはPartialコンポーネントののラッパー要素の実装を知らないものとする。
// => PageからPartialに対する直接的なmarginの指定等のスタイリングや、restパラメータによるDOM Attributeの付与を禁止とする
export const PageContents: React.VFC = () => {
  useLifeCycle();

  return (
    <div>
      <div>
        <Header />
      </div>
      <hr />
      <div>
        <List />
      </div>
    </div>
  );
};

const Page: React.VFC = () => {
  const providerValue = usePageStateProviderValue();

  return (
    <PageStateProvider value={providerValue}>
      <PageContents />
    </PageStateProvider>
  );
};

export default Page;
