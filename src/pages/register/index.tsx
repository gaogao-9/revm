import React from "react";
import styled from "@emotion/styled";
import { Form } from "./partials/Form";
import { PageStateProvider, usePageStateProviderValue } from "./pageState";
import { Header } from "~/components/Organisms/Header";

const FormWrapper = styled.div`
  margin-top: 12px;
`;

// Partialコンポーネントは原則として最外部をFragmentとし、PageはPartialコンポーネントののラッパー要素の実装を知らないものとする。
// => PageからPartialに対する直接的なmarginの指定等のスタイリングや、restパラメータによるDOM Attributeの付与を禁止とする
export const PageContents: React.VFC = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <hr />
      <FormWrapper>
        <Form />
      </FormWrapper>
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
