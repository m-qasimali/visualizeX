import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Box } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import Header from '../../components/Header';
import { colorTokens } from '../../theme';
import { useTheme } from '@emotion/react';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const FAQ = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Box
        py={2}
        px={2}
        spacing={1}
        sx={{ height: '100%', overflowY: 'scroll' }}
      >
        <Header title='FAQ' subtitle='Frequently Asked Questions Page' />
        <Box
          sx={{
            width: '100%',
            pt: 3,
          }}
        >
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              aria-controls='panel1d-content'
              id='panel1d-header'
              sx={{ backgroundColor: colors.primary[400] }}
            >
              <Typography sx={{ color: colors.greenAccent[400] }}>
                Collapsible Group Item #1
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: colors.primary[300] }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              aria-controls='panel2d-content'
              id='panel2d-header'
              sx={{ backgroundColor: colors.primary[400] }}
            >
              <Typography sx={{ color: colors.greenAccent[400] }}>
                Collapsible Group Item #2
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: colors.primary[300] }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              aria-controls='panel3d-content'
              id='panel3d-header'
              sx={{ backgroundColor: colors.primary[400] }}
            >
              <Typography sx={{ color: colors.greenAccent[400] }}>
                Collapsible Group Item #3
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: colors.primary[300] }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </>
  );
};

export default FAQ;
