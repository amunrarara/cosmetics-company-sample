import { NextApiRequest, NextApiResponse } from "next";
import { products } from '@/lib/mock/data'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const query: string | string[] | undefined = req.query.term
    if (!query || query.length === 0) return res.status(200).json(products)
    let lowerCaseQuery = (typeof query === 'string') ? query.toLowerCase() : ''.concat(query.join(' ')).toLowerCase();
    const filteredProducts = products.filter(product => {
        if (
            product.name.toLowerCase().includes(lowerCaseQuery)
            || product.about.toLowerCase().includes(lowerCaseQuery)
            || product.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
        ) {
            console.log('Returning a match to: ', lowerCaseQuery)
            return product
        }
        return null
    })
    return res.status(200).json(filteredProducts)
  }
