import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/navBar.component";
import ExercisesList from "./components/exercisesList.component";
import EditExercise from "./components/editExercise.component";
import CreateExercise from "./components/createExercise.component";
import CreateUser from "./components/createUser.component";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </BrowserRouter>
  );
}

export default App;
