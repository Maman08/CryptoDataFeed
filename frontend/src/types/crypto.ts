export interface Crypto {
  [x: string]: any;
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  volume_24h: number;
  price_change_24h: number;
}

export interface CryptoAnalysis {
  averagePrice: number;
  highestChange: {
    name: string;
    change: number;
  };
  lowestChange: {
    name: string;
    change: number;
  };
  top5ByMarketCap: Crypto[];
}