# Movie App

A simple React movie app built with Vite.

## Features

- Search and browse movies
- Movie detail pages with routing using `react-router`
- Responsive card grid layout
- Custom header and movie listing components
- Simple API integration pattern in `src/APIs/index.js`

## Project structure

- `src/App.jsx` - main application layout and routes
- `src/main.jsx` - app entry point
- `src/pages/Home/Home.jsx` - movie listing page
- `src/pages/MovieDetail/MovieDetail.jsx` - individual movie detail page
- `src/components/Card/Card.jsx` - reusable movie card component
- `src/components/MovieList/MovieList.jsx` - movie list view
- `src/components/Header/Header.jsx` - header component
- `src/APIs/index.js` - API helper functions

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

## Notes

- The project uses Vite for fast development and production builds.
- React Router handles navigation between the home page and movie detail pages.
- `react-responsive-carousel` is included for any carousel UI needs.

## License

This project is available for learning and personal use.
