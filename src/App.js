import './App.css';
import { Box, Button, Stack, Container, Typography } from '@mui/material';

function App() {
  return (
    <Container>
    <img src="./header.png" alt="header" />
    
    <Container style={{ display: "flex", flexDirection: "column" }}>
      <img src="./banner-1.jpeg" alt="banner" />

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div" style={{ color: "#ECDCB1", fontFamily: "tektur", alignSelf: "center" }}>
        EDUCATION
      </Typography>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" target='_blank' href='https://chat.openai.com/g/g-wTI7lRowq-lrne-homework-helper' style={{ color: "black", background: "#ECDCB1", margin: "10px" }}>
          <Typography style={{ fontFamily: "tektur" }}>Homework helper</Typography>
        </Button>

        <Button variant="contained" target='_blank' href='https://chat.openai.com/g/g-kLXy5ZCqD-logo-animator' style={{ color: "black", background: "#ECDCB1", margin: "10px" }}>
          <Typography style={{ fontFamily: "tektur" }}>Logo Animator</Typography>
        </Button>

        <Button variant="contained" target='_blank' href='https://chat.openai.com/g/g-vfxEmHLfH-store-climber' style={{ color: "black", background: "#ECDCB1", margin: "10px" }}>
          <Typography style={{ fontFamily: "tektur" }}>Store Climber</Typography>
        </Button>

      </Stack>
    </Box>

    </Container>

    <img className='img-footer' src="./footer.png" alt="footer" />
    </Container>
  );
}

export default App;
