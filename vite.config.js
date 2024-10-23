import fs from 'fs';

import { defineConfig } from 'vite';
import path from 'path';

import nunjucks from 'vite-plugin-nunjucks';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';
import { createHtmlPlugin } from 'vite-plugin-html';
import FullReload from 'vite-plugin-full-reload';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// Импорт данных из JSON файла
import data from './src/json/data.json';

// Чтение всех HTML файлов в директории src/
const htmlFiles = fs
  .readdirSync(path.resolve(__dirname, 'src'))
  .filter(file => file.endsWith('.html'));

// Создание объекта variables для nunjucks
const variables = htmlFiles.reduce((acc, file) => {
  acc[file] = data;
  return acc;
}, {});

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  base: './',
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    hmr: true,
  },
  build: {
    outDir: '../build',
    rollupOptions: {
      input: htmlFiles.reduce((acc, file) => {
        acc[file.replace('.html', '')] = path.resolve(__dirname, 'src', file);
        return acc;
      }, {}),
      output: {
        assetFileNames: assetInfo => {
          const fileName = assetInfo.name;
          const extName = path.extname(fileName);
          switch (true) {
            case fileName === 'index.css':
              return 'assets/css/style.css';
            case fileName === 'sprite.svg':
              return 'assets/images/sprite.svg';
            case extName === '.webp' ||
              extName === '.svg' ||
              extName === '.png' ||
              extName === '.jpg' ||
              extName === '.jpeg' ||
              extName === '.gif' ||
              extName === '.ico':
              return 'assets/images/[name][extname]';
            default:
              return 'assets/[name][extname]';
          }
        },
      },
    },
  },
  plugins: [
    nunjucks({
      templatesDir: path.resolve(__dirname, 'src/templates'),
      variables: variables,
      nunjucksConfigure: { autoescape: false },
    }),
    ViteSvgSpriteWrapper({
      icons: 'src/assets/images/sprite/**/*.svg',
      outputDir: 'src/assets/images/',
      sprite: {
        shape: {
          transform: ['svgo'],
        },
      },
    }),
    createHtmlPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
      },
      pages: htmlFiles.map(file => ({
        entry: 'main.js',
        filename: file,
        template: file,
      })),
    }),
    FullReload(['src/**/*'], { always: true }),
    viteStaticCopy({
      targets: [
        {
          src: 'assets/images/sections/',
          dest: 'assets/images/',
          filter: ['**/*.webp'], // Копируем только файлы с расширением .webp
        },
      ],
    }),
  ],
});
