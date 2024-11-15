import {useEffect, useState} from 'react'
import { databases } from '../appwrite/config'

const Notes = () => {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    init()
  }, [])

  const init = async() => {
    const response = await databases.listDocuments(import.meta.env.DATABASE_ID, import.meta.env.COLLECTION_TASKS_ID)
    setNotes(response.documents)
  }
  return (
    <div>
      <div>
        {
        notes.map(note => 
          <div key={note.$id}>
            {note.body}
          </div>)
        }
      </div>
    </div>
  )
}

export default Notes