import './App.css';
import { Box, Button, Divider, List, Container, Typography } from '@mui/material';

function App() {
  return (
    <Container style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    
    <Container style={{ display: "flex", flexDirection: "column" }}>
      <img className='img-banner' src="./banner-1.jpeg" alt="banner" />

    <Box className="box-padding" style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography className="typography-title" sx={{ mt: 4, mb: 2 }} component="div">
        EDUCATION
      </Typography>
      <List className="stack-style" spacing={2}>
        <Button style={{ background: "#ECDCB1" }} variant="contained" target='_blank' href='https://chat.openai.com/g/g-wTI7lRowq-lrne-homework-helper'>
          <Typography style={{ fontFamily: "tektur", color: "black" }}>Homework helper</Typography>
        </Button>

        <Button style={{ background: "#ECDCB1" }} variant="contained" target='_blank' href='https://chat.openai.com/g/g-kLXy5ZCqD-logo-animator'>
          <Typography style={{ fontFamily: "tektur", color: "black" }}>Logo Animator</Typography>
        </Button>

        <Button style={{ background: "#ECDCB1" }} variant="contained" target='_blank' href='https://chat.openai.com/g/g-vfxEmHLfH-store-climber'>
          <Typography style={{ fontFamily: "tektur", color: "black" }}>Store Climber</Typography>
        </Button>

      </List>
    </Box>

    <Divider />

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography className="typography-title" sx={{ mt: 4, mb: 2 }} component="div">
        CREATIVITY
      </Typography>
      <List className="stack-style" spacing={2}>

      </List>
    </Box>

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography className="typography-title" sx={{ mt: 4, mb: 2 }} component="div">
        WRITING
      </Typography>
      <List className="stack-style" spacing={2}>

      </List>
    </Box>

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography className="typography-title" sx={{ mt: 4, mb: 2 }} component="div">
        PRODUCTIVITY
      </Typography>
      <List className="stack-style" spacing={2}>

      </List>
    </Box>

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography className="typography-title" sx={{ mt: 4, mb: 2 }} component="div">
        RESEARCH & ANALYSIS
      </Typography>
      <List className="stack-style" spacing={2}>

      </List>
    </Box>

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography className="typography-title" sx={{ mt: 4, mb: 2 }} component="div">
        PROGRAMMING
      </Typography>
      <List className="stack-style" spacing={2}>

      </List>
    </Box>

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography className="typography-title" sx={{ mt: 4, mb: 2 }} component="div">
        MULTIMEDIA
      </Typography>
      <List className="stack-style" spacing={2}>

      </List>
    </Box>

    </Container>

    <img className='img-footer' src="./header.png" alt="header" />

    {/* <img className='img-footer' src="./footer.png" alt="footer" /> */}
    </Container>
  );
}

export default App;
