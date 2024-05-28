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

### 📆 May 28, 2024
MongDB에 연결하고 데이터를 POST, GET 하는 테스트 코드.  
- API route 의 기본코드
```javascript
const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the placeholder with your Atlas connection string
const uri = "<connection string>";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

```
[참고]  
- https://www.mongodb.com/ko-kr/docs/atlas/device-sdks/web/nextjs/
- https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/#std-label-node-connect-to-mongodb
- https://ellertsmarik.medium.com/json-api-using-next-js-13-and-mongodb-f45e8e61b031

### 📆 May 22, 2024
#### MongoDB 세팅
DB는 몽고디비를 사용하기로 했다.  
등록, 조회 의 기능이 대부분이라 무리 없어 보였다.  
db,collection을 생성
<img src="./public/mg-db-test.png" alt="" /> 


### 📆 May 20, 2024
Express 로 백엔드를 구성.했을때  
프론트와 별개로 서버호스팅을 구성해야 한다  
vercel 로 deploy 하여 production 상태로 만들어서 온라인으로 접속해 보면 프론트는 정상적으로 보이지만  
API 를 호출했을때 통신이 되지 않는다. 백엔드 리소스를 별도로 호스팅 하여 호출해야 하는 것이다.  
- Next.js 로 개발하는데 Express 로 백엔드를 별도로 구성하기 보다 Next.js 의 [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) 로 endpoint 를 만들면 되겠다는 생각이 들었다.
- route 구성은 프론트와 동일하다. /app/api/users/route.ts 는 /api/users 라는 endpoint 를 만들어 준다.
- /app/api/users/route.ts 에 호출시 반환되는 이벤트 핸들러를 작성해 주면 된다.
- GET, POST 라는 함수명이 그대로 그 역활을 수행해 준다.  

```javascript
// /app/api/users/route.ts
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
    return NextResponse.json({
        name: "Jintae Kim",
        email: "vuenos@gmail.com",
        isAdmin: true,
    })
}

// /app/page.tsx
const callDataHandler = async () => {
    try {
      const { data, status } = await axios.get(`${url}/test`);

      if (status === 200) {
        setUserData(data);
        setCallStatus("suceess");
        setMsg(`서버에서 정상적으로 응답함`);
      }
    } catch(error: any) {
      console.log(error.message)
      setCallStatus("failed");
      setMsg(`서버 통신 실패`);
    };
  };
```
    

프론트에서의 결과는 아래와 같다.  
    
<img src="./public/fetch-result.png" alt="" />

***

### 📆 May 18, 2024
헤더의 공통 네비게이션에서 현재 메뉴의 활성화 스타일 적용  
React 에서는 NavLink 를 이용하면 쉽게 적용이 되지만 Next.js 에서는 지원하지 않는다.  
그래서 커스텀을 해야 한다.
- 1차 방법 : next/router 의 useRouter 를 이용해서 현재페이지의 pathname 을 특정해서 비교하는 방법
- 먼저 메뉴의 정보에 대한 객체 배열을 만들어 주고, 
```javascript
const menuData = [
    { id: "menu01", title: `${userName}`, path: "/member/mypage" },
    { id: "menu02", title: "Login", path: "/member/login" },
    { id: "menu03", title: "Sign up", path: "/member/join" },
];
```
- path 값과 현재 pathname 을 비교하여 특정 스타일을 적용한다.
```javascript
const router = useRouter();

{menuData.map((menuItem) => (
    <Link
        href={menuItem.path}
        className={`${menuItem.path === router.pathname ? "active" : ""}`}
    >
        {menuItem.title}
    </Link>
))}
```
그런데 다음과 같은 에러가 뜬다.  
<span style="color: red">Error: NextRouter was not mounted.</span>  
Next.js 13 부터는 next/router 대신 next/navigation 를 사용해야 한다.
```javascript
// refactor
import { usePathname } from "next/navigation";

const pathname = usePathname();

{menuData.map((menuItem) => (
    <Link
        href={menuItem.path}
        className={`${menuItem.path === pathname ? "active" : ""}`}
    >
        {menuItem.title}
    </Link>
))}
```  
참고 : https://nextjs.org/docs/app/api-reference/functions/use-router  

***  

 
### 📆 May 16, 2024
#### Next.js App Router
Next.js 13 부터 app/ 디렉토리를 기반으로 라우팅이 구성된다.  
app/about 이란 dir 를 만들고 page.tsx 를 생성하면 /about 이란 route 가 구성이 되는 것이다.  
Layout.tsx 로 레이아웃을 구성할 수 있다. /app/page.tsx 가 "/" 이란 route 가 된다.  
Layout 은 여러 경로 간에 공유되는 UI 이다. Route 간의 이동 시 레이아웃 상태를 유지하고 상호교환 상태를 유지하며 리렌더링 되지 않는다.  
<img src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Flayout-special-file.png&w=3840&q=75" width="600">
```javascript
// app/layout.js
export default function RootLayout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body>
                <Header />
                <Wrapper>{children}</Wrapper>
                <Footer />
            </body>
        </html>
    );
}

// app/page.js
export default function Page() {
  return <h1>Hello, World</h1>;
}
```
- /app/member/login/page.tsx : /member/login
- 참고 : https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates

***  

### 📆 May 13, 2024
- User 데이터 모델 생성
- /server/ 내에 routes, models, controller 를 생성한다.
- routes/userRoutes.js 에 백엔드에서 요청받을 routes 를 정의한다.
```javascript
const router = express.Router();

router.route("/")
    .post(registerUser)
    .get(protect, admin)

router
    .post("/login", authUser)

router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

router
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser)
```
- models/userModel.js 에서 유저데이터 schema 를 구성함. 
```javascript
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: String,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

export default User;
// User model 을 User 로 정의해서 내보낸다
```
- controller/userController.js : registerUser 핸들러를 통해 userModel 에서 가져온 User 모델에 맞추어 입력받은 유저데이터를 생성한다.
```javascript
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, isAdmin, password } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        isAdmin,
        password,
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
});
```

***  

### 📆 May 10, 2024
- 서버요청 방식을 async 로 변경
- 서버응답상태에 따라 커스텀 메시지 적용
```javascript
const callDataHandler = async () => {
    try {
        const { data, status } = await axios.get("http://localhost:5500/getdata");

        if (status === 200) {
        console.log(data);
        setMsg(data);
        setCallStatus("suceess");
        }
    } catch(error: any) {
        console.log(error);
        setMsg("서버 통신을 실패하였습니다.");
        setCallStatus("failed");
    };
};

<div>
    {msg && (callStatus === "suceess") ? <CallStackSuccess /> 
        : (callStatus === "failed") ? <CallStackFailed />
        : null
    }
</div>
```

***
  

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
