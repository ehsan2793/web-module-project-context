import React, { useContext } from 'react';
import { ProductContext } from '../contexts/productContext';

// Components
import Product from './Product';

const Products = props => {
	const value = useContext(ProductContext)
	console.log(value);
	return (
		<div className="products-container">
			{props.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
