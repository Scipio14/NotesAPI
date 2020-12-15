import React, { Component } from "react";
import axios from "axios";
import { format } from "timeago.js";

export default class NotesList extends Component {
  state = {
    notes: [],
  };

  async componentDidMount() {
    //const res = await axios.get("http://localhost:5000/api/notes");
    //notes es en ralidad res.data.notes
    //checar siempre la respuesta que nos da axios por la consola
    //this.setState({ notes: res.data.notes });
    this.getNotes();
  }

  async getNotes() {
    const res = await axios.get("http://localhost:5000/api/notes");
    //notes es en ralidad res.data.notes
    //checar siempre la respuesta que nos da axios por la consola
    this.setState({ notes: res.data.notes });
  }

  //
  deleteNote = async (id) => {
    await axios.delete("http://localhost:5000/api/notes/" + id);
    this.getNotes();
  };

  render() {
    return (
      <div className="row">
        {this.state.notes.map((note) => (
          <div className="col-md-4 p-2" key={note._id}>
            <div className="card">
              <div className="card-header">
                <h4>{note.title}</h4>
              </div>
              <div className="card-body">
                <p>{note.content}</p>
                <p>{note.author}</p>
                <p>{format(note.date)}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => this.deleteNote(note._id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
