import NextLink from "next/link";

// 粒度雑ですがあまり本質じゃないので適当に作ってるだけです
// 実際はAtomsで汎用的に実装して、各ページで表示する値を切り替える形になると思います
export const Header: React.VFC = () => (
  <>
    <div>TODOアプリ</div>
    <div>
      <NextLink href="/">トップに戻る</NextLink>
    </div>
  </>
);
