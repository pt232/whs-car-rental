export const get = async (endpoint) => {
  const baseUrl = "https://whs-car-rental.herokuapp.com";
  const url =
    endpoint.charAt(0) === "/" ? baseUrl + endpoint : "/" + baseUrl + endpoint;

  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const post = async (endpoint, body) => {
  const baseUrl = "https://whs-car-rental.herokuapp.com";
  const url =
    endpoint.charAt(0) === "/" ? baseUrl + endpoint : "/" + baseUrl + endpoint;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const patch = async (endpoint, body) => {
  const baseUrl = "https://whs-car-rental.herokuapp.com";
  const url =
    endpoint.charAt(0) === "/" ? baseUrl + endpoint : "/" + baseUrl + endpoint;

  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (error) {
    throw new Error(error);
  }
};
