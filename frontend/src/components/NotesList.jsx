import React, { Component } from "react";
import axios from "axios";

export default class NotesList extends Component {
  state = {
    notes: [],
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:5000/api/notes");
    this.setState({ notes: res.data });
    console.log(this.state.notes);
  }

  //

  render() {
    return (
      <div className="row">
        {
          //
        }
      </div>
    );
  }
}
