import React from "react";
import axios from "axios";
class CreateUser extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
    };
  }
  onChange = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: this.state.userName,
    };
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>User Name: </label>
            <input
              type="text"
              required
              minLength={3}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default CreateUser;
