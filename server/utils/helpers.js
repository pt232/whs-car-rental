const getPriceInformation = (car) => {
  const basePrice = parseInt(car["price"]);
  const featurePrice = [
    { fittingName: "Navigation", name: "navigation", price: 25 },
    { fittingName: "Klimaanlage", name: "airConditioner", price: 15 },
    { fittingName: "Winterreifen", name: "winterTires", price: 40 },
    { fittingName: "Haftpflichtversicherung", name: "insurance", price: 12 },
    { fittingName: "Glas- & Reifenschutz", name: "protection", price: 23 },
    { fittingName: "Zweifahreroption", name: "twoDrivers", price: 32 },
  ];
  const carPriceList = [];
  let priceListTotal;

  featurePrice.forEach((feature) => {
    if (car["carType"][feature.name] === true) {
      carPriceList.push(feature);
    }
  });

  priceListTotal = carPriceList.reduce((total, val) => {
    return total + val.price;
  }, 0);

  return {
    price: basePrice,
    priceList: carPriceList,
    priceListTotal,
  };
};

module.exports = { getPriceInformation };
