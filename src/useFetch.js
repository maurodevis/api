import { useState, useEffect } from "react";


export function useFetch(url){ 
const [data, setData] = useState(null);
const [error, setError] = useState(null);



useEffect(() => {
    const fetchData = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjgxMTNFNTExLTJCNTEtNDNBNi1BRTU0LTg3RkVFMDBDOTU0NiIsImVtYWlsIjoianVhbi5yYW5nZWxAZmluYW56YXV0by5jb20uY28iLCJzdWIiOiJqdWFuLnJhbmdlbEBmaW5hbnphdXRvLmNvbS5jbyIsImp0aSI6IjM1MGMyNzMzLTYwYjUtNDExMy05OWM0LWExOGNlYTk0MWZmZSIsInJvbGUiOiJBZG1pbmlzdHJhdG9yIiwibmJmIjoxNzA3MzM3NDc0LCJleHAiOjE3MDczMzg2NzQsImlhdCI6MTcwNzMzNzQ3NH0.u0m-2IUqxLZjLOr2a-PZDitWPTLXvv093l0-OENxyJU';
        //const arreglo_data = []

        const response = await fetch(url , {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response) {
          throw new Error('Error al obtener los datos');
        }

        const responseData = await response.json();
        setData(responseData);
        arreglo_data = data;
        //console.log(arreglo_data)
      } catch (error) {
        ((error) => setError(error))
      }
    };

    fetchData();
  }, []);

  
  return {data};
}

