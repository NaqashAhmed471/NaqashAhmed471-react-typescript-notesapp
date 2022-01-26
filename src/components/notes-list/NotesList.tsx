import * as React from "react";
import { Note } from "../../models/note.model";
import Notes from "../notes/Notes";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FunctionComponent<INotesListProps> = ({
  notes,
  setNotes,
}) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <>
      <h2 className="mt-3">Notes</h2>
      <div>
        {notes.map((note) => (
          <Notes key={note.id} note={note} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

export default NotesList;
