// components/Coin.tsx
import React from 'react';

interface CoinProps {
  value: number;
}

const Coin: React.FC<CoinProps> = ({ value }) => {
  return (
    <div className="coin">
      {value}
    </div>
  );
};

export default Coin;
