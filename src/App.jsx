import React, { Component } from 'react';
import ShoesStore from './components/ShoesStore/ShoesStore';

export default class App extends Component {
  render() {
    return (
      <div className="min-h-screen bg-neutral-50">
        <ShoesStore />
      </div>
    );
  }
}