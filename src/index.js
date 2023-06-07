import {
  ChakraProvider,
  extendTheme,
  createMultiStyleConfigHelpers,
} from "@chakra-ui/react";
import { menuAnatomy } from "@chakra-ui/anatomy";
import React from "react";
import ReactDOM from "react-dom/client";
import chakraTheme from "@chakra-ui/theme";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  list: {
    // this will style the MenuList component
    bg: "#e0c56e",
    borderColor: "#483a23",
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    bg: "#e0c56e",
    color: "#483a23",
  },
  divider: {
    borderColor: "#483a23",
  },
});

const menuTheme = defineMultiStyleConfig({ baseStyle });

const theme = extendTheme({
  ...chakraTheme,
  components: {
    Menu: menuTheme,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
