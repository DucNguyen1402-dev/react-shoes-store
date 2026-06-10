import React, { Component } from "react";
import { products } from "../../data/dataJson";
import ProductList from "./ProductList";
import Modal from "./Modal";

export default class ShoesStore extends Component {
  // Initialize state to store the detailed information of the selected product
  // Default to the first product in the list
  state = {
    productDetail: products[0],
  };

  // Handler to update productDetail state when user clicks on a product
  setStateModal = (newProduct) => {
    this.setState({
      productDetail: newProduct,
    });
  };

  render() {
    return (
      <div className="container mx-auto max-w-7xl px-4 py-10 text-neutral-800">
        {/* Main layout grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Left Sidebar Menu */}
          <div className="md:col-span-1 mt-80">
            <div className="flex flex-col border border-neutral-200 rounded-sm overflow-hidden">
              <button className="bg-neutral-900 px-4 py-3 text-left text-sm font-medium text-white transition-colors">
                Home
              </button>
              <button className="bg-white px-4 py-3 text-left text-sm text-neutral-600 transition-colors hover:bg-neutral-50">
                Shop
              </button>
            </div>
          </div>

          {/* Right Content Area: Product List */}
          <div className="md:col-span-3">
            <h1 className="mb-12 text-center text-4xl  tracking-wide uppercase font-bold">
              Shoes Shop
            </h1>
            <ProductList
              productsData={products}
              setStateModal={this.setStateModal}
            />
          </div>
        </div>

        {/* Modal component to display product details */}
        <Modal content={this.state.productDetail} />
      </div>
    );
  }
}
