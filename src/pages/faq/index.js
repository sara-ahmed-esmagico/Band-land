import React from "react";
import "../../styles/Home.css";
import { Box, Typography } from "@mui/material";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Banner from "../../images/faqBanner1.png";
import FAQAccordion from "../../common/FAQAccordion/FAQAccordion";
import { questions } from "../../common/FAQQuestions/question";
import '../../styles/faq.css'


const FAQ = () => {
  
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Header mobileCss={"mobileViewBannerFAQ"} midBanner={Banner} />

      <Box className="pos-absolute top-5 relative-top flex-center flex-col align-center text-center faqTop">
        <Typography
          sx={{ mt: { xs: 5, lg: 5 } }}
          color={"white"}
          className="font-modesto-condensed text-shadow heading-relative z-index-2"
        >
          FREQUENTLY ASKED QUESTIONS
        </Typography>
        <Box className="scrollFAQContainer">
        {questions.map((item) => {
          return (
            <FAQAccordion
              questions={item}
              accordionPannel={item?.pannel}
              expanded={expanded}
              onChange={handleChange}
            />
          );
        })}
        </Box>

        <Box
          sx={{ mt: { xs: 5, lg: 10 } }}
          className="pos-relative flex-center flex-col align-center"
          style={{ background: "#7B1AA7" }}
        >
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default FAQ;
