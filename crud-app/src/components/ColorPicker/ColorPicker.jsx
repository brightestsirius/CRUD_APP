import React, {useContext} from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import TableColorPicker from "../../contexts/TableColorPicker";

export default function ColorPicker() {
  const {color} = useContext(TableColorPicker);

  return (
    <Box sx={{ my: 4, p: 2 }} component={Paper}>
      <Typography variant="h6" gutterBottom>
        Color Picker
      </Typography>
      <input type="color" defaultValue={color} />
    </Box>
  );
}
