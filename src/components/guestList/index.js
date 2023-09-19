import React, { useState, useEffect } from 'react';

function GuestList() {
    const [guests, setguests] = useState([]);
  console.log(guests)
  useEffect(() => {
    const fetchData = async () => {
        try {
   const apiHeaders = new Headers();
   apiHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVibnZncGl6eHFlbnd1bGVnYnJhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTEyMzEyMywiZXhwIjoyMDEwNjk5MTIzfQ.vZJ8YppwdE4YwiUW4_ZX2eoj_U8kEb5cj9V5eKZQdgk');  
   apiHeaders.append('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVibnZncGl6eHFlbnd1bGVnYnJhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTEyMzEyMywiZXhwIjoyMDEwNjk5MTIzfQ.vZJ8YppwdE4YwiUW4_ZX2eoj_U8kEb5cj9V5eKZQdgk')
          const response = await fetch(`https://ubnvgpizxqenwulegbra.supabase.co/rest/v1/guest?select=*`,
  {
  method: 'GET',
  headers: apiHeaders
  }
  );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setguests(data);
        } catch (error) {
          console.error('Error fetching vendors:', error);
  }
  };

    fetchData();
  }, [guests]);

  const handleDelete = (value) => {
    const apiHeaders = new Headers();
   apiHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVibnZncGl6eHFlbnd1bGVnYnJhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTEyMzEyMywiZXhwIjoyMDEwNjk5MTIzfQ.vZJ8YppwdE4YwiUW4_ZX2eoj_U8kEb5cj9V5eKZQdgk');  
   apiHeaders.append('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVibnZncGl6eHFlbnd1bGVnYnJhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTEyMzEyMywiZXhwIjoyMDEwNjk5MTIzfQ.vZJ8YppwdE4YwiUW4_ZX2eoj_U8kEb5cj9V5eKZQdgk')
    fetch(`https://ubnvgpizxqenwulegbra.supabase.co/rest/v1/guest?id=eq.${value}`, {
      method: 'DELETE',
      headers: apiHeaders
    })
      .then((response) => {
        if (response.ok) {
        } else {
          console.error('Error deleting item:', response.status);
        }
      })
      .catch((error) => console.error('Error deleting item:', error));
 };


  return (
    <div>
      <h2>GuesList</h2>
      <div className="card-container">
        {guests.map((guest) => (
          <div className="card" key={guest.id} style={{display:"flex", flexDirection:"row"}}>
            <h3>{guest.name} From {guest.address}</h3>
      <button type="button" class="btn btn-primary mx-2" onClick={()=>handleDelete(guest.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestList;
