# GuitarShop

## 1. Запустить контейнер базы данных

```bash
docker-compose up -d
```
Запуск контейнеров БД Postgres и интерфейса администрирования

## 2. Сгенерировать клиент ORM Prisma

```bash
nx run backend:db-generate
```
## 3. Выполнить миграцию БД

```bash
nx run backend:db-migrate
```

## 4. Сгенеровать мок-данные для БД

```bash
npm run cli -- --generate <n>
```
Где n - количество генерируемых товаров
Пример: `npm run cli -- --generate 20`.

## 5. Команды для работы с приложением

## 5.1 Запуск rest-api части приложения

```bash
npm run backend
```

## 5.2 Запуск фронтэнд части приложения

```bash
npm run frontend
```
## 5.3 Запуск фронтэнд и бэкэнд частей под одним адресом

```bash
npm run start-all
```
