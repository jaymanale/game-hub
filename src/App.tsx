import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ColorModeSwitch from "./components/ColorModeSwitch";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main" `,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">aside</GridItem>
      </Show>
      <GridItem area="main">Main</GridItem>
    </Grid>
  );
};

export default App;