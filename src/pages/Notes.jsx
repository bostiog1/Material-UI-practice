import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {  // Added "/" before id
      method: "DELETE",
    });
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  // Masonry breakpoints for responsive layout
  const breakpoints = {
    default: 3,  // 3 columns on large screens
    1200: 2,     // 2 columns on medium screens
    800: 1,      // 1 column on small screens
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
