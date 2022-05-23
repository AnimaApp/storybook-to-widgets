import * as MuiIconsMaterial from "@mui/icons-material";

export const iconOptions = ["None", ...Object.keys(MuiIconsMaterial)];
export const iconTransform =
  "<% if (param !== 'None') { %><MuiIconsMaterial.<%= param %> /><% } else { %> '' <% } %>";

export const iconTransformSnakeCase =
  "<% if (param !== 'None') { %>'<%= param.split(/(?=[A-Z])/).join('_').toLowerCase()%>'<% } else { %> '' <% } %>";

const keyTransform =
  '<%- `"${(Math.floor(Math.random() * 1000) + 1).toString()}"` %>';
