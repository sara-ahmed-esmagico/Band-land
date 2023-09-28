

import React from "react";
import "../../styles/Home.css";
import { Box, Typography } from "@mui/material";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Banner from "../../images/testBanner.svg";

import FAQAccordion from "../../common/FAQAccordion/FAQAccordion";
import { questions } from "../../common/FAQQuestions/question";

const FAQ = () => {
  return (
    <>
    <FAQAccordion />
      <Header mobileCss={"mobileViewBannerHome"} midBanner={Banner} />

      <Box className="pos-absolute top-5 relative-top flex-center flex-col align-center text-center homeTop ">
        <Typography
          sx={{ mt: { xs: 5, lg: 10 } }}
          color={"white"}
          className="font-modesto-condensed text-shadow heading-relative z-index-2"
        >
          FREQUENTLY ASKED QUESTIONS
        </Typography>
        {questions.map((item)=>{
          return <FAQAccordion questions={item} />
        })}
        
        <Box
          sx={{ mt: { xs: 5, lg: 10 } }}
          className="pos-relative flex-center flex-col align-center"
        >
          <Footer />
        </Box>
      </Box>
      
    </>
  );
};

export default FAQ;
