import { useFetch } from './useFetch'
import './App.css'

function App() {                          //https://jsonplaceholder.typicode.com/users    //https://www.finanzauto.info/Carfiao.Inventario
  const {data, loading, error} = useFetch("https://www.finanzauto.info/Carfiao.Inventario/api/Account/GetUsers")

  return (
    <>
      <div className='App'>
        <h1>consulta de usuarios</h1>
          
        {data && (
        <table>
          <thead>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <th>Nombre</th>
              <th>Apellido</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td className=''>{user.name}</td>
                <td>{user.lastName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div>
      <h1>consulta de vehiculos</h1>
    </>
  )
}

export default App
