import { useEffect, useRef, useState } from "react"
import './styles.css'

interface IReviewInfo {
    rating: number | string,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}

interface IMetaInfo {
    "createdAt": string,
    "updatedAt": string,
    "barcode": string | number,
    "qrCode": string
}

interface IProduct {
    "id": number | string,
    "title": string,
    "description": string,
    "category": string,
    "price": number | string,
    "discountPercentage": number | string,
    "rating": number | string,
    "stock": number | string,
    "tags": string[

    ],
    "brand": string,
    "sku": string,
    "weight": number | string,
    "dimensions": {
        "width": number | string,
        "height": number | string,
        "depth": number | string
    },
    "warrantyInformation": string,
    "shippingInformation": string,
    "availabilityStatus": string,
    "reviews": IReviewInfo[

    ],
    "returnPolicy": string,
    "minimumOrderQuantity": number | string,
    "meta": IMetaInfo,
    "images": string[

    ],
    "thumbnail": string
}

export const LoadMore = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [products, setProducts] = useState<IProduct[]>([])
    const [count, setCount] = useState<number>(0)
    const [errorMsg, setErrorMsg] = useState<string | null>(null)
    const initialized = useRef(false) // Dev purposes only, strict mode render twice thing

    console.log('hi');


    const fetchProducts = async () => {
        setLoading(() => true);
        try {
            // throw Error()
            const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${ count === 0 ? 0 : count * 20 }`);
            const data = await res.json();

            console.log('ress: ', data);


            if (data?.products?.length) setProducts((prev) => [...prev, ...data.products]);
        } catch (error: unknown) {
            if (error instanceof Error) setErrorMsg(() => error?.message);
        }

        setLoading(() => false);
    }

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true
        } else {
            fetchProducts()
        }
    }, [count])

    if (loading) return <div>Loading!!!!!</div>;

    if (errorMsg) return <div>:O AN ERROR: {errorMsg}</div>

    return (
        <div className="container">
            <div className="product-container">
                {products?.length ?
                    products.map(product => <div key={product.sku} className="product">
                        <h3>{product.title}</h3>
                        <img alt={product.description} src={product.thumbnail} />
                        <span className='product-info'>
                            <p>{product.description}</p>
                            <h3>{product.price}</h3>
                        </span>

                    </div>) : null

                }
            </div>
            <button onClick={() => setCount((prev) => prev + 1)
            } disabled={products.length >= 100}>Load More</button>
        </div>
    )
}