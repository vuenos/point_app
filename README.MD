This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Point App


## Interface
### Front
- 회원가입, 로그인
- Point 카드 등록, 조회
- Point 적립, 사용 내역 확인, 조회 
- Point 사용가능처 조회 (Map)


### Backend
- 회원 관리(등록, 삭제, 기본정보, 포인트 내역)
- Point 카드 관리(등록, 삭제)
- 사용가능처 등록(Map)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


```

point_app
├─ public
│  ├─ next.svg
│  └─ vercel.svg
├─ src
│  ├─ app
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ page.module.css
│  │  └─ page.tsx
│  └─ server
│     └─ server.js

```