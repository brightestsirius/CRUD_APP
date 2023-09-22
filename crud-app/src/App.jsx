import React from "react";

import Container from '@mui/material/Container';

import Table from "./components/Table/Table";
import ColorPicker from './components/ColorPicker/ColorPicker'

import TableColorPicker from './contexts/TableColorPicker'

export default function App() {
  return ( 
    <Container>
      <TableColorPicker.Provider value={ {color: `#ff0000`} }>
        <ColorPicker />
        <Table listName="todos" />
      </TableColorPicker.Provider>
    </Container>
  );
}
