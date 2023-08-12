import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const RenderInput = (props) => {
  const displayItems = () => {
    switch (props.type) {
      case "dropDown":
        return (
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">{props.inputLable}</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={props.value}
              label={props.label}
              onChange={props.handleChange}
            >
              {props.dropDownData?.map((d) => (
                <MenuItem key={d.id} value={d.id}>
                  {d.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );

      default:
        return null;
    }
  };
  return <div>{displayItems()}</div>;
};

export default RenderInput;
