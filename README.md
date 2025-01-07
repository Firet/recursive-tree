Esta app se puede probar acá: https://recursive-tree-seven.vercel.app/

## ♻️Recursive Tree🌲

Es una app de React que permite crear un árbol de datos
- Cada nodo se crea a partir de un formulario que llena el usuario.
- El usuario elige el nombre del nodo y cuál es su padre.
- Si no encuentra padre, no se agrega el nodo.
- Todo el árbol se guarda en el local storage con el hook useLocalStorage().
- Se puede borrar todo el árbol o se puede borrar un nodo indivualmente.
- Hay un toggle-switch para activar o desactivar la eliminación individual de los nodos.
- 💬 Hay comentarios y console logs en los componentes para que sea más fácil entender la lógica.
- El la estructura del árbol de datos es así:
```json
{
	title: “raíz del árbol”,
	children: [
		{
		title: “hijo1”,
		children: [...]
		},
		{
		title: “hijo2”,
		children: [...]
		}
	]
}
```

----

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

----

## Cosas por hacer

- Evitar que haya nodos con nombres repetidos (se generan errores al borrarlos).
- Crear hijos a través de cada nodo y no desde la página principal.
- Actualmente existe un prop drilling porque se pasan props entre componentes padres e hijos. Esto se puede solucionar creando un context provider.
- Mejorar la interfaz visual.


