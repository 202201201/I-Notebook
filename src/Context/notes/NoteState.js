import React, { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = ( props ) => {
    // const st = {
    //     "name": "Harry",
    //     "class":"5b"
    // }
    // const [ state, setState ] = useState( st );
    // const update = () => {
    //     setTimeout(() => {
    //         setState( {
    //             "name": "Zeel",
    //             "class":"A1"
    //         })
    //     }, 1000);
    // }
    const notesInitial = [
      {
        _id: "12345",
        user: "faksjfhkajsd",
        title: "My title",
        description: "Please wake up early",
        tag: "personal",
        date: "2021-09-03T14:20:09.509Z",
        __v: 0,
      },
      {
        _id: "56789",
        user: "qiowrqwiury",
        title: "My title",
        description: "Please wake up early",
        tag: "personal",
        date: "2021-09-03T14:20:09.668Z",
        __v: 0,
      },
      {
        _id: "12345",
        user: "faksjfhkajsd",
        title: "My title",
        description: "Please wake up early",
        tag: "personal",
        date: "2021-09-03T14:20:09.509Z",
        __v: 0,
      },
      {
        _id: "56789",
        user: "qiowrqwiury",
        title: "My title",
        description: "Please wake up early",
        tag: "personal",
        date: "2021-09-03T14:20:09.668Z",
        __v: 0,
      },
      {
        _id: "12345",
        user: "faksjfhkajsd",
        title: "My title",
        description: "Please wake up early",
        tag: "personal",
        date: "2021-09-03T14:20:09.509Z",
        __v: 0,
      },
      {
        _id: "56789",
        user: "qiowrqwiury",
        title: "My title",
        description: "Please wake up early",
        tag: "personal",
        date: "2021-09-03T14:20:09.668Z",
        __v: 0,
      }
    ];
    const [ notes, setNotes ] = useState( notesInitial );
    return (
        // <NoteContext.Provider value={{state,update}}>
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;