const getPriceInformation = (car, customer, fee) => {
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
  let discount;
  let driversFee;

  featurePrice.forEach((feature) => {
    if (car["carType"][feature.name] === true) {
      carPriceList.push(feature);
    }
  });

  priceListTotal = carPriceList.reduce((total, val) => {
    return total + val.price;
  }, 0);

  if (customer != null && customer.kilometersDriven >= 10000) {
    discount = {
      fittingName: "10.000 Kilometer Rabatt",
      discount: 0.1,
      discountText: "10%",
    };
  }

  if (fee === "true") {
    driversFee = {
      fittingName: "Zweitfahrer unter 25",
      fee: 0.25,
      feeText: "25%",
    };
  }

  return {
    price: basePrice,
    priceList: carPriceList,
    priceListTotal,
    discount,
    driversFee,
  };
};

module.exports = { getPriceInformation };
