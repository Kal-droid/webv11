export interface MarketData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  source: string;
  url: string;
}

export interface StockDetails extends MarketData {
  companyName: string;
  sector: string;
  pe: number;
  dividend: number;
  high52Week: number;
  low52Week: number;
}