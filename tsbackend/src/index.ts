import express from 'express';
import { getTopCryptos } from './controllers';
const app=express();
app.use(express.json());
const PORT=8000


app.get('/cryptos',getTopCryptos)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });