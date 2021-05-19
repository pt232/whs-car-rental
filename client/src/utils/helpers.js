export const containerSizeAtLocation = (location) => {
  const { pathname } = location;
  return pathname === "/" ? "container--large" : "container--small";
};
