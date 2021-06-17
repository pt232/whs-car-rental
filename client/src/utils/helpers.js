export const containerSizeAtLocation = (location) => {
  const { pathname } = location;
  return pathname === "/" ? "container--large" : "container--small";
};

export const blobToImageSrc = (blob) => {
  let binary = new Uint8Array(blob);
  return URL.createObjectURL(new Blob([binary]));
};

export const minDate = () => {
  const tomorrow = new Date().getTime() + 24 * 60 * 60 * 1000;
  const dateString = new Date(tomorrow).toISOString().split(".")[0];
  const dateStringWithoutMinutes = dateString.substring(
    0,
    dateString.length - 3
  );
  return dateStringWithoutMinutes;
};

export const dateDifferenceInDays = (startDate, endDate) => {
  if (!startDate && !endDate) return 1;

  return Math.floor(
    (Date.parse(new Date(endDate).toISOString().split("T")[0]) -
      Date.parse(new Date(startDate).toISOString().split("T")[0])) /
      (24 * 60 * 60 * 1000)
  );
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return (
    ("0" + date.getDate()).slice(-2) +
    "." +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "." +
    date.getFullYear() +
    ", " +
    ("0" + date.getHours()).slice(-2) +
    ":" +
    ("0" + date.getMinutes()).slice(-2) +
    " Uhr"
  );
};

export const handleFilter = (car, filter) => {
  let carClass =
    (filter.includes("Kleinwagen") &&
      car["carType"]["carClass"]["name"] === "Kleinwagen") ||
    (filter.includes("Kompaktklasse") &&
      car["carType"]["carClass"]["name"] === "Kompaktklasse") ||
    (filter.includes("Mittelklasse") &&
      car["carType"]["carClass"]["name"] === "Mittelklasse") ||
    (filter.includes("Oberklasse") &&
      car["carType"]["carClass"]["name"] === "Oberklasse") ||
    (filter.includes("Van") && car["carType"]["carClass"]["name"] === "Van") ||
    (filter.includes("SUV") && car["carType"]["carClass"]["name"] === "SUV") ||
    (filter.includes("Sportwagen") &&
      car["carType"]["carClass"]["name"] === "Sportwagen");

  let carDoors =
    (filter.includes("2") && car["carType"]["doors"] === "2") ||
    (filter.includes("4") && car["carType"]["doors"] === "4");

  let carSeats =
    (filter.includes("2-3") && car["carType"]["seats"] === "2-3") ||
    (filter.includes("4-5") && car["carType"]["seats"] === "4-5") ||
    (filter.includes("6-7") && car["carType"]["seats"] === "6-7") ||
    (filter.includes("8-9") && car["carType"]["seats"] === "8-9");

  let navigation =
    filter.includes("Navigation") && car["carType"]["navigation"] === true;

  let airConditioner =
    filter.includes("Klimaanlage") && car["carType"]["airConditioner"] === true;

  let automatic =
    filter.includes("Automatik") && car["carType"]["automatic"] === true;

  let winterTires =
    filter.includes("Winterreifen") && car["carType"]["winterTires"] === true;

  let insurance =
    filter.includes("Haftpflichtversicherung") &&
    car["carType"]["insurance"] === true;

  let protection =
    filter.includes("Glas- & Reifenschutz") &&
    car["carType"]["protection"] === true;

  let freeKilometers =
    (filter.includes("750km") && car["carType"]["freeKilometers"] === "750") ||
    (filter.includes("1500km") && car["carType"]["freeKilometers"] === "1500");

  if (
    !filter.includes("Kleinwagen") &&
    !filter.includes("Kompaktklasse") &&
    !filter.includes("Mittelklasse") &&
    !filter.includes("Oberklasse") &&
    !filter.includes("Van") &&
    !filter.includes("SUV") &&
    !filter.includes("Sportwagen")
  ) {
    carClass = true;
  }

  if (!filter.includes("2") && !filter.includes("4")) {
    carDoors = true;
  }

  if (
    !filter.includes("2-3") &&
    !filter.includes("4-5") &&
    !filter.includes("6-7") &&
    !filter.includes("8-9")
  ) {
    carSeats = true;
  }

  if (!filter.includes("Navigation")) {
    navigation = true;
  }

  if (!filter.includes("Klimaanlage")) {
    airConditioner = true;
  }

  if (!filter.includes("Automatik")) {
    automatic = true;
  }

  if (!filter.includes("Winterreifen")) {
    winterTires = true;
  }

  if (!filter.includes("Haftpflichtversicherung")) {
    insurance = true;
  }

  if (!filter.includes("Glas- & Reifenschutz")) {
    protection = true;
  }

  if (!filter.includes("750km") && !filter.includes("1500km")) {
    freeKilometers = true;
  }

  return (
    carClass &&
    carDoors &&
    carSeats &&
    navigation &&
    airConditioner &&
    automatic &&
    winterTires &&
    insurance &&
    protection &&
    freeKilometers
  );
};

export const handleLocationFilter = (car, locationFilter) => {
  if (!locationFilter) return true;
  return locationFilter === car["rentalStation"]["city"];
};

export const handleTimeFilter = (car, timeFilter) => {
  const { startDate, endDate } = timeFilter;

  if (!startDate || !endDate) return true;

  const availableFrom =
    Date.parse(startDate) >= Date.parse(car["availableFrom"]);
  const availableTo = Date.parse(endDate) <= Date.parse(car["availableTo"]);

  return availableFrom && availableTo;
};
