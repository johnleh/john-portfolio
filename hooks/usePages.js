import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function usePages () {
    const { data, error, isLoading } = useSWR('/api/get_static_json/pages', fetcher);

    return {
        data: data,
        isLoading: isLoading,
        isError: error
    }
}
  