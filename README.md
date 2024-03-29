# Карточная игра Memory

# Описание

Карточная игра Memory, смысл которой - запомнить и найти все пары изображений/карт.

Реализован следующий функционал: 
- выбор возраста игрока, 
- выбор сложности, 
- основная логика игры,
- вывод результата. 

Есть три уровня сложности: легкий, средний, сложный. От уровня сложности зависит количество карточек, которые будут показаны пользователю на игровом экране.

## Установка

Установите зависимости:

```sh
npm install
```

Для запуска в development режиме выполните команду

```sh
npm start
```

Приложение будет доступно по адресу: [http://localhost:3000](http://localhost:3000)

При необходимости production сборки выполните команду

```sh
npm run build
```

# Особенности реализации
Глобальное состояние реализовано через поле объекта window и хранит в себе следующие переменные: 
- сгенерированные карточки,
- выбранные пользователем карты,
- угаданные пары,
- время переворота карты,
- время показа карт,
- выбранный уровень сложности,
- время показа карт для данного уровня,
- таймер,

Также реализовано следующее:
- в проект интегрирован TypeScript.
- входные аргументы функций и методов объектов затипизированы.
- в проекте не используется тип `any`.
- запуск проверки типов осуществляется перед созданием коммита автоматически (с помощью husky).
