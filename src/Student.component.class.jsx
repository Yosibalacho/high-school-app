import { Component } from "react";

class Student extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <h1>{this.props.fName}</h1>
        <h1>{this.props.lastName}</h1>
        <h1>{this.props.birthdate.getFullYear()}</h1>
        <img src={this.props.image} alt="" />
      </div>
    );
  }
}
export default Student;
