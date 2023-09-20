import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBag } from '../../context/bag';

function ProductList() {
  const { vendorId } = useParams(); // Retrieve the parameter from the URL
  const [products, setProducts] = useState([]);
  const { addToBag } = useBag();
  const [showNotification, setShowNotification] = useState(false);

  const handleBag = (product) => {
    setShowNotification(true);

    // Set a timeout to hide the notification after 2 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
    addToBag({
      "name":product.name,
      "productId":product.id
    }
      );
 };

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
          setProducts(data);
        } catch (error) {
          console.error('Error fetching vendors:', error);
  }
  };

    fetchData();
  }, [vendorId]);

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Vendors</h2>
      <div className="card-container" style={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"1rem", padding:"1rem"}}>
        {products.map((product) => (
          <div className="card" key={product.id} style={{display:"flex", flexDirection:"column", alignItems:"center", width: "fitContent", padding: "1rem"}}>
            <h3>{product.name}</h3>
            <button type="button" class="btn btn-primary mx-2 w-4" onClick={()=>handleBag(product) }> Add to Cart</button>
            
          </div>
        ))}
        {showNotification && (
        <div className="notification" style={{
            bottom:" 20px",
            right: "20px",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            display: "flex"}}>
          <p>Added</p>
        </div>
      )}
      </div>
    </div>
  );
}

export default ProductList;
