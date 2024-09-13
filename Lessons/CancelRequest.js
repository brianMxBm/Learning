/*

TASK: Intercept an API call (fetch) and tokenise the data -> if the response is taking longer than a minute - 
cancel the call and return {}
*/

async function fetchWithTimeout(url, timeout) {
  const controller = new AbortController();
  return Promise.race([
    fetch(url, {
      signal: controller.signal,
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({});
        controller.abort();
      }, timeout);
    }),
  ]);
}

fetchWithTimeout("https://api.sampleapis.com/coffee/hot", 5000).then((data) => {
  console.log(data);
});
