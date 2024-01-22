import './App.css';
import { Box, List, Grid, ListItemButton, ListItemText, Typography } from '@mui/material';

function App() {
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>

    <Grid item xs={12} md={6} style={{ paddingRight: "10px", paddingLeft: "40px" }}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Education
      </Typography>
        <List dense={true} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <ListItemButton target='_blank' href='https://chat.openai.com/g/g-wTI7lRowq-lrne-homework-helper'>
            <ListItemText
              primary="Homework helper"
              />
          </ListItemButton>

          <ListItemButton target='_blank' href='https://chat.openai.com/g/g-kLXy5ZCqD-logo-animator'>
            <ListItemText
              primary="Logo Animator"
              />
          </ListItemButton>

          <ListItemButton target='_blank' href='https://chat.openai.com/g/g-vfxEmHLfH-store-climber'>
            <ListItemText
              primary="Store Climber"
              />
          </ListItemButton>

        </List>
    </Grid>

    {/* <Grid item xs={12} md={6} style={{ paddingRight: "10px", paddingLeft: "40px" }}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Lifestyle
      </Typography>
      <List dense={true} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ListItemButton target='_blank' href='https://chat.openai.com/g/g-wTI7lRowq-lrne-homework-helper'>
          <ListItemText
            primary="Homework helper"
            />
        </ListItemButton>

        <ListItemButton target='_blank' href='https://chat.openai.com/g/g-kLXy5ZCqD-logo-animator'>
          <ListItemText
            primary="Logo Animator"
            />
        </ListItemButton>

        <ListItemButton target='_blank' href='https://chat.openai.com/g/g-vfxEmHLfH-store-climber'>
          <ListItemText
            primary="Store Climber"
            />
        </ListItemButton>

      </List>
    </Grid> */}

    </Box>
  );
}

export default App;
