function xx() {
  export async function fetcher(url) {
    const rsp = await fetch(url);
    return await rsp.json();
  }

  export async function fetcher1(url) {
    const rsp = await fetch(url);
    if (rsp.ok) {
      return await rsp.json();
    } else {
      const MyError = function (message, status) {
        this.message = `${message} from url ${url} status code:${status}`;
        this.status = status;
      };
    }
  }
}
