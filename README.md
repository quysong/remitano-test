This project uses Nextjs and:

```
Auth0 to authorize
Prisma for ORM
MySQL for database (host on https://planetscale.com/)
Cypress for integration test
Jest for unit test
Nodejs version 16.13.0
Using Vercel for hosting: https://remitano-test.vercel.app
```

## Start

```
npm i
npm run db:setup
npm run dev
```

## Build

```
npm i
npm run build
```

For test the built project after build: `npm run start`

## To check database on local without any DB tool

```
npm run db:gui
```

## Integration test

With GUI:

```
npm run e2e
```

Without GUI:

```
npm run e2e:headless
```

## Unit test

```
npm run test
```

## Testing account
Login with below account or you can sign up a new one when click Login
```
usertest1@gmail.com
1qaz!QAZ
```
