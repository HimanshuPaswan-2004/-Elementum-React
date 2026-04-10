# Elementum React Assignment

Responsive React implementation of the provided Figma assignment design.

## Tech Stack

- React
- Vite
- CSS
- Docker
- Nginx for production static serving

## Implemented

- All major Figma sections: hero, about/story blocks, offer list, testimonial, newsletter, and footer
- Responsive layouts for mobile, tablet, laptop, and desktop
- Local image assets extracted from the provided assignment reference
- Reusable React components for menu, highlights, CTA links, and offer rows
- Hover/focus states for navigation and buttons
- Production Docker setup

## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:5173/
```

## Build Check

```bash
npm run lint
npm run build
```

## Docker Submission

Build and run with Docker:

```bash
docker build -t elementum-assignment .
docker run --rm -p 5173:5173 elementum-assignment
```

Or use Docker Compose:

```bash
docker compose up --build
```

Open:

```text
http://localhost:5173/
```

## Project Structure

```text
src/
  App.jsx
  App.css
  index.css
  main.jsx
  assets/
    elementum/
Dockerfile
docker-compose.yml
nginx.conf
```
