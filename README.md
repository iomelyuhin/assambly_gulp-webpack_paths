# Spyrix Activity Monitoring LP

Перед установкой зависимостей и запуском проекта убедитесь, что у вас установлена [последняя версия Node.js & NPM](https://nodejs.org/en/download/current/), а так же [последняя версия Yarn](https://yarnpkg.com/ru/docs/install) 

##  Чтобы развернуть проект необходимо:
```sh
$ git clone https://github.com/iomelyuhin/checks_msk.git .
$ yarn
```
или
```sh
$ npm install
```

## Скрипты package.json:


gulp - Запустит developer-mode с горячей перезагрузкой и соберет проект в dist


#### Чтобы запустить скрипт:
```sh
$ npm run имя_скрипта
```
или
```sh
$ yarn имя_скрипта
```
##### Что где лежит
| Путь | Назначение |
| ------ | ------ |
| src/ | Рабочаяпапка проекта |
| dist/ | Собранный проект |
| gulpfile.js | Конфиг Gulp |
| webpack.config.js | Конфиг Webpack (для сборки JS) |
| postcss.config.js | Конфиг PostCss (для сборки CSS) |
| src/views | Разметка на Pug (Jade) |
| src/views/pages | Страницы проекта |
| src/views/common | Компоненты страниц |
| src/views/main.inner.layout.pug | Шаблон внутренней страницы
| src/views/main.layout.pug | Шаблон главной
