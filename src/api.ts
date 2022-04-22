const CONFIG = require("./config");

class AnimaAPI {
  #host = `${CONFIG.hostUrl}`;
  #headers = {
    "Content-Type": "application/json",
    "X-API-Token": process.env.STORYBOOK_X_API_TOKEN,
  };

  POST = async (path: string, body: any) => {
    const reqObj = {
      method: "POST",
      headers: this.#headers,
      body: JSON.stringify(body),
    };

    const url = `${this.#host}${path}`;
    console.log(`calling ${url} with:`, reqObj);

    const response = await fetch(url, reqObj);
    if (response.status == 200) {
      const json = await response.json();
      return json;
    } else {
      console.error(`ERROR ${url} > `, response);

      try {
        console.error(await response.json());
      } catch {
        console.error(await response.text());
      }

      return "error";
    }
  };

  GET = async (url: string, params?: { [key: string]: string }) => {};
}

export default new AnimaAPI();
