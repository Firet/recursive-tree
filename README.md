Esta app se puede probar acá: https://recursive-tree-seven.vercel.app/

## ♻️Recursive Tree🌲

Es una app de React que permite crear un árbol de datos

- Cada nodo se crea a partir de un formulario que llena el usuario.
- El usuario elige el nombre del nodo y cuál es su padre.
- Si no encuentra padre, no se agrega el nodo.
- Todo el árbol se guarda en el local storage con el hook useLocalStorage().
- Se puede borrar todo el árbol o se puede borrar un nodo indivualmente.
- Hay un toggle-switch para activar o desactivar la eliminación individual de los nodos.
- Se usó context provider en el componente Tree para evitar prop drilling (de la variable isRemovable) entre componentes padres e hijos.
- Se usó React Router para que haya dos páginas: una con el árbol y la otra con un tutorial.
- Se usó prettier para que el tabulado, uso de comillas y varias carácteristicas del código sea consistente.
- Se muestra a los componentes Tree y Node en StoryBook.
- 💬 Hay comentarios y console logs en los componentes para que sea más fácil entender la lógica.
- La estructura del árbol de datos es así:

```json
{
  "title": "raíz del árbol",
  "children": [
    {
      "title": "primer hijo",
      "children": []
    },
    {
      "title": "segundo hijo",
      "children": []
    }
  ]
}
```

---

## 🏃‍♂️¿Cómo correr esta app?

1️⃣ Primero, instalá las dependencias.

```bash
npm install
```

2️⃣ Segundo, levantá el servidor de desarrollo:

```bash
npm run dev
```

💻 Después, podés abrir [localhost:5173](http://localhost:5173) con tu navegador para ver el resultado.

---

## ¿Cómo correr Storybook?

Storybook nos permite observar los distintos componentes visuales utilizados en el proyecto en un ambiente aislado.
Ejecutá en la consola el siguiente comando:

```bash
npm run storybook
```
---

## Cosas por hacer

- Crear hijos a través de cada nodo y no desde la página principal.
- Mejorar la interfaz visual.
