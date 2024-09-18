npm 패키지
pipe 구현

```
npm install class-validator class-transformer --save
```

db연결
typeorm, postgres

```
npm install pg typeorm @nestjs/typeorm --save
```

config 함께 관리하기

```
npm install config --save
```

인증 관련 모듈 설치

```
암호화
npm install bcryptjs --save
import * as bcrypt from 'bcryptjs'
```
```
jwt와 passport 모듈
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
```

shelterChecklistAnswers
```
[
    {
        "q_id": 100,
        "shelter_info_id": 3,
        "score": 8
    },{
        "q_id": 1,
        "shelter_info_id": 3,
        "score": 0
    },{
        "q_id": 2,
        "shelter_info_id": 3,
        "score": 1
    },{
        "q_id": 3,
        "shelter_info_id": 3,
        "score": 1
    },{
        "q_id": 4,
        "shelter_info_id": 3,
        "score": 0
    },{
        "q_id": 5,
        "shelter_info_id": 3,
        "score": 0
    },{
        "q_id": 6,
        "shelter_info_id": 3,
        "score": 1
    }
]
```