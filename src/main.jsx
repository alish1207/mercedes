import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const buyProduct = async (product) => {
  const tg = window.Telegram.WebApp;

  await fetch("https://mercedes-sigma-coral.vercel.app/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: tg.initDataUnsafe.user.id,
      name: product.name,
      price: product.price,
    }),
  });
};