import React, { useState } from "react";
import "./style.css";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";

function List({ coin, delay }) {
  return (
    <motion.tr
      className="list-row"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <Tooltip title="Coin Image">
        <td className="td-img">
          <img src={coin.image} className="coin-image coin-image-td" />
        </td>
      </Tooltip>
      <Tooltip title="Coin Info" placement="bottom-start">
        <td className="td-info">
          <div className="info-flex">
            <p className="coin-symbol td-p">{coin.symbol}</p>
            <p className="coin-name td-p">{coin.name}</p>
          </div>
        </td>
      </Tooltip>
      <Tooltip title="Coin Price Percentage In 24hrs" placement="bottom-start">
        {coin.price_change_percentage_24h >= 0 ? (
          <td>
            <div className="chip-flex">
              <div className="price-chip">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="chip-icon td-chip-icon green">
                <TrendingUpRoundedIcon />
              </div>
            </div>
          </td>
        ) : (
          <td>
            <div className="chip-flex">
              <div className="price-chip red">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="chip-icon td-chip-icon red">
                <TrendingDownRoundedIcon />
              </div>
            </div>
          </td>
        )}
      </Tooltip>
      <Tooltip title="Coin Price In USD" placement="bottom-end">
        {coin.price_change_percentage_24h >= 0 ? (
          <td className="current-price  td-current-price">
            ${coin.current_price.toLocaleString()}
          </td>
        ) : (
          <td className="current-price-red td-current-price">
            ${coin.current_price.toLocaleString()}
          </td>
        )}
      </Tooltip>
      <Tooltip title="Coin Total Volume" placement="bottom-end">
        <td className="coin-name td-totalVolume">
          {coin.total_volume.toLocaleString()}
        </td>
      </Tooltip>
      <Tooltip title="Coin Market Capital" placement="bottom-end">
        <td className="coin-name td-marketCap">
          ${coin.market_cap.toLocaleString()}
        </td>
      </Tooltip>
    </motion.tr>
  );
}

export default List;
