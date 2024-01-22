import './App.css';
import { Box, Button, Stack, Container, Typography } from '@mui/material';
// import header from "./public/header-1.png";

function App() {
  return (
    <Container style={{ display: "flex", flexDirection: "column" }}>
    <Box>
      <img src="/banner-1.jpeg" alt="Banner" style={{ width: '100%', height: 'auto', display: 'block' }}/>
    </Box>

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div" style={{ paddingLeft: "18px", color: "#ECDCB1", fontFamily: "helvetica", alignSelf: "center" }}>
        Education
      </Typography>
      <Stack spacing={2} direction={"row"} >
        <Button variant="contained" target='_blank' href='https://chat.openai.com/g/g-wTI7lRowq-lrne-homework-helper' style={{ fontFamily: "monospace", color: "black", background: "#ECDCB1", margin: "10px" }}>
          <Typography variant='h7'>Homework helper</Typography>
        </Button>

        <Button variant="contained" target='_blank' href='https://chat.openai.com/g/g-kLXy5ZCqD-logo-animator' style={{ fontFamily: "monospace", color: "black", background: "#ECDCB1", margin: "10px" }}>
          <Typography variant='h7'>Logo Animator</Typography>
        </Button>

        <Button variant="contained" target='_blank' href='https://chat.openai.com/g/g-vfxEmHLfH-store-climber' style={{ fontFamily: "monospace", color: "black", background: "#ECDCB1", margin: "10px" }}>
          <Typography variant='h7'>Store Climber</Typography>
        </Button>
      </Stack>
    </Box>

    </Container>
  );
}

export default App;
