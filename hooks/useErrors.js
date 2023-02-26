import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useErrors () {
    const { data, isLoading, error } = useSWR('/api/get_static_json/errors', fetcher);
    return {
        data: data,
        isLoading: isLoading,
        error,
    }
}
  