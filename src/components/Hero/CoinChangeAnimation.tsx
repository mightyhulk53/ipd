// components/CoinChangeAnimation.tsx
import React, { useEffect, useState } from 'react';
import Coin from './Coin';
import styles from '@/components/Hero//animation.module.css';

interface CoinChangeAnimationProps {
  coins: number[];
  amount: number;
}

const CoinChangeAnimation: React.FC<CoinChangeAnimationProps> = ({ coins, amount }) => {
  const [animationSteps, setAnimationSteps] = useState<Array<Array<number>>>([]);

  useEffect(() => {
    const steps: Array<Array<number>> = [];

    const dp: number[] = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (const coin of coins) {
      for (let i = coin; i <= amount; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }

    let currentAmount = amount;
    while (currentAmount > 0) {
      for (const coin of coins) {
        if (currentAmount >= coin && dp[currentAmount] === dp[currentAmount - coin] + 1) {
          steps.unshift([...coins, currentAmount]);
          currentAmount -= coin;
          break;
        }
      }
    }

    setAnimationSteps(steps);
  }, [amount, coins]);

  return (
    <div className={`coin-container ${styles.coinContainer}`}>
      {animationSteps.map((step, index) => (
        <div key={index} className={`flex items-center ${styles.coin}`}>
          {step.map((coin, coinIndex) => (
            <Coin key={coinIndex} value={coin} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CoinChangeAnimation;
