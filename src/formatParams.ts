/**
 *
 * @param url Our URL to append parameters to
 * @param params Our object of key value pairs to append as query params - we need some custom logic to in essense "flatten" this
 * if there are array values as URLSearchParams doesn't properly parse array values in objects
 * @returns Ready to go URL
 */

export const createUrlWithParams = (url: string, params: Record<string, any>) => {
  let arr: string[][] = [];
  const parametersArray = Object.entries(params);
  for (let [key, val] of parametersArray) {
    if (!Array.isArray(val)) {
      arr.push([key, val]);
    } else {
      const mapped = val.map((v) => [key, v]);
      arr = [...arr, ...mapped];
    }
  }
  const queryParams = new URLSearchParams(arr);
  return url + queryParams;
};
