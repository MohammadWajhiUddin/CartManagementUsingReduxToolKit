import React from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './ProductList.css';
import { useQuery } from '@tanstack/react-query';
import Navbar from '../Navbar';

const fetchProduct = async () => {
    const apiresponse = await axios.get("https://fakestoreapi.com/products");
    if (apiresponse.status === 200) {
      return apiresponse.data;
    } else {
      throw new Error("Network response was not ok");
    }
  };
const ProductList = () => {

    const {isError,isLoading,data:products} = useQuery({ queryKey: ['product'], queryFn: fetchProduct })
    if(isLoading) return <div><h1>Loading</h1></div>
    if(isError) return <div><h1>Error While fetching data</h1></div>

    // const products = [
    //     {
    //       id: 1,
    //       name: 'Product 1',
    //       description: 'This is the description for Product 1.',
    //       price: 29.99,
    //       image: 'https://via.placeholder.com/150'
    //     },
    //     {
    //       id: 2,
    //       name: 'Product 2',
    //       description: 'This is the description for Product 2.',
    //       price: 39.99,
    //       image: 'https://via.placeholder.com/150'
    //     },
    //     {
    //       id: 3,
    //       name: 'Product 3',
    //       description: 'This is the description for Product 3.',
    //       price: 49.99,
    //       image: 'https://via.placeholder.com/150'
    //     }
    //   ];
  return (
    <>
          <Navbar/>

    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  );
};

export default ProductList;
