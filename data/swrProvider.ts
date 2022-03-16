export const prov = "Just leaving this here for now";
// import { SWRConfiguration } from "swr";
// import { NETWORK_ERROR_MSG } from "../assets/constants";

// declare global {
//   interface Error {
//     status: number;
//     info: any;
//   }
// }

// const fetcher = async (input: RequestInfo, init?: RequestInit | undefined) => {
//   const response = await fetch(input, init);

//   if (!response.ok) {
//     const error = new Error(NETWORK_ERROR_MSG);

//     error.status = response.status;
//     error.info = await response.json();

//     throw error;
//   }

//   const data = await response.json();
//   return data;
// };

// export const SWROptions: SWRConfiguration = {
//   refreshInterval: 3000, // refresh every 3 seconds
//   fetcher,
//   onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
//     if (retryCount >= 10) return;
//     setTimeout(() => revalidate({ retryCount }), 5000);
//   },
//   onError: (error, key) => {
//     if (error.status !== 403 && error.status !== 404) {
//       // Show a UI notification && send the error to sentry
//       console.log(error);
//     }
//   },
// };
