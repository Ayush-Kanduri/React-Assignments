import React from "react";
import ListItem from "./ListItem";
import github from "../assets/images/github.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";

class List extends React.Component {
  render() {
    const Data = [
      {
        id: 1,
        name: "LinkedIn",
        link: "http://linkedin.com",
        icon: linkedin,
        bgColor: "#ff9580"
      },
      {
        id: 2,
        name: "GitHub",
        link: "https://github.com",
        icon: github,
        bgColor: "#f2faa6"
      },
      {
        id: 3,
        name: "Twitter",
        link: "https://twitter.com/",
        icon: twitter,
        bgColor: "#b8b3e8"
      }
    ];
    // Edit the code given below and pass data as props to listItem and map over data.
    return (
      <div className="List">
        {Data.map((data) => (
          <ListItem key={data.name} data={data} />
        ))}
      </div>
    );
  }
}

export default List;
