import React from "react";
import Homepage from "./Pages/Homepage";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";

import Theme from "./components/Colors";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
