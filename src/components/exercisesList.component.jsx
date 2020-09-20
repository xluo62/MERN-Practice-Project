import React from "react";

import axios from "axios";
import Exercise from "./exercise.component";

class ExercisesList extends React.Component {
  constructor() {
    super();
    this.state = {
      exercises: [],
      a: 0,
    };
  }
  async componentDidMount() {
    console.log("called");
    try {
      const res = await axios.get("http://localhost:5000/exercises");
      const exercises = res.data;
      console.log(exercises);
      this.setState({
        exercises,
      });
    } catch (err) {
      console.log(err);
    }
  }

  onDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/exercises/${id}`);
      console.log(res.data);
      this.setState((state) => ({
        exercises: state.exercises.filter((el) => el._id !== id),
      }));
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div>
        <h3>Logged Exercise</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.exercises.map((el) => (
              <Exercise
                key={el._id}
                exercise={el}
                onDelete={this.onDelete}
              ></Exercise>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ExercisesList;
