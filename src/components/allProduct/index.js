import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductList() {
  const { vendorId } = useParams(); // Retrieve the parameter from the URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
   const apiHeaders = new Headers();
   apiHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVibnZncGl6eHFlbnd1bGVnYnJhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTEyMzEyMywiZXhwIjoyMDEwNjk5MTIzfQ.vZJ8YppwdE4YwiUW4_ZX2eoj_U8kEb5cj9V5eKZQdgk');  
   apiHeaders.append('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVibnZncGl6eHFlbnd1bGVnYnJhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTEyMzEyMywiZXhwIjoyMDEwNjk5MTIzfQ.vZJ8YppwdE4YwiUW4_ZX2eoj_U8kEb5cj9V5eKZQdgk')
          const response = await fetch(`https://ubnvgpizxqenwulegbra.supabase.co/rest/v1/product?vendor.id=eq.${vendorId}&select=*,vendor(*)`,
  {
  method: 'GET',
  headers: apiHeaders
  }
  );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setVendors(data);
        } catch (error) {
          console.error('Error fetching vendors:', error);
  }
  };

    fetchData();
  }, [paramFromURL]);

  return (
    <div>
      <h2>Vendors</h2>
      <div className="card-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h3>{product.name}</h3>
            <button type="button" class="btn btn-primary mx-2" onClick={() => console.log('Log Out clicked')}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
