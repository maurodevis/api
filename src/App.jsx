import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState();
   const [showdata, setShow] = useState(null)
  
   console.log(data)
   
  const newData =  async () => {
   
    const res =  await data.data
    
    setShow(res)
  }


  useEffect(() => {

    newData()
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.finanzauto.info/Carfiao.Inventario/api/Vehicle/GetVehiclesByFilters?PageIndex=10&PageSize=1');
        const jsonData = await response.json(); 

       
        
        setData(jsonData.data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
    {/* {data ? (
      <pre>{JSON.stringify(data, null, 2)}</pre>
    ) : (
      <p>Cargando datos...</p>
    )} */}
    {data && data.map((dato) => (
      <ul>
        <li>Marca de vehiculo:   {dato.brand}</li>
        <li>Año de vehiculo {dato.model} </li>
        <li>Kilometraje de vehiculo: {dato.mileage} </li>
        <li>Placa del vehiculo: {dato.licencePlate} </li>
        <img src={dato.routeImageMain} alt="imgen vehiculo" />
      </ul>
    )
    )} 
    <p></p>
  </div>
  );
};

export default App;

