// src/components/list.jsx
import React from 'react';

function NoteList({ notes,del }) {
  return (
    <div className='notell'>
      <h2>Note List</h2>
      {notes.map((note) => (
        <div key={note.id} className='note-item'>
          <h3 className='note-h3'><u>{note.text}</u></h3>
          <p>{note.content}</p>
          <button onClick={()=>del(note.id)} className='del-button'>delete</button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
