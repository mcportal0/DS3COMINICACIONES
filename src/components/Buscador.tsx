import { useState } from "react";
import productosJson from "../data/productos.json";

interface Producto {
  id: number;
  name: string;
  marca: string;
  slug: string;
}

export default function Buscador() {
  const [search, setSearch] = useState("");

  const productosFiltrados = productosJson.filter((prod: Producto) =>
    prod.name.toLowerCase().includes(search.toLowerCase()) ||
    prod.marca.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Busca una marca o producto"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-4 rounded-lg pr-12 h-11 border-2 border-primary/30"
      />
      <button
        className="text-white rounded-lg absolute p-2 right-0 top-0 h-11 w-20 bg-primary hover:bg-primary/90 text-sm"
      >
        Buscar
      </button>

      {search.length > 0 && (
        <div className="absolute bg-white shadow-lg rounded-lg w-full mt-1 max-h-64 overflow-y-auto z-50">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((prod: Producto) => (
                <a href={`/productos/${prod.slug}`} key={prod.id}>
              <div
                key={prod.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                {prod.name} — <span className="text-primary">{prod.marca}</span>
              </div>
                </a>

            ))
          ) : (
            <p className="p-4 text-sm text-gray-500">No se encontraron resultados</p>
          )}

          
        </div>
      )}
    </div>
  );
}
