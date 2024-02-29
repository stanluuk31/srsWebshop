/**
 * @param {string} method
 * @param {RequestInfo | URL} url
 * @param {any} body
 */

export async function api(method, url, body) {
    let response;
  if(method === "GET" || method === "HEAD"){
    response = await fetch(url);
  }
  else{
    response = await fetch(url, 
      {
        method: method, 
        body:body,
        headers: 
          {
            "Content-Type" : "application/json"
          }
      });
  }
  return await response.json();
}