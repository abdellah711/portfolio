---
title: Web Scraper
shortDescription: A web scraper for extracting data from different sources
images:
  - scraper.png
technologies:
  - React
  - Express
  - TailwindCSS
  - MongoDB
  - Redis
  - Typescript
  - NodeJS
  - Docker
---

I created this sofisticated web scraper for a local client to extract data from multiple sources. The scraper’s frontend was built using React (with vite), while the backend was powered by Express. I used MongoDB to store the extracted data and Redis to manage job queues (using Bull.js package) since the web scraper is a long-running process. one of the scraping techniques requires a headless browser, I used Puppeteer which introduced deployment challenges and to resolve them, I containerized the application with Docker ensuring smooth and efficient deployment
