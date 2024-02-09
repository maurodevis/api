import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.finanzauto.info/Carfiao.Inventario/api/Vehicle/GetVehiclesByFilters?PageIndex=10&PageSize=1');
        const jsonData = await response.json();
        console.log()
        setData(jsonData);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, ); // El segundo parámetro [] asegura que useEffect se ejecute solo una vez al montar el componente.

  return (
    <div>
    {data ? (
      <pre>{JSON.stringify(data, null, 2)}</pre>
    ) : (
      <p>Cargando datos...</p>
    )}
  </div>
  );
};

export default App;

