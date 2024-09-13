// Design a SPA where you can browse through different types of wines.

/*

I've decided to utilize the SingleTon Pattern


*/

export class Client {
  constructor(defaultHeaders = {}, baseUrl) {
    (this.defaultHeaders = defaultHeaders), (this.baseUrl = baseUrl);
  }

  _getUrl(endpointUrl, params = {}) {
    const url = new URL(endpointUrl, this.baseUrl);
    return url;
  }

  setHeaders(headers) {
    this.defaultHeaders = { ...this.defaultHeaders, headers };
  }

  async _parseResponse(response) {
    const contentType = response.headers.get("content-type");

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error: ${response.status} ${errorMessage}`);
    }

    if (contentType.includes("application/json")) {
      return await response.json();
    }
  }

  async get(endpoint, params, timeout) {
    const url = this.getUrl(endpoint, params);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const requestOptions = {
      method: "GET",
      headers: { ...this.defaultHeaders },
      signal: controller.signal,
    };

    try {
      await fetch(this.baseUrl, requestOptions);
      clearTimeout(timeoutId);
      return await this._parseResponse(response);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
