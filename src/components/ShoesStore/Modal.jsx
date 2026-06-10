import React, { Component } from 'react';

export default class Modal extends Component {
  state = {
    isOpen: false
  };

  // Lifecycle to automatically open the modal when a new product is selected
  componentDidUpdate(prevProps) {
    if (prevProps.content !== this.props.content) {
      this.setState({ isOpen: true });
    }
  }

  render() {
    // Destructure content data passed from ShoesStore component
    const { content } = this.props;
    const { isOpen } = this.state;

    // Return null if the modal is closed or content is unavailable
    if (!isOpen || !content) return null;

    const { name, price, image, description, quantity } = content;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
        {/* Modal Box */}
        <div className="relative w-full max-w-2xl rounded-sm bg-white p-6 shadow-xl transition-all md:p-8 animate-in fade-in zoom-in-95 duration-200">
          
          {/* Close Button */}
          <button
            onClick={() => this.setState({ isOpen: false })}
            className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Content Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Left: Product Image */}
            <div className="flex items-center justify-center bg-neutral-50 rounded-sm p-4 mt-8 mb-12 scale-110">
              <img 
                src={image} 
                alt={name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Right: Product Details */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-medium text-neutral-900 mb-2">{name}</h2>
                <p className="text-lg font-semibold text-neutral-700 mb-4">{price} $</p>
                <div className="border-t border-neutral-100 my-4"></div>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4">{description}</p>
              </div>

              <div className="text-xs text-neutral-400 font-medium">
                Available Stock: <span className="text-neutral-600 font-semibold">{quantity}</span> pcs
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}