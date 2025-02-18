# 2-DAW

# ✨ Desplegar una Aplicación Angular en GitHub Pages ✨

Este documento explica paso a paso cómo desplegar una aplicación Angular en **GitHub Pages** usando Angular CLI.

---

## 📚 1. Crear un Repositorio en GitHub

1. Ve a [GitHub](https://github.com/) y crea un **nuevo repositorio público**.
2. Copia la URL del repositorio que acabas de crear.

---

## 🛠️ 2. Configurar Git en tu Proyecto Angular

1. Abre la terminal en la carpeta de tu proyecto Angular.
2. Ejecuta los siguientes comandos (reemplazando `Rutas` por el nombre de tu repositorio):

   ```sh
   echo "# Rutas" >> README.md
   git init
   git add README.md
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/Miisae31/Rutas.git
   git push -u origin main
   ```

---

## 💡 3. Instalar Dependencias para GitHub Pages

Ejecuta el siguiente comando para instalar `angular-cli-ghpages`:

```sh
ng add angular-cli-ghpages
```

---

## 💪 4. Desplegar el Proyecto en GitHub Pages

Para construir y desplegar el proyecto, ejecuta:

```sh
ng deploy --base-href=https://Miisae31.github.io/Rutas/
```

*(Recuerda reemplazar `Rutas` por el nombre de tu repositorio)*

---

## 🎉 5. Confirmar Cambios y Actualizar el Despliegue

Cada vez que realices cambios en tu proyecto, sigue estos pasos:

1. Construye el proyecto en modo producción:

   ```sh
   ng build --configuration production
   ```

2. Vuelve a desplegar los cambios en GitHub Pages:

   ```sh
   ng deploy --base-href=https://Miisae31.github.io/Rutas/
   ```

El proceso puede tardar entre **15 segundos y 1 minuto**.

---

## 🔗 6. Ver tu Aplicación en GitHub Pages

Visita la siguiente URL para ver tu aplicación en vivo:

```
https://Miisae31.github.io/Rutas/
```

*(Sustituye `Rutas` por el nombre de tu repositorio si es diferente)*

---

## 🚀 Conclusión

✅ Ahora tu aplicación Angular está desplegada en GitHub Pages. Cada vez que hagas cambios en el código, simplemente ejecuta los comandos de **build** y **deploy** para actualizar la versión en línea.

Si tienes dudas o problemas, revisa la documentación oficial de [angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages).

---

🎶 *"Code, deploy, repeat!"* 🎶

