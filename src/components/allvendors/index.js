import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function VendorList() {
  const { categoryID } = useParams(); // Retrieve the parameter from the URL
  console.log(useParams)
  const [vendors, setVendors] = useState([]);

  const handleOptionClick = (selectedOption) => {
    window.location.href=`/products/${selectedOption}`
  };

  useEffect(() => {
    const fetchData = async () => {
        try {
   const apiHeaders = new Headers();
   apiHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVibnZncGl6eHFlbnd1bGVnYnJhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTEyMzEyMywiZXhwIjoyMDEwNjk5MTIzfQ.vZJ8YppwdE4YwiUW4_ZX2eoj_U8kEb5cj9V5eKZQdgk');  
   apiHeaders.append('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVibnZncGl6eHFlbnd1bGVnYnJhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTEyMzEyMywiZXhwIjoyMDEwNjk5MTIzfQ.vZJ8YppwdE4YwiUW4_ZX2eoj_U8kEb5cj9V5eKZQdgk')
          const response = await fetch(`https://ubnvgpizxqenwulegbra.supabase.co/rest/v1/vendor?category=eq.${categoryID}&select`,
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
  }, [categoryID]);

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Vendors</h2>
      <div className="card-container" style={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"1rem", padding:"1rem"}}>
        {vendors.map((vendor) => (
          <div className="card" key={vendor.id} style={{display:"flex", flexDirection:"column", alignItems:"center", width: "fitContent", padding: "1rem"}}>
            <h3>{vendor.name}</h3>
      <button type="button" class="btn btn-primary mx-2" onClick={() => handleOptionClick(vendor.id)}>Shop items</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VendorList ;
