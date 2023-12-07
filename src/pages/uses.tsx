import BasicLayout from "@/layouts/BasicLayout";
import styled from "@emotion/styled";
import { List, ListItem, ListItemText, ListSubheader } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";

const PageTitle = styled.h1``;

const Uses = () => {
  return (
    <BasicLayout>
      <PageTitle>Uses</PageTitle>
      <Grid>
        These are the tools and services that I used to build this site.
      </Grid>
      <Grid>
        <List>
          <ListSubheader>
            <ListItemText>Tools</ListItemText>
          </ListSubheader>
          <ListItem>
            <ListItemText>Visual Studio Code</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>TypeScript</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>React</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Next.js</ListItemText>
          </ListItem>
          <ListSubheader>
            <ListItemText>Services</ListItemText>
          </ListSubheader>
          <ListItem>
            <ListItemText>GitHub</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>GitHub Pages</ListItemText>
          </ListItem>
        </List>
      </Grid>
    </BasicLayout>
  );
};

export default Uses;
