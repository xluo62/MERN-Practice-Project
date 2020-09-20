import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
class CreateExercise extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }
  componentDidMount() {
    //Documents are stored in the array
    axios.get("http://localhost:5000/users/").then((res) => {
      if (res.data.length > 0) {
        this.setState({
          users: res.data.map((user) => user.username),
          userName: res.data[0].username,
        });
      }

      console.log(res.data);
    });
  }
  onChange = (e) => {
    const { name, value } = e.target;
    console.log(name + " " + value);
    this.setState({
      [name]: value,
    });
  };
  onChangeDate = (date) => {
    this.setState({
      date: date,
    });
  };
  onSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    const exercise = {
      username: this.state.userName,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data));
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <select
              required
              className="form-group"
              name="userName"
              onChange={this.onChange}
              value={this.state.usreName}
            >
              {this.state.users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              required
              placeholder="Description"
              type="text"
              name="description"
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Duration: </label>
            <input
              required
              placeholder="Duration"
              type="text"
              name="duration"
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Date: </label>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            ></DatePicker>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default CreateExercise;
