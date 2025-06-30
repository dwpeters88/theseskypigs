import React, { useState, useEffect } from 'react';

const searchFormStyle = {
  marginTop: '1rem',
  marginBottom: '2rem',
  backgroundColor: '#fff',
  padding: '1.5rem',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
};

const inputGroupStyle = {
  display: 'flex',
  marginBottom: '1rem',
};

const inputStyle = {
  flexGrow: '1',
  padding: '0.75rem',
  border: '1px solid #ccc',
  borderRadius: '4px 0 0 4px',
  fontSize: '1rem',
};

const buttonStyle = {
  padding: '0.75rem 1.5rem',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '0 4px 4px 0',
  cursor: 'pointer',
  fontSize: '1rem',
};

const resultsContainerStyle = {
  marginTop: '2rem',
};

const resultItemStyle = {
  listStyle: 'none',
  padding: '1rem',
  border: '1px solid #eee',
  marginBottom: '0.5rem',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#fff',
};

const availableStyle = {
  color: 'green',
  fontWeight: 'bold',
};

const unavailableStyle = {
  color: 'red',
  fontWeight: 'bold',
};

// registerButtonStyle can be replaced by using className="success" on the button
// const registerButtonStyle = { ... }

function DomainSearch({ initialQuery }) {
  const [searchTerm, setSearchTerm] = useState(initialQuery || '');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    // If there's an initial query (e.g., from URL params), perform search on load
    if (initialQuery) {
      performSearch(initialQuery);
    }
  }, [initialQuery]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const performSearch = (domain) => {
    if (!domain.trim()) {
        setResults([]);
        setSearched(true);
        return;
    }
    setIsLoading(true);
    setSearched(true);
    // Mock API call
    setTimeout(() => {
      const mockResults = [
        { name: domain, available: Math.random() > 0.3, price: '$12.99/yr' },
        { name: `my${domain}`, available: Math.random() > 0.5, price: '$10.99/yr' },
        { name: `${domain.split('.')[0]}-shop.${domain.split('.')[1] || 'com'}`, available: Math.random() > 0.4, price: '$15.99/yr' },
        { name: `${domain.split('.')[0]}hq.${domain.split('.')[1] || 'com'}`, available: Math.random() > 0.6, price: '$11.99/yr' },
        { name: `get${domain}`, available: false, price: 'N/A' },
      ].filter(r => r.name.includes('.')); // Basic filter to ensure a TLD-like structure

      setResults(mockResults);
      setIsLoading(false);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update URL without full page reload, for better UX and bookmarking
    if (window.history.pushState) {
        const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?query=' + encodeURIComponent(searchTerm);
        window.history.pushState({path:newurl},'',newurl);
    }
    performSearch(searchTerm);
  };

  const handleRegisterClick = (domainName, price) => { // Added 'price' parameter
    // For Shopify, this might involve creating a cart and redirecting to Shopify checkout.
    // Here, we redirect to our local checkout page with domain info.
    console.log(`Register button clicked for ${domainName} with price ${price}`);
    try {
      sessionStorage.setItem('checkoutDomainName', domainName);
      sessionStorage.setItem('checkoutDomainPrice', price);
    } catch (e) {
      console.warn('SessionStorage not available or error setting item.', e);
      // Proceed with URL params even if sessionStorage fails
    }
    window.location.href = `/checkout?domain=${encodeURIComponent(domainName)}&price=${encodeURIComponent(price)}`;
  };

  // The getPriceForDomain function is no longer needed as price is passed directly.
  // const getPriceForDomain = (domainName) => {
  //   const result = results.find(r => r.name === domainName);
  //   return result ? result.price : 'N/A';
  // }

  return (
    <div>
      <form onSubmit={handleSubmit} style={searchFormStyle}>
        <div style={inputGroupStyle}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="e.g., myawesomeidea.com"
            style={inputStyle}
            required
          />
          <button type="submit" style={buttonStyle} disabled={isLoading}>
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {isLoading && <p>Loading results...</p>}

      {!isLoading && searched && results.length === 0 && searchTerm && (
        <p>No results found for "{searchTerm}". Try a different name.</p>
      )}

      {!isLoading && results.length > 0 && (
        <div style={resultsContainerStyle}>
          <h2>Results for "{searchTerm}"</h2>
          <ul style={{ paddingLeft: 0 }}>
            {results.map((domain) => (
              <li key={domain.name} style={resultItemStyle}>
                <div>
                  <strong>{domain.name}</strong> - {}
                  <span style={domain.available ? availableStyle : unavailableStyle}>
                    {domain.available ? `Available! (${domain.price})` : 'Unavailable'}
                  </span>
                </div>
                {domain.available && (
                  <button
                    onClick={() => handleRegisterClick(domain.name)}
                    style={registerButtonStyle}
                  >
                    Register
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DomainSearch;
```
