import { useEffect, useState } from 'react';
import db from "../appwrite/databases.js"
import NoteForm from '../components/NoteForm.jsx';
import { Query } from 'appwrite';
import Note from "../components/Note.jsx"

const Notes = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const response = await db.tasks.list(
      [Query.orderDesc('$createdAt')]
    )

    setNotes(response.documents);
  };

  return (
    <>
      <div>
        <h1>✍️ My Todo List</h1>
      </div>

      <NoteForm setNotes={setNotes} />
      
      <div>
        {notes.map((note) => (
          <Note key={note.$id} noteData={note} setNotes={setNotes} />
        ))}
      </div>
    </>
  );
};

export default Notes;
