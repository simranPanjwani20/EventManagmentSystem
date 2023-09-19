import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../productCard';

function VendorItems() {
  const [products, setProducts] = useState([]);
  const { vendorId } = useParams(); // Retrieve the parameter from the URL

console.log()
  useEffect(() => {
    const fetchData = async () => {
        try {
   const apiHeaders = new Headers();
   apiHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVibnZncGl6eHFlbnd1bGVnYnJhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTEyMzEyMywiZXhwIjoyMDEwNjk5MTIzfQ.vZJ8YppwdE4YwiUW4_ZX2eoj_U8kEb5cj9V5eKZQdgk');  
   apiHeaders.append('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVibnZncGl6eHFlbnd1bGVnYnJhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTEyMzEyMywiZXhwIjoyMDEwNjk5MTIzfQ.vZJ8YppwdE4YwiUW4_ZX2eoj_U8kEb5cj9V5eKZQdgk')
          const response = await fetch(`https://ubnvgpizxqenwulegbra.supabase.co/rest/v1/vendor?id=eq.${vendorId}&select=*,product(*)`,
  {
  method: 'GET',
  headers: apiHeaders
  }
  );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching vendors:', error);
  }
  };

    fetchData();
  }, []);

  return (
    <div>
        <h2>Vendors - {products[0]?.name}</h2>
      <div className="card-container">
        {products[0]?.product?.map((item) => (
          <div className="card" key={item.id} >
           <ProductCard productName={item.name} price={item.price} status={"active"} vendorName={products[0].name}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VendorItems;
