import React from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
class EditExercises extends React.Component {
  constructor() {
    super();
    //make sure state has evrey properties you need in the first render
    this.state = {
      exercise: {
        userName: "",
        description: "",
        duration: 0,
        date: new Date(),
        users: [],
      },
    };
  }
  async componentDidMount() {
    const res = await axios.get(
      `http://localhost:5000/exercises/${this.props.match.params.id}`
    );
    const exercise = res.data;
    this.setState({
      exercise: {
        ...exercise,
        date: new Date(exercise.date),
      },
    });
  }
  onSubmit = async (e) => {
    e.preventDefault();
    const exercise = {
      ...this.state.exercise,
    };
    console.log(exercise);
    const res = await axios.post(
      `http://localhost:5000/exercises/update/${this.props.match.params.id}`,
      exercise
    );
    console.log(res.data);
    this.props.history.push("/");
  };
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState((state) => ({
      exercise: {
        ...state.exercise,
        [name]: value,
      },
    }));
  };
  onChangeDate = (date) => {
    this.setState((state) => ({
      exercise: {
        ...state.exercise,
        date: date,
      },
    }));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              required
              placeholder="Description"
              type="text"
              name="description"
              value={this.state.exercise.description}
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
              value={this.state.exercise.duration}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Date: </label>
            <DatePicker
              selected={this.state.exercise.date}
              onChange={this.onChangeDate}
            ></DatePicker>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default EditExercises;
