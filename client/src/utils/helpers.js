export const containerSizeAtLocation = (location) => {
  const { pathname } = location;
  return pathname === "/" ? "container--large" : "container--small";
};

export const blobToImageSrc = (blob) => {
  let binary = new Uint8Array(blob);
  return URL.createObjectURL(new Blob([binary]));
};

export const filterToQuery = (filter) => {
  let queryString = "?";
  filter.forEach((item) => {
    queryString += `${item.tableName}.${item.columnName}=${item.value}&`;
  });
  return queryString.substr(0, queryString.length - 1);
};
