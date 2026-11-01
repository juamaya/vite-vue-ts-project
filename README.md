# Proyecto:

## Vite + Vue 3 + TypeScript + Tailwindcss

## Crear proyecto con [Vite](https://vite.dev/guide/)

![Vite](./src/assets/vite-vue.jpg)   

## Añadir estilos al proyecto con [Tailwindcss](https://vite.dev/guide/)
 
![Tailwindcss](./public/tailwindcss.jpg)  


# Vamos a publicar tu proyecto   en GitHub Pages 

> Te recomiendo utilizar GitHub Actions, porque automatiza la publicación: cada vez que subas cambios a GitHub, tu web se actualizará automáticamente.

Documentación oficial de despliegue de Vite [deploy](https://vite.dev/guide/static-deploy  ) 

## 1. Crear un repositorio en GitHub
  - Entra en GitHub – New repository .

  - Nombre del repositorio: vite-vue-ts-project

  - Selecciona Public.

  - Pulsa Create repository.

  - Tu futura dirección será:

```text
https://TU-USUARIO.github.io/vite-vue-ts-project/

```


## 2. Configurar vite.config.ts
  - En la raíz de tu proyecto abre vite.config.ts.

  - Configúralo así, por el nombre exacto de tu repositorio:


```typescript

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/vite-vue-ts-project/'
})
```

> Importante: GitHub Pages necesita esta configuración para encontrar correctamente los archivos CSS, JavaScript e imágenes cuando la web se publica dentro de una subcarpeta


## 3. Configurar Vue Router
  - En src/router/index.ts (o donde tengas configurado tu router), asegúrate de mantener:


```typescript

import { createRouter, createWebHistory } from 'vue-router'

import Inicio from '../views/Inicio.vue'
import Servicios from '../views/Servicios.vue'
import Proyectos from '../views/Proyectos.vue'
import Nosotros from '../views/Nosotros.vue'
import Contacto from '../views/Contacto.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    { path: '/', component: Inicio },
    { path: '/servicios', component: Servicios },
    { path: '/proyectos', component: Proyectos },
    { path: '/nosotros', component: Nosotros },
    { path: '/contacto', component: Contacto }
  ],


 // Volver al principio al cambiar de página
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return { top: 0, left: 0 };
    }


  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: 'instant'
    }
  }
})

export default 

```

> Esto permite que Vue Router tenga en cuenta la ruta base de GitHub Pages.


## 4. Crear el workflow de GitHub Actions
 - En la raíz del proyecto crea estas carpetas y archivo: deploy.yml


```text
.github/
└── workflows/
    └── deploy.yml
```
 - Dentro de deploy.yml pega lo siguiente:

```yml

name: Deploy Vue to GitHub Pages

on:
  push:
    branches:
      - main

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Prepare SPA fallback
        run: cp dist/index.html dist/404.html

      - name: Setup GitHub Pages
        uses: actions/configure-pages@v5

      - name: Upload build
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

> El paso Prepare SPA fallback es importante para que las rutas de Vue Router no terminen en un error 404 al actualizar directamente una página interior.


## 5. Subir tu proyecto a GitHub
   - Abre la terminal de VS Code en la carpeta principal del proyecto.

   - Ejecuta estos comandos:


```bash
git init

git add .

git commit -m "Primera commit"

git branch -M main

git remote add origin https://github.com/TU-USUARIO/vite-vue-ts-project.git

git push -u origin main
```
>Sustituye TU-USUARIO por tu usuario de GitHub.

  - Si ya tienes configurado un repositorio remoto, no vuelvas a ejecutar git remote add origin.


## 6. Activar GitHub Pages

  - Entra en tu repositorio y sigue estos pasos:

  - Abre Settings.

  - En el menú lateral selecciona Pages.

  - En Build and deployment selecciona GitHub Actions como Source.

  - GitHub utilizará el workflow que acabamos de crear para publicar la carpeta dist. 

## 7. Comprobar que se ha publicado

Entra en la pestaña Actions.

  - Busca Deploy Vue to GitHub Pages.

  - Espera a que termine el proceso.

  - Comprueba que aparece el indicador verde.

  - Tu web estará disponible en:

 https://TU-USUARIO.github.io/vite-vue-ts-project/

  - El enlace funcionará cuando GitHub termine el despliegue.

## 8. ¿Cómo actualizar la web posteriormente?
  - Cada vez que modifiques tu proyecto, solamente necesitarás:


```bash
git add .

git commit -m "Actualizar web NEX"

git push
```
   - GitHub Actions compilará y publicará automáticamente la nueva versión.

  ### Una consideración importante para tu proyecto
>Como estás utilizando Vue Router, Tailwind, el modo oscuro y fotografías de Unsplash, comprueba estas tres cosas antes de publicar:

  - Que las imágenes utilicen rutas compatibles con la base de Vite.

  - Que npm run build termine sin errores.

  - Que las páginas /servicios, /proyectos, /nosotros y /contacto funcionen también al recargar el navegador.
 