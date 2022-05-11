const CONFIG = require("./config");

class AnimaAPI {
  host = `${CONFIG.hostUrl}`;
  defaultHeaders = {
    "Content-Type": "application/json",
    "X-API-Token": process.env.STORYBOOK_X_API_TOKEN,
  };

  constructor() {}

  POST = async (path: string, body: any) => {
    const reqObj = {
      method: "POST",
      headers: this.defaultHeaders,
      body: JSON.stringify(body),
    };

    const url = `${this.host}${path}`;
    console.log(`calling ${url} with:`,reqObj,)
    let response = await fetch(url, reqObj);
    if (response.status == 200) {
      let json = await response.json();
      return json;
    } else {
      console.log(`ERROR ${url} > `, response);
      let json = await response.json();
      if (json.error) {
        console.error("error in api");
        return "error";
      } else {
        console.error("error in api");
        return "error";
      }
    }
  };

  GET = async (url: string, params?: { [key: string]: string }) => {};
}

export default new AnimaAPI();
