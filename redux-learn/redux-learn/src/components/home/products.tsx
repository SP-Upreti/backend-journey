
import { fetchProducts, type Product } from '@/redux/slice/productSlice';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../shared/product-card';

export default function Products() {
    const dispatch = useDispatch();
    const {products} = useSelector((state: any) => state.products as {products: Product[]});
    useEffect(() => {
        dispatch(fetchProducts() as any);
    }, []);
    return (
        <div className='max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-4 gap-2'>
            {products?.map((product: Product) => <ProductCard product={product} />)}
        </div>
    )
}
