import React, { useState } from 'react';
import TokenAutocomplete from './components/TokenAutocomplete';
import type { TokenOption } from './components/TokenAutocomplete';
import './App.css';

const App: React.FC = () => {
  const [selectedToken, setSelectedToken] = useState<TokenOption | null>(null);

  const handleTokenChange = (token: TokenOption | null) => {
    setSelectedToken(token);
    console.log('Selected token:', token);
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <h1 className="app-title">Token Selector</h1>
        <div className="app-card">
          <div className="form-group">
            <label className="form-label">Select Token</label>
            <TokenAutocomplete
              value={selectedToken}
              onChange={handleTokenChange}
              placeholder="Search by token name or address..."
            />
          </div>
          {selectedToken && (
            <div className="selected-info">
              <h2 className="selected-title">Selected Token Details</h2>
              <div className="details">
                <div className="detail-row">
                  <span className="detail-label">Name:</span>
                  <span className="detail-value">{selectedToken.name}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Symbol:</span>
                  <span className="detail-value">${selectedToken.symbol}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Address:</span>
                  <span className="detail-value">{selectedToken.contractAddress}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
