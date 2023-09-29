import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./accordion.css";

const FAQAccordian = ({ questions,accordionPannel,expanded,onChange }) => {

 
  return (
    <div className="accordionContainer">
      <Accordion
      expanded={expanded === accordionPannel} onChange={onChange(accordionPannel)}
        style={{
          backgroundColor: questions?.bgColor,
          color: `${questions?.bgColor !== "#FFF5E0" ? "#FFF5E0" : "black"}`,
        }}
        className="mainAccordion"
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon className="accordionIcon"
              style={{
                color: `${
                  questions?.bgColor !== "#FFF5E0" ? "#FFF5E0" : "black"
                }`
              }}
            />
          }
        >
          <Typography className="accordionTitle">{questions?.title}</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordionHeight">
          <ul>
            {questions?.questions?.map((question) => {
              return <li className="questionList">{question}</li>;
            })}
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQAccordian;
