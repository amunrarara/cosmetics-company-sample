import useSWR from 'swr'

// @ts-ignore-line
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useProducts(searchTerms: string[]) {
  const { data, error } = useSWR('/api/products', fetcher)

    return {
      products: data,
      isLoading: !error && !data,
      isError: error
    }
}
