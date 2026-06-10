import React, { Component } from 'react';

export default class ProductItem extends Component {
  render() {
    // Destructure item data and the state handler from props
    const { item, setStateModal } = this.props;
    const { name, price, image } = item;

    return (
      <div className="flex flex-col justify-between border border-neutral-200 rounded-sm bg-white p-4 transition-shadow hover:shadow-md">
        {/* Product Image */}
        <div className="mt-8 mb-12  w-full overflow-hidden bg-neutral-50 flex items-center justify-center">
          <img 
            src={image} 
            alt={name} 
            className="h-full w-full object-contain object-center transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col grow gap-2">
          <h3 className="mb-1 font-medium text-slate-900 line-clamp-1">
            {name}
          </h3>
          <p className="mb-4 text-xs font-semibold text-white px-2 py-1 bg-rose-500 rounded-md self-start *:">
            {price} $
          </p>

          {/* Action Button */}
          <button
            onClick={() => setStateModal(item)}
            className="mt-auto flex items-center justify-center gap-2 bg-blue-500 px-4 py-2.5 text-xs font-medium text-white uppercase tracking-wider transition-colors hover:bg-blue-600 active:bg-blue-700 cursor-pointer duration-300 rounded-sm shadow-md"
          >
            Add to carts
            <span className="fa-solid fa-cart-shopping"></span>

          </button>
        </div>
      </div>
    );
  }
}