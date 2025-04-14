
import React, { useState } from 'react';
import img from '../images/img.jpg';
import Notelist from './list';

function NoteL({ addNote }) {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '' && content.trim() !== '') {
      const newNote={ id: Date.now(), text, content }
      setNotes((prevNotes)=>[...prevNotes,newNote]);
    addNote(newNote);
      setText('');
      setContent('');
    } else {
      alert('Enter a topic and content');
    }
  };
  const del = (id) => {

    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className='Todolist'>
      <div className='container'>
        <div className='head'>
          <img src={img} className='img1' alt="logo" />
          <div className='sub'>
            <h2>NOTY</h2>
            <p className='s'>note every moment..</p>
          </div>
        </div>
        <input
          type='text'
          placeholder='Enter topic'
          className='field'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter note'
          className='field'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className='send' onClick={handleSubmit}>
          ADD
        </button>
        
      </div>
     
    </div>
  );
}

export default NoteL;
