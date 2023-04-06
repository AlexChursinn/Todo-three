import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Notes = ({ notes, onRemove }) => {
  return (
    <TransitionGroup component="ul" className="list-group">
      {notes.map((note) => (
        /* in будет добавляться через TransitionGroup */
        <CSSTransition key={note.id} classNames={'note'} timeout={800}>
          <li className="list-group-item note">
            <div>
              <strong>{note.title}</strong>
              <small>{note.date}</small>
            </div>

            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              onClick={() => onRemove(note.id)}
            >
              &times;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default Notes;
