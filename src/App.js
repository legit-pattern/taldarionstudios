import "./App.css";
import {
  Card,
  CardContent,
  CardActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionElement = ({title, children}) => {
  return (
    <Accordion
    style={{
      backgroundColor: "#0D111A",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "none"
    }}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon style={{ color: "#ECDCB1" }} />}
      style={{ width: "100%", borderRadius: "15px" }}
      sx={{
        "&:hover": {
          opacity: "70%",
          background: "#171D31",
        }
      }}
    >
      <Typography
        className="typography-title"
        sx={{ mt: 4, mb: 2 }}
        component="div"
      >
        {title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails style={{ paddingTop: "30px", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {children}
    </AccordionDetails>
  </Accordion>
  );
}

const CardElement = ({title, description, url}) => {
  return (
    <Card className="card-style" style={{ display: "flex", flexDirection: "column", flexWrap: "no-wrap", justifyContent: "space-between" }}>
    <CardContent>
      <Typography variant="h6" sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        {title}
      </Typography>
      <Typography sx={{ fontSize: 14, wordWrap: "break-word" }} color="text.caption" gutterBottom>
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button style={{ width: "100%", height: "3vh", backgroundColor: "#ECDCB1", color: "black" }} variant="contained" target="_blank" href={url}>OPEN</Button>
    </CardActions>
  </Card>
  );
}

function App() {
  return (
    <Container
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Container style={{ display: "flex", flexDirection: "column" }}>
        <img className="img-banner" src="./banner-1.jpeg" alt="banner" />

        <div>

        <AccordionElement title="EDUCATION">
          <CardElement title="Homework Helper" description="Lorem ipsum dolores color et jnaiodhwodnaodiawodniandiwdni" url="https://chat.openai.com/g/g-wTI7lRowq-lrne-homework-helper" />
          <CardElement title="Logo Animator" description="Random description" url="https://chat.openai.com/g/g-kLXy5ZCqD-logo-animator" />
          <CardElement title="Store Climber" description="Random description" url="https://chat.openai.com/g/g-vfxEmHLfH-store-climber" />
        </AccordionElement>

        <AccordionElement title="CREATIVITY">
          <CardElement title="Homework Helper" description="Lorem ipsum dolores color et jnaiodhwodnaodiawodniandiwdni jnaiodhwodnaodiawodniandiwdni" url="https://chat.openai.com/g/g-wTI7lRowq-lrne-homework-helper" />
          <CardElement title="Logo Animator" description="Random description" url="https://chat.openai.com/g/g-kLXy5ZCqD-logo-animator" />
          <CardElement title="Store Climber" description="Random description" url="https://chat.openai.com/g/g-vfxEmHLfH-store-climber" />
        </AccordionElement>

        <AccordionElement title="WRITING">
          <CardElement title="Homework Helper" description="Lorem ipsum dolores color et jnaiodhwodnaodiawodniandiwdni jnaiodhwodnaodiawodniandiwdni" url="https://chat.openai.com/g/g-wTI7lRowq-lrne-homework-helper" />
          <CardElement title="Logo Animator" description="Random description" url="https://chat.openai.com/g/g-kLXy5ZCqD-logo-animator" />
          <CardElement title="Store Climber" description="Random description" url="https://chat.openai.com/g/g-vfxEmHLfH-store-climber" />
        </AccordionElement>

        <AccordionElement title="PRODUCTIVITY">
          <CardElement title="Homework Helper" description="Lorem ipsum dolores color et jnaiodhwodnaodiawodniandiwdni jnaiodhwodnaodiawodniandiwdni" url="https://chat.openai.com/g/g-wTI7lRowq-lrne-homework-helper" />
          <CardElement title="Logo Animator" description="Random description" url="https://chat.openai.com/g/g-kLXy5ZCqD-logo-animator" />
          <CardElement title="Store Climber" description="Random description" url="https://chat.openai.com/g/g-vfxEmHLfH-store-climber" />
        </AccordionElement>

        <AccordionElement title="RESEARCH & ANALYSIS">
          <CardElement title="Homework Helper" description="Lorem ipsum dolores color et jnaiodhwodnaodiawodniandiwdni jnaiodhwodnaodiawodniandiwdni" url="https://chat.openai.com/g/g-wTI7lRowq-lrne-homework-helper" />
          <CardElement title="Logo Animator" description="Random description" url="https://chat.openai.com/g/g-kLXy5ZCqD-logo-animator" />
          <CardElement title="Store Climber" description="Random description" url="https://chat.openai.com/g/g-vfxEmHLfH-store-climber" />
        </AccordionElement>

        <AccordionElement title="PROGRAMMING">
          <CardElement title="Homework Helper" description="Lorem ipsum dolores color et jnaiodhwodnaodiawodniandiwdni jnaiodhwodnaodiawodniandiwdni" url="https://chat.openai.com/g/g-wTI7lRowq-lrne-homework-helper" />
          <CardElement title="Logo Animator" description="Random description" url="https://chat.openai.com/g/g-kLXy5ZCqD-logo-animator" />
          <CardElement title="Store Climber" description="Random description" url="https://chat.openai.com/g/g-vfxEmHLfH-store-climber" />
        </AccordionElement>

        <AccordionElement title="MULTIMEDIA">
          <CardElement title="Homework Helper" description="Lorem ipsum dolores color et jnaiodhwodnaodiawodniandiwdni jnaiodhwodnaodiawodniandiwdni" url="https://chat.openai.com/g/g-wTI7lRowq-lrne-homework-helper" />
          <CardElement title="Logo Animator" description="Random description" url="https://chat.openai.com/g/g-kLXy5ZCqD-logo-animator" />
          <CardElement title="Store Climber" description="Random description" url="https://chat.openai.com/g/g-vfxEmHLfH-store-climber" />
        </AccordionElement>

        </div>

      </Container>

      <img className="img-footer" src="./footer.png" alt="header" />

      {/* <img className='img-footer' src="./footer.png" alt="footer" /> */}
    </Container>
  );
}

export default App;
