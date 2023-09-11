import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const API_KEY = "721bfc51c37c4c7984f5f21afa405ac8";

const CurrencyExchange = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        const currenciesData = Object.keys(data.rates)
          .filter(
            (currency) =>
              currency === "CAD" ||
              currency === "IDR" ||
              currency === "JPY" ||
              currency === "CHF" ||
              currency === "EUR" ||
              currency === "GBP"
          )
          .map((currency) => ({
            name: currency,
            country: getCountryName(currency),
            exchangeRate: data.rates[currency],
            weBuy: data.rates[currency] * 1.05,
            weSell: data.rates[currency] * 0.95,
          }));
        setCurrencies(currenciesData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const getCountryName = (currencyCode) => {
    switch (currencyCode) {
      case "CAD":
        return "Canada";
      case "IDR":
        return "Indonesia";
      case "JPY":
        return "Japan";
      case "CHF":
        return "Switzerland";
      case "EUR":
        return "Eurozone";
      case "GBP":
        return "United Kingdom";
      default:
        return "";
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">
        Currency Exchange Rates (USD) 💱
      </h1>
      <p className="text-gray-600 mb-4">
        Below are the exchange rates for selected currencies:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-2">Currency</th>
              <th className="p-2">Country</th>
              <th className="p-2">Exchange Rate</th>
              <th className="p-2">We Buy</th>
              <th className="p-2">We Sell</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map((currency) => (
              <tr key={currency.name}>
                <td className="border border-gray-300 p-2">{currency.name}</td>
                <td className="border border-gray-300 p-2">
                  {currency.country}
                </td>
                <td className="border border-gray-300 p-2">
                  {currency.exchangeRate}
                </td>
                <td className="border border-gray-300 p-2 font-semibold">
                  {currency.weBuy}
                </td>
                <td className="border border-gray-300 p-2 font-semibold">
                  {currency.weSell}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-600 mt-4">
        Exchange rate data is obtained from{" "}
        <a
          href="https://currencyfreaks.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          CurrencyFreaks API
        </a>
        .
      </p>
      <footer className="text-center mt-8 text-gray-500">
        © {new Date().getFullYear()} AryaGunawan
      </footer>
    </div>
  );
};

export default CurrencyExchange;
