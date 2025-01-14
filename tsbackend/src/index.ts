import express from 'express';
import cors from 'cors'
import client from 'prom-client'//library for collecting and exposing metrics for Prometheus
import axios from 'axios';
const app=express();
const register=new client.Registry(); //Creates a new Prometheus registry to store and expose all metrics
app.use(cors());
app.use(express.json());
const PORT=8000









//apiRequestCount:A counter metric to track no.of api req
// name:unique name for meterric ,  help:description
//buckets: Predefined intervals for tracking durations 
//requestDuration: A histogram metric to measure request duration
//cryptoMarketCap: A gauge metric to track the market capitalization of cryptocurrencies
const apiRequestCount=new client.Counter({
  name:'api_request_count',
  help:'Number of API requests made',
}) 


const requestDuration=new client.Histogram({
  name:'api_request_duration_seconds',
  help:'Request duration in seconds',
  buckets:[0.1, 0.5, 1, 2, 5],
}) 
const cryptoMarketCap = new client.Gauge({
  name:'crypto_market_cap',
  help:'Market cap of cryptocurrencies',
  labelNames:['crypto'],
});

const cryptoPrice = new client.Gauge({
  name:'crypto_price',
  help:'Current price of cryptocurrencies',
  labelNames:['crypto'],
});
register.registerMetric(apiRequestCount);
register.registerMetric(requestDuration);
register.registerMetric(cryptoMarketCap);
register.registerMetric(cryptoPrice);







export interface cryptoData{
  id:string,
  name:string,
  symbol:string,
  image:string,
  current_price:number,
  market_cap:number,
  total_volume: number;
  price_change_percentage_24h: number;


}

export const fetchCryptoData=async()=>{
  try{
    const params = {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 50,
      page: 1,
      sparkline: false
    };
    const response=await axios.get('https://api.coingecko.com/api/v3/coins/markets',{params})
     console.log(response)
     response.data.forEach((crypto: any) => {
      cryptoMarketCap.set({ crypto: crypto.id }, crypto.market_cap);
      cryptoPrice.set({ crypto: crypto.id }, crypto.current_price);
     })
    return response.data;

  }catch(error:any){
    console.error('Error fetching crypto data:', error.message);
    return [];
  }
}
setInterval(fetchCryptoData, 15000);



app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.send(await register.metrics());
});



export const getTopCryptos=async(req: any,res: any)=>{
  const start = Date.now();
  apiRequestCount.inc();

      try{
          const cryptos=await fetchCryptoData();
          console.log(cryptos);
          const duration=(Date.now()-start)/1000;
          requestDuration.observe(duration);
          res.json(cryptos);

      }catch(err:any){
          console.log("error in fetchinf top cryptos ");
          res.status(500).json({ err: err.message });
      }     
}





app.get('/cryptos',getTopCryptos)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });