export const coinObject = (setState, data) => {
  setState({
    id: data.id,
    symbol: data.symbol,
    image: data.image.large,
    desc: data.description.en,
    price_change_percentage_24h: data.market_data.price_change_percentage_24h,
    current_price: data.market_data.current_price.usd,
    market_cap: data.market_data.market_cap.usd,
    total_volume: data.market_data.total_volume.usd,
    circulating_supply: data.market_data.circulating_supply,
    max_supply: data.market_data.max_supply,
  });
};
