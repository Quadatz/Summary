import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import {v4} from "uuid";
import RepoCard from "../repo-card/repo-card";
import { config } from "react-spring";

class RepoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goToSlide: ""
    };
  }
  slides = [
    {
      key: v4(),
      content: <RepoCard name={"Uber"} subtitle={"Сентябрь 2021"}/>
    },
    {
      key: v4(),
      content: <RepoCard name={"Pulse"} codeLink={"https://github.com/Quadatz/Pulse"} subtitle={"Ноябрь 2021"}/>
    },
    {
      key: v4(),
      content: <RepoCard name={"Portfolio"} codeLink={"https://github.com/Quadatz/Portfolio"} subtitle={"Ноябрь 2021"}/>
    },
    {
      key: v4(),
      content: <RepoCard name={"Food"} codeLink={"https://github.com/Quadatz/Food"} subtitle={"Январь 2022"}/>
    },
    {
      key: v4(),
      content: <RepoCard name={"React"} codeLink={"https://github.com/Quadatz/React"} subtitle={"Февраль 2022"}/>
    },
    {
      key: v4(),
      content: <RepoCard name={"React Images"} codeLink={"https://github.com/Quadatz/test-task-react"} subtitle={"Сентябрь 2022"}/>
    },
    {
      key: v4(),
      content: <RepoCard name={"React-Redux Github"} codeLink={"https://github.com/Quadatz/react-redux-tailwind.ts"} subtitle={"Август 2021"}/>
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
export default RepoList;