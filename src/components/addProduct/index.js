import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function ProductForm() {
  const { vendorId } = useParams(); // Retrieve the parameter from the URL
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    status: true,
    vendor: vendorId,
  });
  
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    // const newValue = type === 'checkbox' ? e.target.checked : value;
    const newValue = type === 'checkbox' ? e.target.checked.toString() : value;
    
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    JSON.stringify(formData)
    e.preventDefault();
    try {
        const apiHeaders = new Headers();
   apiHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVibnZncGl6eHFlbnd1bGVnYnJhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTEyMzEyMywiZXhwIjoyMDEwNjk5MTIzfQ.vZJ8YppwdE4YwiUW4_ZX2eoj_U8kEb5cj9V5eKZQdgk');  
   apiHeaders.append('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVibnZncGl6eHFlbnd1bGVnYnJhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTEyMzEyMywiZXhwIjoyMDEwNjk5MTIzfQ.vZJ8YppwdE4YwiUW4_ZX2eoj_U8kEb5cj9V5eKZQdgk')
   apiHeaders.append('content-type', 'application/json')
      const response = await fetch('https://ubnvgpizxqenwulegbra.supabase.co/rest/v1/product', {
        method: 'POST',
        headers: apiHeaders,
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message or reset the form
        console.log('Product created successfully.');
        <div>Product created</div>
        navigate(`/${vendorId}/allItems`);
      } else {
        // Handle errors, e.g., show an error message
        console.error('Failed to create product.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center", margin:"5px"}}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input style={{ margin:"5px"}}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input style={{ margin:"5px"}}
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <input style={{ margin:"5px"}}
            type="checkbox"
            id="status"
            name="status"
            checked={formData.status}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="vendor">Vendor:</label>
          <input style={{ margin:"5px"}}
            type="text"
            id="vendor"
            name="vendor"
            value={formData.vendor}
            onChange={handleChange}
          />
        </div>
        <button class="btn btn-primary mx-2 my-2" onClick={handleSubmit} type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default ProductForm;
