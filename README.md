# テンプレートB

## 初期設定
---
1.クローン（上のものは```ssh```を利用するもので下のものは```https```を利用するものです）
```
git clone git@github.com:shinonome-inc/frontend-design-hackathon-2024-spring-teamA.git
```
or
```
git clone https://github.com/shinonome-inc/frontend-design-hackathon-2024-spring-teamA.git
```
2.移動
```
cd ./frontend-design-hackathon-2024-spring-teamA
```
3.必要なパッケージのインストール
```
npm install next react react-dom
```
4.styled-componentsを利用するためにインストール
```
npm install styled-components
```
※ 参考リンク：https://dev-harry-next.com/frontend/styled-components-in-nextjs<br><br>
5. アプリをローカルで動かす
```
npm run dev
```
---

## deployの方法
---
参考リンク：https://zenn.dev/pino0701/articles/nextjs_github_pages
うまくいかない場合は、記事内のnextjs.ymlから以下の部分を削除
```
 with:
          # Automatically inject basePath in your Next.js configuration file and disable
          # server side image optimization (https://nextjs.org/docs/api-reference/next/image#unoptimized).
          #
          # You may remove this line if you want to manage the configuration yourself.
          static_site_generator: next
```
---
---
---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
