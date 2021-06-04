export const containerSizeAtLocation = (location) => {
  const { pathname } = location;
  return pathname === "/" ? "container--large" : "container--small";
};

export const blobToImageSrc = (blob) => {
  let binary = new Uint8Array(blob);
  return URL.createObjectURL(new Blob([binary]));
};
