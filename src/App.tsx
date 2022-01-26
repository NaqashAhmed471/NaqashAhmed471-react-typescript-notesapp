import React, { useState } from "react";
import { Note } from "./models/note.model";

import Header from "./components/header/Header";
import NotesList from "./components/notes-list/NotesList";
import CreateNotes from "./components/create-notes/CreateNotes";

import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "Schedule meeting with UI/UX team",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
