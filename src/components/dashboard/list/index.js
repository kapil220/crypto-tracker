import React from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

function List({ coin }) {
  return (
    <tr className="list-row">
      <td className="td-image">
        <img src={coin.image} className="coin-logo" alt={coin.name} />
      </td>
      <td>
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </td>
      <td className="chip-flex">
        <div
          className={`price-chip ${
            coin.price_change_percentage_24h < 0 ? "chip-red" : ""
          }`}
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </div>
        <div
          className={`icon-chip ${
            coin.price_change_percentage_24h < 0 ? "icon-red" : ""
          }`}
        >
          {coin.price_change_percentage_24h > 0 ? (
            <TrendingUpRoundedIcon />
          ) : (
            <TrendingDownRoundedIcon />
          )}
        </div>
      </td>
      <td className="info-container">
        <h3
          className="coin-price"
          style={{
            color:
              coin.price_change_percentage_24h < 0
                ? "var(--red)"
                : "var(--green)",
          }}
        >
          $
          {coin.current_price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h3>
      </td>
      <td className="total-volume">
        <p>
          Total Volume:{" "}
          {coin.total_volume.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </td>
      <td className="market-cap">
        <p>
          Market Cap:{" "}
          {coin.market_cap.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </td>
    </tr>
  );
}

export default List;
