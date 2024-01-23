import './App.css';
import { Box, Button, Divider, Stack, Container, Typography } from '@mui/material';

function App() {
  return (
    <Container style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img className='img-header' src="./header.png" alt="header" />
    
    <Container style={{ display: "flex", flexDirection: "column" }}>
      <img className='img-banner' src="./banner-1.jpeg" alt="banner" />

    <Box className="box-padding" style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div" style={{ color: "#ECDCB1", fontFamily: "tektur", alignSelf: "center" }}>
        EDUCATION
      </Typography>
      <Stack spacing={2} direction={"row"} style={{ flexWrap: "wrap", justifyContent: "center" }}>
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

    <Divider />

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div" style={{ color: "#ECDCB1", fontFamily: "tektur", alignSelf: "center" }}>
        CREATIVITY
      </Typography>
      <Stack spacing={2} direction={"row"} style={{ flexWrap: "wrap", justifyContent: "center" }}>

      </Stack>
    </Box>

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div" style={{ color: "#ECDCB1", fontFamily: "tektur", alignSelf: "center" }}>
        WRITING
      </Typography>
      <Stack spacing={2} direction={"row"} style={{ flexWrap: "wrap", justifyContent: "center" }}>

      </Stack>
    </Box>

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div" style={{ color: "#ECDCB1", fontFamily: "tektur", alignSelf: "center" }}>
        PRODUCTIVITY
      </Typography>
      <Stack spacing={2} direction={"row"} style={{ flexWrap: "wrap", justifyContent: "center" }}>

      </Stack>
    </Box>

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div" style={{ color: "#ECDCB1", fontFamily: "tektur", alignSelf: "center" }}>
        RESEARCH & ANALYSIS
      </Typography>
      <Stack spacing={2} direction={"row"} style={{ flexWrap: "wrap", justifyContent: "center" }}>

      </Stack>
    </Box>

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div" style={{ color: "#ECDCB1", fontFamily: "tektur", alignSelf: "center" }}>
        PROGRAMMING
      </Typography>
      <Stack spacing={2} direction={"row"} style={{ flexWrap: "wrap", justifyContent: "center" }}>

      </Stack>
    </Box>

    <Box style={{display: "flex", flexDirection: "column", alignSelf: "center" }}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div" style={{ color: "#ECDCB1", fontFamily: "tektur", alignSelf: "center" }}>
        MULTIMEDIA
      </Typography>
      <Stack spacing={2} direction={"row"} style={{ flexWrap: "wrap", justifyContent: "center" }}>

      </Stack>
    </Box>

    </Container>

    <img className='img-footer' src="./footer.png" alt="footer" />
    </Container>
  );
}

export default App;
