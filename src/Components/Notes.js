import React,{useContext} from 'react'
import noteContext from '../Context/notes/noteContext';
import NodeItem from './NodeItem';
export default function Notes() {
     const context = useContext(noteContext);
     const { notes, setNotes } = context;
  return (
    <div className='container'>
      <h1>Your Notes</h1>
      {notes.map((note) => {
          return <NodeItem note={note} />;
      })}
    </div>
  );
}
