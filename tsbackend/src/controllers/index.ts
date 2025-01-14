//sample data

// [
//     {
//         "id": "bitcoin",
//         "symbol": "btc",
//         "name": "Bitcoin",
//         "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
//         "current_price": 94360,
//         "market_cap": 1872243046108,
//         "market_cap_rank": 1,
//         "fully_diluted_valuation": 1984798913160,
//         "total_volume": 17130669681,
//         "high_24h": 95006,
//         "low_24h": 93728,
//         "price_change_24h": -162.65076718824275,
//         "price_change_percentage_24h": -0.17208,
//         "market_cap_change_24h": -994059261.5766602,
//         "market_cap_change_percentage_24h": -0.05307,
//         "circulating_supply": 19809112.0,
//         "total_supply": 21000000.0,
//         "max_supply": 21000000.0,
//         "ath": 108135,
//         "ath_change_percentage": -12.67915,
//         "ath_date": "2024-12-17T15:02:41.429Z",
//         "atl": 67.81,
//         "atl_change_percentage": 139150.1635,
//         "atl_date": "2013-07-06T00:00:00.000Z",
//         "roi": null,
//         "last_updated": "2025-01-12T12:32:25.706Z"
//     },
//     {
//         "id": "ethereum",
//         "symbol": "eth",
//         "name": "Ethereum",
//         "image": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
//         "current_price": 3255.18,
//         "market_cap": 392870710754,
//         "market_cap_rank": 2,
//         "fully_diluted_valuation": 392870710754,
//         "total_volume": 9629981110,
//         "high_24h": 3317.1,
//         "low_24h": 3228.9,
//         "price_change_24h": -17.570952789036255,
//         "price_change_percentage_24h": -0.53689,
//         "market_cap_change_24h": -1810786611.3737793,
//         "market_cap_change_percentage_24h": -0.4588,
//         "circulating_supply": 120490689.4286956,
//         "total_supply": 120490689.4286956,
//         "max_supply": null,
//         "ath": 4878.26,
//         "ath_change_percentage": -33.26774,
//         "ath_date": "2021-11-10T14:24:19.604Z",
//         "atl": 0.432979,
//         "atl_change_percentage": 751755.02162,
//         "atl_date": "2015-10-20T00:00:00.000Z",
//         "roi": {
//             "times": 45.118906042491055,
//             "currency": "btc",
//             "percentage": 4511.890604249105
//         },
//         "last_updated": "2025-01-12T12:32:20.466Z"
//     },
// ]


// import axios from "axios";

// export interface cryptoData{
//     id:string,
//     name:string,
//     symbol:string,
//     image:string,
//     current_price:number,
//     market_cap:number,
//     total_volume: number;
//     price_change_percentage_24h: number;


// }

// export const fetchCryptoData=async()=>{
//     const params = {
//         vs_currency: "usd",
//         order: "market_cap_desc",
//         per_page: 50,
//         page: 1,
//         sparkline: false
//       };
//       const response=await axios.get('https://api.coingecko.com/api/v3/coins/markets',{params})
//        console.log(response)
//       return response.data;
// }

// export const getTopCryptos=async(req: any,res: any)=>{
//         try{
//             const cryptos=await fetchCryptoData();
//             console.log(cryptos);
//             res.json(cryptos);

//         }catch(err:any){
//             console.log("error in fetchinf top cryptos ");
//             res.status(500).json({ err: err.message });
//         }     
// }





