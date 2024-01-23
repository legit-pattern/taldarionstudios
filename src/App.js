import React from 'react';
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


function App() {
  return (
    <Container
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Container style={{ display: "flex", flexDirection: "column" }}>
        <img className="img-banner" src="./banner-1.jpeg" alt="banner" />

        <div>

        <AccordionElement title="EDUCATION">
          <CardElement title="Homework Helper" description="This bot will help you complete basic homework assignments" url="https://chat.openai.com/g/g-wTI7lRowq-lrne-homework-helper" />
          <CardElement title="Store Climber" description="This bot will do amazing things" url="https://chat.openai.com/g/g-vfxEmHLfH-store-climber" />
        </AccordionElement>

        <AccordionElement title="CREATIVITY">
        </AccordionElement>

        <AccordionElement title="WRITING">
        </AccordionElement>

        <AccordionElement title="PRODUCTIVITY">
        </AccordionElement>

        <AccordionElement title="RESEARCH & ANALYSIS">
        </AccordionElement>

        <AccordionElement title="PROGRAMMING">
        </AccordionElement>

        <AccordionElement title="MULTIMEDIA">
          <CardElement title="Logo Animator" description="This bot will help you animate logotypes for your company" url="https://chat.openai.com/g/g-kLXy5ZCqD-logo-animator" />
        </AccordionElement>

        </div>

      </Container>

      <img className="img-footer" src="./footer.png" alt="header" />
    </Container>
  );
}

const AccordionElement = ({title, children}) => {
  const length = React.Children.count(children);
  return (
    <Accordion
    disabled={length === 0}
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
      expandIcon={<ExpandMoreIcon style={{ color: "#ECDCB1", paddingTop: "13px" }}/>}
      style={{ width: "100%", borderRadius: "15px" }}
      sx={{
        "&:hover": {
          opacity: "70%",
          background: "#171D31",
        },
        ".MuiAccordionSummary-content": {
          justifyContent: "space-between",
          margin: "10px"
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
      <Typography
        className="typography-title"
        sx={{ mt: 4, mb: 2 }}
        component="div"
        >
        {length}
      </Typography>
    </AccordionSummary>
    <AccordionDetails style={{ paddingLeft: "2px", paddingRight: "2px", paddingTop: "30px", display: "flex", flexDirection: "row", flexWrap: "wrap", width: "100%" }}>
      {children}
    </AccordionDetails>
  </Accordion>
  );
}

const CardElement = ({title, description, url}) => {
  return (
    <Card className="card-style" style={{ background: "#14192A", display: "flex", flexDirection: "column", flexWrap: "no-wrap", justifyContent: "space-between" }}>
    <CardContent>
      <Typography variant="h6" sx={{ fontSize: 14, color: "#ECDCB1" }} color="text.primary" gutterBottom>
        {title}
      </Typography>
      <Typography sx={{ fontSize: 14, wordWrap: "break-word", color: "white" }} color="text.caption" gutterBottom>
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button style={{ width: "100%", height: "3vh", backgroundColor: "#ECDCB1", color: "black" }} variant="contained" target="_blank" href={url}>OPEN</Button>
    </CardActions>
  </Card>
  );
}


export default App;
