const getPriceInformation = (car) => {
  const basePrice = parseFloat(car["price"]);
  const featurePrice = [
    { name: "navigation", price: 25 },
    { name: "airConditioner", price: 15 },
    { name: "winterTires", price: 40 },
    { name: "insurance", price: 12 },
    { name: "protection", price: 23 },
    { name: "twoDrivers", price: 32 },
  ];
  const carPriceList = [];
  let finalPricePerDay;

  featurePrice.forEach((feature) => {
    if (car["carType"][feature.name] === true) {
      carPriceList.push(feature);
    }
  });

  finalPricePerDay = carPriceList.reduce((total, val) => {
    return total + val.price;
  }, basePrice);

  return {
    price: finalPricePerDay,
    priceList: carPriceList,
  };
};

module.exports = { getPriceInformation };
