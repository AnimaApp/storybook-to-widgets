import * as MuiIconsMaterial from "@mui/icons-material";

export const options = ["None", ...Object.keys(MuiIconsMaterial)];
export const iconTransform =
  "<% if (param !== 'None') { %><MuiIconsMaterial.<%= param %> /><% } else { %> '' <% } %>";
