import axios from 'axios';
import { Crypto, CryptoAnalysis } from '../types/crypto';

const api = axios.create({
  baseURL: 'https://cryptodatafeed-production.up.railway.app/'
});

export const getCryptos = async (): Promise<Crypto[]> => {
  const response = await api.get('/cryptos');
  return response.data;
};

export const getAnalysis = async (): Promise<CryptoAnalysis> => {
  const response = await api.get('/cryptos/analysis');
  return response.data;
};

export const downloadExcel = async () => {
  const response = await api.get('/cryptos/export', {
    responseType: 'blob',
  });
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'crypto-data.xlsx');
  document.body.appendChild(link);
  link.click();
  link.remove();
};