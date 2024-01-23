import './App.css';
import { Box, Button, Stack, Container, Typography } from '@mui/material';

function App() {
  return (
    <Container>
    <div style={{ width: '100%' }}>
      <img src="./header.png" alt="header" style={{ width: '100%', height: 'auto', display: 'block' }}/>
    </div>
    
    <Container style={{ display: "flex", flexDirection: "column" }}>
      <img src="./banner-1.jpeg" alt="banner" style={{ width: '100%', height: 'auto', display: 'block' }}/>

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div" style={{ color: "#ECDCB1", fontFamily: "tektur", alignSelf: "center" }}>
        EDUCATION
      </Typography>
      <Stack spacing={2} direction={"row"} style={{ width: "2100px", justifyContent: "center", flexWrap: "wrap" }}>
        <Button variant="contained" target='_blank' href='https://chat.openai.com/g/g-wTI7lRowq-lrne-homework-helper' style={{ color: "black", background: "#ECDCB1", margin: "10px" }}>
          <Typography variant='h6' style={{ fontFamily: "tektur" }}>Homework helper</Typography>
        </Button>

        <Button variant="contained" target='_blank' href='https://chat.openai.com/g/g-kLXy5ZCqD-logo-animator' style={{ color: "black", background: "#ECDCB1", margin: "10px" }}>
          <Typography variant='h6' style={{ fontFamily: "tektur" }}>Logo Animator</Typography>
        </Button>

        <Button variant="contained" target='_blank' href='https://chat.openai.com/g/g-vfxEmHLfH-store-climber' style={{ color: "black", background: "#ECDCB1", margin: "10px" }}>
          <Typography variant='h6' style={{ fontFamily: "tektur" }}>Store Climber</Typography>
        </Button>

      </Stack>
    </Box>

    </Container>

    <img src="./footer.png" alt="footer" style={{ width: '100%', height: 'auto', display: 'block', paddingTop: "300px" }}/>
    </Container>
  );
}

export default App;
