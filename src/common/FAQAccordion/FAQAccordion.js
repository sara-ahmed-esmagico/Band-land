import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQAccordian = ({questions}) => {
  return (
    <div style={{position:'relative', zIndex:4,marginTop:'20px', width:'600px'}}>  
      <Accordion style={{backgroundColor:questions?.bgColor,color:`${questions?.bgColor!=='white' ? 'white' :'black'}`,padding:"10px"}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:`${questions?.bgColor!=='white' ? 'white' :'black'}`}}  />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default FAQAccordian