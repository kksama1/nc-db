import useSWR from "swr";
import { ENDPOINT } from "../constants/api";

const fetcher = (url: string) =>
  fetch(`${ENDPOINT}/${url}`).then((r) => r.json());

const useApi = <T>(url: string) => {
  const { data, mutate } = useSWR<T>(url, fetcher);

  return { data, mutate };
};

export default useApi;
