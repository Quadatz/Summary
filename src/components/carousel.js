import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import {v4} from "uuid";
import TniCard from "./card";
import { config } from "react-spring";
class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goToSlide: ""
    };
  }
  slides = [
    {
      key: v4(),
      content: <TniCard />
    },
    {
      key: v4(),
      content: <TniCard />
    },
    {
      key: v4(),
      content: <TniCard />
    },
    {
      key: v4(),
      content: <TniCard />
    },
    {
      key: v4(),
      content: <TniCard />
    },
    {
      key: v4(),
      content: <TniCard />
    },
    {
      key: v4(),
      content: <TniCard />
    },
    {
      key: v4(),
      content: <TniCard />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  render() {
    return (
      <div style={{ width: "40%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius="10"
          animationConfig={config.gentle}
        />
      </div>
    );
  }
}
export default MyCarousel;