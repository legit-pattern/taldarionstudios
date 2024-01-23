import './App.css';
import { Box, Button, Divider, Stack, Container, Typography } from '@mui/material';

function App() {
  return (
    <Container style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    
    <Container style={{ display: "flex", flexDirection: "column" }}>
      <img className='img-banner' src="./banner-1.jpeg" alt="banner" />

    <Box className="box-padding" style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography className="typography-title" sx={{ mt: 4, mb: 2 }} component="div" style={{ color: "#ECDCB1", fontFamily: "tektur", alignSelf: "center" }}>
        EDUCATION
      </Typography>
      <Stack className="stack-style" spacing={2}>
        <Button style={{ background: "#ECDCB1" }} variant="contained" target='_blank' href='https://chat.openai.com/g/g-wTI7lRowq-lrne-homework-helper'>
          <Typography style={{ fontFamily: "tektur", color: "black" }}>Homework helper</Typography>
        </Button>

        <Button style={{ background: "#ECDCB1" }} variant="contained" target='_blank' href='https://chat.openai.com/g/g-kLXy5ZCqD-logo-animator'>
          <Typography style={{ fontFamily: "tektur", color: "black" }}>Logo Animator</Typography>
        </Button>

        <Button style={{ background: "#ECDCB1" }} variant="contained" target='_blank' href='https://chat.openai.com/g/g-vfxEmHLfH-store-climber'>
          <Typography style={{ fontFamily: "tektur", color: "black" }}>Store Climber</Typography>
        </Button>

      </Stack>
    </Box>

    <Divider />

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography className="typography-title" sx={{ mt: 4, mb: 2 }} component="div" style={{ color: "#ECDCB1", fontFamily: "tektur", alignSelf: "center" }}>
        CREATIVITY
      </Typography>
      <Stack className="stack-style" spacing={2}>

      </Stack>
    </Box>

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography className="typography-title" sx={{ mt: 4, mb: 2 }} component="div" style={{ color: "#ECDCB1", fontFamily: "tektur", alignSelf: "center" }}>
        WRITING
      </Typography>
      <Stack className="stack-style" spacing={2}>

      </Stack>
    </Box>

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography className="typography-title" sx={{ mt: 4, mb: 2 }} component="div" style={{ color: "#ECDCB1", fontFamily: "tektur", alignSelf: "center" }}>
        PRODUCTIVITY
      </Typography>
      <Stack className="stack-style" spacing={2}>

      </Stack>
    </Box>

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography className="typography-title" sx={{ mt: 4, mb: 2 }} component="div" style={{ color: "#ECDCB1", fontFamily: "tektur", alignSelf: "center" }}>
        RESEARCH & ANALYSIS
      </Typography>
      <Stack className="stack-style" spacing={2}>

      </Stack>
    </Box>

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography className="typography-title" sx={{ mt: 4, mb: 2 }} component="div" style={{ color: "#ECDCB1", fontFamily: "tektur", alignSelf: "center" }}>
        PROGRAMMING
      </Typography>
      <Stack className="stack-style" spacing={2}>

      </Stack>
    </Box>

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography className="typography-title" sx={{ mt: 4, mb: 2 }} component="div" style={{ color: "#ECDCB1", fontFamily: "tektur", alignSelf: "center" }}>
        MULTIMEDIA
      </Typography>
      <Stack className="stack-style" spacing={2}>

      </Stack>
    </Box>

    </Container>

    <img className='img-footer' src="./header.png" alt="header" />

    {/* <img className='img-footer' src="./footer.png" alt="footer" /> */}
    </Container>
  );
}

export default App;
