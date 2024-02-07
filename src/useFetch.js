import { useState, useEffect } from "react";

export function useFetch(url){ 
const [data, setData] = useState(null);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchData = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjgxMTNFNTExLTJCNTEtNDNBNi1BRTU0LTg3RkVFMDBDOTU0NiIsImVtYWlsIjoianVhbi5yYW5nZWxAZmluYW56YXV0by5jb20uY28iLCJzdWIiOiJqdWFuLnJhbmdlbEBmaW5hbnphdXRvLmNvbS5jbyIsImp0aSI6IjQ0ODVkNWJhLThmNTctNGQwNS1iMWI4LTg5ODIyNTk0NTk1MSIsInJvbGUiOiJBZG1pbmlzdHJhdG9yIiwibmJmIjoxNzA3MjU2MTczLCJleHAiOjE3MDcyNTczNzMsImlhdCI6MTcwNzI1NjE3M30.3Pqh7a4Guru2l_irPu8khePiGKo4XFc2e0Vr8P8fZvo';
        
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
      } catch (error) {
        ((error) => setError(error))
      }
    };

    fetchData();
  }, []);
  
  return {data};
}

