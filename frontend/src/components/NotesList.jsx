import React, { Component } from "react";
import axios from "axios";

export default class NotesList extends Component {
  state = {
    notes: [],
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:5000/api/notes");
    this.setState({ notes: res.data.notes });
  }

  //

  render() {
    return (
      <div className="row">
        {this.state.notes.map((note) => (
          <div className="col-md-4 p-2" key={note._id}>
            <div className="card">
              <div className="card-body">
                <p>{note.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
