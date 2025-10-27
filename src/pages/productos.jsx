import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://68fec5347c700772bb14714c.mockapi.io/api/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        {console.error("Error!,", error)}
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    alert(`Producto ${producto.nombre} agregado al carrito`);
  }

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    <ul id="lista-productos">
      {productos.map((producto) => (
        <li key={producto.id}>
        <h2>{producto.nombre}</h2>
          <br />
          Descripción: {producto.descripcion}
          <br />
          Precio: ${producto.precio}
          <br />
          <img src={producto.imagen} alt={producto.nombre} width="80%" />
          <Link to={`/productos/${producto.id}`} state={{producto}}><button>Más detalles</button></Link>
          <button onClick={() => agregarAlCarrito(producto)}>Comprar</button>
        </li>
      ))}
    </ul>
    </>
  );
}