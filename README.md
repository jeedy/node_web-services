# node_web-services

Chapter 6. 확장 가능한 웹 서비스(express) - Node.js 정석 
============

## 오류 정정
1. express4 부터 `app.use(express.logger('dev'));` 지원하지 낳는다. `morgan` 모듈로 사용하도록 바뀌었다.
````
const app = require('express') ();
const logger = require('morgan');
app.use(logger('dev'));
````
1. 

## 아키텍처와 코어
 Node 의 http 모듈로 기본적인 HTTP 서버를 만드는 방법을 배운다.

## 패턴
 일부 Node 모듈은 자체 플러그인 시스템을 통하여 추가적인 기능을 제공받는다.
 이 장에서는 Express를 위한 플러그인을 사용하고, Express의 미들웨어 패턴이 어떻게 추가적인 기능을 위한 연결고리를 제공하는지 배울 것이다. 더해서 비동기 코드를 쓰는 데 있어 강력한 개념인 promise(프라미스)도 사용할 것이다.

## 자바스크립티즘
ECMAScript Harmony는 이터레이터(iterator)와 *제너레이터(generator)라는 새로운 개념을 도입했다. 어떻게 제너레이터를 만들고 사용하는지를 배우고 프라미스(promise)와 합해져 비동기 프로그래밍을 단순화 하는 것도 배울 것이다.

## 지원 코드
이장에서는 프로젝트의 시동을 거는 스크립트를 명시하는 것과 같은 npm의 더 많은 특성들을 사용할 것이다. 또한, nodemon을 활용해서 Node 프로그램을 모니터하고 소스코드가 바뀌면 자동적으로 재시작하도록 할 것이다.


## CouchDB 1.6.0
> - 참고 API : [http://docs.couchdb.org/en/1.6.1/intro/api.html]
> - HTTP API reference : [http://docs.couchdb.org/en/1.6.0/http-api.html]

설치
```
$ brew install couchdb
```

실행 
```
$ couchdb
```

쿼리
```
$ curl -X POST 'http://localhost:5984/books'    // 생성
$ curl -X PUT 'http://localhost:5984/books'     // 생성 및 갱신
$ curl -X GET 'http://localhost:5984/books'     // 조회
$ curl -X DELETE 'http://localhost:5984/books'  // 삭제
```

데이터 예제 (Project Gutenberg)
```
$ curl -O http://www.gutenberg.org/cache/epub/feeds/rdf-files.tar.bz2
$ tar -xvjf rdf-files.tar.bz2
```
