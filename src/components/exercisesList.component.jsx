import React from 'react';

import axios from 'axios';
import Exercise from './exercise.component';
import Pagination from './pagination.component';
import PrograssBar from './prograssBar.component';
import Slider from './slider.component';
class ExercisesList extends React.Component {
  constructor() {
    super();
    this.state = {
      exercises: [],
      postsPerPage: 4,
      currentPage: 1,
      loading: true,
      atPercent: 0,
    };
  }
  async componentDidMount() {
    console.log('called');
    this.reSetPrograssBar();
    try {
      const res = await axios.get('http://localhost:5000/exercises');
      const exercises = res.data;
      console.log(exercises);
      this.setState({
        exercises,
      });
    } catch (err) {
      console.log(err);
    }
  }
  reSetPrograssBar() {
    const interval = setInterval(() => {
      if (this.state.atPercent === 99) {
        this.setState({
          loading: false,
        });
        console.log('hihihi');
        clearInterval(interval);
      }
      this.setState((state) => ({
        atPercent: state.atPercent + 1,
      }));
    }, 2000 / 100);
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
  onClickPage = (el) => {
    this.setState({
      currentPage: el,
      loading: true,
      atPercent: 0,
    });
    this.reSetPrograssBar();
  };
  render() {
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.exercises.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    return (
      <div className="m-2">
        <h3>Logged Exercise</h3>
        <Slider></Slider>
        // conditional rendering
        {this.state.loading ? (
          <PrograssBar atPercent={this.state.atPercent}></PrograssBar>
        ) : (
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
              {currentPosts.map((el) => (
                <Exercise
                  key={el._id}
                  exercise={el}
                  onDelete={this.onDelete}
                ></Exercise>
              ))}
            </tbody>
          </table>
        )}
        <Pagination
          onClickPage={this.onClickPage}
          postsPerPage={this.state.postsPerPage}
          posts={this.state.exercises}
          currentPage={this.state.currentPage}
        ></Pagination>
      </div>
    );
  }
}
export default ExercisesList;
