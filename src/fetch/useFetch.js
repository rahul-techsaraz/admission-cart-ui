const httpFetch = async (url, header, method, body) => {
  if (method !== 'get') {
    const data = await fetch(url, {
      method: method,
      headers: header,
      body: body ? JSON.stringify(body) : '',
    });
    const fetchData = await data.json();
    return fetchData;
  } else {
    const data = await fetch(url, {
      method: method,
      headers: header,
    });
    const fetchData = await data.json();
    return fetchData;
  }
};
export default httpFetch;
