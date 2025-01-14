import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function CollapsibleCard({ title, children }) {
  // Generates unique id for each accordion
  const id = `panel-${title.replace(/\s+/g, "-")}`;

  return (
    <Accordion slotProps={{ heading: { component: "h4" } }}>
      <AccordionSummary
        expandIcon={<ArrowDownwardIcon />}
        aria-controls={`${id}-content`}
        id={`${id}-header`}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

export default CollapsibleCard;
