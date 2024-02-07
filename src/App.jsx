import { useFetch } from './useFetch'
import './App.css'

function App() {                          //https://jsonplaceholder.typicode.com/users    //https://www.finanzauto.info/Carfiao.Inventario
  const {data, loading, error} = useFetch("https://www.finanzauto.info/Carfiao.Inventario/api/Account/GetUsers")

  return (
    <>
      <div className='App'>
        <h1>consulta de usuarios</h1>
          
            {data?.map((user)=> (
            <ul key={user.id}>
               <p>Nombre : { user.name}</p> 
               <p>Apellido : {user.lastName}</p>  
            </ul>))}
      </div>
      <h1>consulta de vehiculos</h1>
    </>
  )
}

export default App
