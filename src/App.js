import React, { useState } from "react";
import "./styles.css";
import AutocompleteTextField from "./components/AutocompleteTextField";
import { Button, FormControl, FormLabel } from "@mui/material";

export default function App() {
  const [textFieldData, setTextFieldData] = useState("");

  const options = {
    "@": ["CVV", "CARD", "PII"],
    "({{": ["CLASSIFIER", "CLASSIFIER2"]
  };
  const trigger = ["({{", "@"];

  const handleSubmit = () => {
    console.log(textFieldData);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <FormControl variant="standard">
        <FormLabel component="legend"> AutoComplete</FormLabel>
        <AutocompleteTextField
          trigger={trigger}
          options={options}
          spacer={""}
          onChange={setTextFieldData}
          value={textFieldData}
          width={200}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </FormControl>
    </div>
  );
}
