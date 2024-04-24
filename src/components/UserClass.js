import React from "react"; //or import {Component} from "react"; class User extends Component{}

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
    console.log("1 Constructor will be called when class is instantiated");
  }

  async componentDidMount() {
    //console.log("3 Component will be called once the component is mounted");
    const data = {
      name: "Nidhika",
      Location: "Pune",
    };

    this.setState({
      userInfo: data,
    });
  }

  render() {
    console.log("2 Render method will be called ");
    const { name, location } = this.state.userInfo;
    const count1 = 0;
    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({ count1: count1 + 1 });
          }}
        >
          Count1: {count1}
        </button>
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default User;
