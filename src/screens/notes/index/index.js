import React, { Fragment, useState } from 'react';
import HeaderLogged from "../../../components/header_logged";
import { Column } from "rbx";
import "../../../styles/notes.scss";
import Notes from "../../../components/notes";

const NotesScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <Fragment>
      <HeaderLogged setIsOpen={setIsOpen} isOpen={isOpen}/>
      <Notes setIsOpen={setIsOpen} isOpen={isOpen}/>
  </Fragment>
  )
  
}

export default NotesScreen;