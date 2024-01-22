import './App.css';
import { Box, List, Grid, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';

function App() {
  return (
    <Grid item xs={12} md={6} style={{ paddingRight: "10px", paddingLeft: "40px" }}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Education
        </Typography>
          <List dense={true}>
            <ListItemButton target='_blank' href='https://chat.openai.com/g/g-wTI7lRowq-lrne-homework-helper'>
              <ListItem>
                <ListItemText
                  primary="Homework helper"
                  />
              </ListItem>
            </ListItemButton>

            <ListItemButton target='_blank' href='https://chat.openai.com/g/g-kLXy5ZCqD-logo-animator'>
              <ListItem>
                <ListItemText
                  primary="Logo Animator"
                  />
              </ListItem>
            </ListItemButton>

            <ListItemButton target='_blank' href='https://chat.openai.com/g/g-vfxEmHLfH-store-climber'>
              <ListItem>
                <ListItemText
                  primary="Store Climber"
                  />
              </ListItem>
            </ListItemButton>
          </List>
      </Grid>
  );
}

export default App;
