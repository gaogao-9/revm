import React from "react";
import NextLink from "next/link";

const Page: React.VFC = () => {
  return (
    <div>
      <div>TODOアプリ</div>
      <div>
        <NextLink href="/register">登録する</NextLink>
      </div>
      <div>
        <NextLink href="/list">一覧</NextLink>
      </div>
    </div>
  );
};

export default Page;
