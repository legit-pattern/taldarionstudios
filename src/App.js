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

        <AccordionElement title="PROGRAMMING">
          <CardElement title="Taldarion" description="Combining the Best of All Top Coding GPTs, into One Supreme Master of All Programming" url="https://chat.openai.com/g/g-n6AiNh8ZM-taldarion" />
        </AccordionElement>

        <AccordionElement title="EDUCATION">
          <CardElement title="Heareo" description="Interactive educational tool for learning anything" url="https://chat.openai.com/g/g-CoykUzDg1-heareo" />
          <CardElement title="Lrne🍁- Homework Helper" description="Family Learning for All Ages🍁" url="https://chat.openai.com/g/g-wTI7lRowq-lrne-homework-helper" />
        </AccordionElement>

        <AccordionElement title="CREATIVITY">
          <CardElement title="Vol'dan" description="Combining the Best of all Top Image Generation GPTs, like DALL-E and Midjourney, including custom-made GPT versions, into one supreme master of imagery." url="https://chat.openai.com/g/g-oV2LxYQpD-vol-dan" />
          <CardElement title="Logo Text Creator" description="Text-Based images and designs." url="https://chat.openai.com/g/g-tSYLdyjJN-logo-text-creator" />
        </AccordionElement>

        <AccordionElement title="WRITING">
          <CardElement title="IMAGINEUS StoryCraft" description="Book Writing, Script Crafting, and Story Creation. Bringing Your Stories to Life in Extraordinary Ways." url="https://chat.openai.com/g/g-3EetpS3z2-imagineus-storycraft" />
          <CardElement title="DalyFlect☀️Reflection-Journal🌜" description="Start and finish your day with your daily reflection journal." url="https://chat.openai.com/g/g-MY6vMeCrV-dalyflect-reflection-journal" />
          <CardElement title="ReWRT- Rewriter" description="Rewrite Anything with Precision: Prompt Optimization, Only and Exactly as Directed" url="https://chat.openai.com/g/g-Lqmp1Pjpj-rewrt-rewriter" />
        </AccordionElement>

        <AccordionElement title="PRODUCTIVITY">
          <CardElement title="Store Climber" description="Unlock Secrets: How to Climb with Your Custom GPT at OpenAI's GPT Store" url="https://chat.openai.com/g/g-vfxEmHLfH-store-climber" />
        </AccordionElement>

        <AccordionElement title="LIFESTYLE">
          <CardElement title="Futeness🦾- Today's Training Solution⚡" description="Your Solution for Today's Workout" url="https://chat.openai.com/g/g-LK5dbKxxO-futeness-today-s-training-solution" />
          <CardElement title="GlossyBoss - Makeup/Products🌸" description="AI beauty guide for makeup advice and product recommendations.🌸" url="https://chat.openai.com/g/g-HWT02s6nP-glossyboss-makeup-products" />
        </AccordionElement>

        <AccordionElement title="MULTIMEDIA">
          <CardElement title="Logo Animator" description="Animate Your Logo🎞️, Image, or Anything – Just Like Magic!🧙 Watch Your Ideas Leap into Motion with a Single Command." url="https://chat.openai.com/g/g-kLXy5ZCqD-logo-animator" />
          <CardElement title="Movie Magic Maker" description="Advanced AI for Digital Filmmaking & Storytelling" url="https://chat.openai.com/g/g-sZ4XkRBkV-movie-magic-maker" />
          <CardElement title="VideoTrailer Maker" description="Specialist in video/movie trailers." url="https://chat.openai.com/g/g-eKaZWYAnZ-videotrailer-maker" />
        </AccordionElement>

        <AccordionElement title="RESEARCH & ANALYSIS">
          <CardElement title="EagleAI Newshunter" description="Your go-to for the latest in AI, scouting opportunities, innovations, and breakthroughs." url="https://chat.openai.com/g/g-QgoXfmP5q-eagleai-newshunter" />
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
        variant='h5'
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
