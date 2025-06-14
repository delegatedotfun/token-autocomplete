import React, { useState, useRef, useEffect } from 'react';
import { styles } from './TokenAutocomplete.styles';

export interface TokenOption {
  name: string;
  symbol: string;
  contractAddress: string;
  imageUrl: string;
}

interface TokenAutocompleteProps {
  value: TokenOption | null;
  onChange: (value: TokenOption | null) => void;
  placeholder?: string;
  options?: TokenOption[]; // Optional, for future data injection
}

// Dummy data for showcase
const DUMMY_TOKENS: TokenOption[] = [
  { name: 'delegate.fun', symbol: 'DEL', contractAddress: 'CkADK7xbwyyU4TUs2ExUbJcASUqawVB7ZKSr1pexbonk', imageUrl: 'https://storage.googleapis.com/delegatedotfun-public/delegatedotfun.png' },
  { name: 'Bonk', symbol: 'BONK', contractAddress: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263', imageUrl: 'https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I' },
  { name: 'USELESS COIN', symbol: 'USELESS', contractAddress: 'Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk', imageUrl: 'https://ipfs.io/ipfs/bafkreihsdoqkmpr5ryebaduoutyhj3nxco6wdp4s4743l2qrae4sz4hqrm' },
  { name: 'DOGE AI', symbol: 'DOGEAI', contractAddress: '9UYAYvVS2cZ3BndbsoG1ScJbjfwyEPGxjE79hh5ipump', imageUrl: 'https://ipfs.io/ipfs/QmZYw9kKFfRUfgmA78tNfnHhKHbfRzYEgF4tDgk2FwCpgr' },
];

export const TokenAutocomplete: React.FC<TokenAutocompleteProps> = ({
  value,
  onChange,
  placeholder = 'Search token by name or address...',
  options,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filtered, setFiltered] = useState<TokenOption[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const data = (options == null || options.length === 0) ? DUMMY_TOKENS : options;

  useEffect(() => {
    if (inputValue.trim() === '') {
      setFiltered(data);
    } else {
      const q = inputValue.toLowerCase();
      setFiltered(
        data.filter(
          t =>
            t.name.toLowerCase().includes(q) ||
            t.contractAddress.toLowerCase().includes(q)
        )
      );
    }
  }, [inputValue, data]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: TokenOption) => {
    onChange(option);
    setInputValue(option.name);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} style={styles.container}>
      <div className="autocomplete-wrapper">
        <input
          type="text"
          style={{
            ...styles.input,
            ...(isFocused ? styles.inputFocus : {}),
          }}
          placeholder={placeholder}
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => {
            setIsOpen(true);
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          autoComplete="off"
        />
        {isOpen && (
          <div className="autocomplete-dropdown" style={styles.dropdown}>
            {filtered.length === 0 ? (
              <div style={styles.noResults}>No tokens found</div>
            ) : (
              filtered.map(option => (
                <div
                  key={option.contractAddress}
                  style={{
                    ...styles.option,
                    ...(value?.contractAddress === option.contractAddress ? styles.optionSelected : {}),
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = styles.optionHover.background;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 
                      value?.contractAddress === option.contractAddress 
                        ? styles.optionSelected.background 
                        : 'transparent';
                  }}
                  onClick={() => handleSelect(option)}
                  onMouseDown={e => e.preventDefault()}
                >
                  <img 
                    src={option.imageUrl} 
                    alt={`${option.name} logo`}
                    style={{
                      ...styles.tokenImage,
                      ...(value?.contractAddress === option.contractAddress ? styles.tokenImageSelected : {}),
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/32';
                    }}
                  />
                  <div className="token-info" style={styles.tokenInfo}>
                    <span className="token-name" style={styles.tokenName}>
                      {option.name} (${option.symbol})
                    </span>
                    <span className="token-address" style={styles.tokenAddress}>{option.contractAddress}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TokenAutocomplete;