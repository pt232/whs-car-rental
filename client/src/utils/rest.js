export const get = async (endpoint) => {
  const baseUrl = "http://localhost:5000";
  const url =
    endpoint.charAt(0) === "/" ? baseUrl + endpoint : "/" + baseUrl + endpoint;

  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    return error;
  }
};
