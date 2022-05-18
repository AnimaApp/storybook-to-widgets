import * as MuiIconsMaterial from "@mui/icons-material";

export const options = ["None", ...Object.keys(MuiIconsMaterial)];
export const iconTransform =
  "<% if (param !== 'None') { %><MuiIconsMaterial.<%= param %> /><% } else { %> '' <% } %>";

export const iconTransformSnakeCase =
  "<% if (param !== 'None') { %>'<%= param.split(/(?=[A-Z])/).join('_').toLowerCase()%>'<% } else { %> '' <% } %>";
