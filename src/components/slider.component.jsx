import React, { Component } from 'react';
import Card from './card.component';
import data from '../data/data.js';
import './slider.css';
export default class Slider extends Component {
  constructor() {
    super();
    this.state = {
      properties: data.properties,
      property: data.properties[0],
      index: 0,
    };
  }
  onPrev = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: this.state.properties[newIndex],
      index: newIndex,
    });
  };
  onNext = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: this.state.properties[newIndex],
      index: newIndex,
    });
  };
  render() {
    const { properties, property } = this.state;
    return (
      <div>
        <button onClick={this.onPrev} disabled={property.index === 0}>
          Prev
        </button>
        <button
          onClick={this.onNext}
          disabled={property.index === data.properties.length - 1}
        >
          Next
        </button>
        <div className={`cards-slider`}>
          <div
            className="cards-slider-wrapper"
            style={{
              transform: `translateX(-${
                property.index * (100 / properties.length)
              }%)`,
            }}
          >
            {properties.map((property) => (
              <Card
                key={property._id}
                property={property}
                currIndex={this.state.index}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
