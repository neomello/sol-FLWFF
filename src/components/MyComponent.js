
      import React, { useState, useEffect } from 'react';

      function MyComponent() {
        const [data, setData] = useState(null);

        useEffect(() => {
          fetch('/api/data')
            .then(response => response.json())
            .then(data => setData(data));
        }, []);

        return (
          <div>
            {data ? (
              <p>Data: {data.value}</p>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        );
      }

      export default MyComponent;
    