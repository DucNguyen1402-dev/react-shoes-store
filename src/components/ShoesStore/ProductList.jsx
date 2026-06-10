import React, { Component } from 'react';
import ProductItem from './ProductItem';


export default class ProductList extends Component {
  render() {
    // Destructure props passed from ShoesStore component
    const { productsData, setStateModal } = this.props;

    return (
      // Grid container to arrange product items cleanly
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productsData.map((product) => {
          return (
            <ProductItem
              key={product.id}
              item={product}
              setStateModal={setStateModal}
            />
          );
        })}
      </div>
    );
  }
}