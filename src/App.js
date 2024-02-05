import React, { useEffect, useState } from 'react'

const App = () => {

  const [isLoading,setLoading]=useState(true);
  const [data,setData]=useState([]);
  useEffect(()=>{

    const fetchData=async()=>{
      try {
         
      const res=await fetch("http://jsonplaceholder.typicode.com/users");
      const data=await res.json();
      setData(data);
      setLoading(false);


      } catch(E) {

        console.error(E);

      }




    }
    fetchData();


  },[])



  return (
    <>
    <h1>this is an api table</h1>
    <div className="container mx-auto mt-4">
      {isLoading ? (
        <div className="text-center text-gray-600">Loading data...</div>
      ) : (
        <table className="table-auto w-full text-gray-600">
          <thead>
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-200">
                <td className="p-2">{item.id}</td>
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    
    </>
  )
}

export default App