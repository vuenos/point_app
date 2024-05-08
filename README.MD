This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Point App


## 🖥 Interface
### Front
- 회원가입, 로그인
- Point 카드 등록, 조회
- Point 적립, 사용 내역 확인, 조회 
- Point 사용가능처 조회 (Map)


### Backend
- 회원 관리(등록, 삭제, 기본정보, 포인트 내역)
- Point 카드 관리(등록, 삭제)
- 사용가능처 등록(Map)


## ⏳ History

### 📆 May 8, 2024
- 백엔드 호출 테스트
- 이벤트핸들러 (callDataHandler) 버튼을 통해서 서버요청을 테스트

```javascript
// server.js 추가
server.get("/getdata", (req, res) => {
    res.send(`PORT: ${port} 서버에서 정상적으로 응답함`);
});

//page.tsx
// 서버 호출 이벤트 핸들러 추가
const callDataHandler = () => {
    axios.get("http://localhost:5500/getdata").then((res) => {
        console.log(res.data);
        setMsg(res.data);
    }).catch((error) => {
        console.log(error.message);
        setMsg(error.message);
    });
};


<button onClick={callDataHandler}>데이터 요청</button>
```

서버 응답 성공, 실패
<img src="./public/ss-1.png" width="200" />
<img src="./public/ss-2.png" width="200" />

***

### 📆 May 7, 2024
- 프론트, 백엔드를 같이 같이 구성하기로 함.
- src/server/ 안에 서버 구동을 위한 파일 생성 (server.js)
- 프론트 port 3000, 백엔드 port 5500
```javascript
//server.js
import express from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "development";
const port = process.env.PORT || 5500;

const app = next({ dev, port });

const handle = app.getRequestHandler();

const isDate = new Date();

app.prepare().then(() => {
    const server = express();

    server.get("/", (req, res) => {
        res.send(
            `Running SERVER... ${isDate}`
        );
    });

    server.all("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port, () => {
        console.log(
            `Server running is ${process.env.NODE_ENV} mode on port ${port}`
        );
    });
});
```

- pscksge.json 수정
```json
"scripts": {    
    "server": "nodemon src/server/server",
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
```
실행

```bash
npm run server

npm run dev
```

- 브라우저에서 [localhost:3000](http://localhost:3000), [localhost:5500](http://localhost:5500) 을 열어서 확인

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