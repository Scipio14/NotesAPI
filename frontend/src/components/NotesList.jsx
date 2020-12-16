import React, { Component } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

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
              <div className="card-header  d-flex justify-content-between">
                <h4>{note.title}</h4>
                <Link className="btn btn-secondary" to={"/edit/" + note._id}>
                  Edit <i class="fas fa-edit"></i>
                </Link>
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
                  DELETE <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
