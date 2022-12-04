export default function fetchProducts(search: string) : Promise<Product[]> {
    // This search method will look for an exact match of the string across several fields in the products
    const terms = search.split(' ').filter(term => term.length > 0)
    const query = terms.map(term => `term=${term}`).join('&')
    return fetch(`/api/products?${query}`).then(res => res.json())
}
