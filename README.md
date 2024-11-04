# Timeline Component

Интерактивный компонент временной шкалы с круговым интерфейсом, созданный с использованием React и TypeScript.

## Технологии

- React.js
- TypeScript
- SASS/SCSS
- Swiper
- GSAP

## Требования

- Node.js >= 14.0.0
- npm >= 6.0.0

## Установка и настройка

1. Создать новый проект:
```bash
npx create-react-app . --template minimal-typescript
```

2. Установить необходимые зависимости:
```bash
npm install gsap swiper sass gh-pages
```

3. Обновить файл package.json, добавив:
```json
{
  "homepage": "https://your-username.github.io/repo-name"
}
```

4. Добавить скрипты для деплоя в package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

## Структура проекта

```
src/
  components/
    Timeline/
      Timeline.tsx      # Основной компонент
      Timeline.scss     # Стили
      types.ts         # TypeScript интерфейсы
      data.ts         # Данные временной шкалы
  App.tsx              # Корневой компонент
  index.tsx            # Точка входа
```

## Запуск проекта

### Режим разработки
```bash
npm start
```

### Сборка проекта
```bash
npm run build
```

### Деплой на GitHub Pages
```bash
npm run deploy
```

## Особенности реализации

- Адаптивный дизайн
- Интерактивный круговой интерфейс с анимацией
- Слайдер событий
- Независимые экземпляры компонента
- Поддержка от 2 до 6 временных отрезков
- Равномерное распределение точек на окружности