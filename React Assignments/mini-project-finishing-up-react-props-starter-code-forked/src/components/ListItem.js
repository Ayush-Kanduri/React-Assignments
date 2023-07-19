import React from "react";

// Use props to add styles, link and images so that it looks like the reference image.

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    const { data } = props;
    this.data = data;
  }

  render() {
    return (
      <div className="ListItem" style={{ backgroundColor: this.data.bgColor }}>
        <img src={this.data.icon} alt={this.data.name} />
        <a href={this.data.link}>{this.data.name}</a>
      </div>
    );
  }
}

export default ListItem;
