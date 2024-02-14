/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [criptos, setCriptos]= useState();

  useEffect(() => {
    console.log(`${API_URL}assets`)
    fetch(`${API_URL}assets`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCriptos(data.data);
      })
      .catch(() => {
        console.error("La petición Falló");
      })
  }, []);

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <table>
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {
            criptos.map(({rank, name, priceUsd}) => (
              <tr key={rank}>
                <td>{rank}</td>
                <td>{name}</td>
                <td>{priceUsd}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <ol>
      </ol>
    </>
  )
}

export default App
