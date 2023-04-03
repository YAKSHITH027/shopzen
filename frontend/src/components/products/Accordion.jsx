import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react";

function Acco(){
    return(
        <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Product Details
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     Elevate your monitor as well as your workstation experience with Mesa Monitor Stand! Your ultimate ally for productive working, it is a perfect coalition of design and function. It’s thoughtful design frees up valuable space on your desk and elevated height supports improved working posture, making it ergonomically friendly. Durable, matte-finish aluminium gives the stand design a clean modern expression to complement contemporary device designs. Natural ashwood tray softens the look and adds a warm feel while the colours bring the fun element.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Specifications
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Text fontWeight="bold">DIMENSIONS</Text>
      <Text>Stand: 28 (D) x 38 (W) x 9 (H) cm Tray: 20 (D) x 37 (W) x 1 (H) cm</Text>

      <Text fontWeight="bold">PACKAGE CONTENTS</Text>
      <Text>1 x MESA Monitor Stand and Wooden Tray</Text>

      <Text fontWeight="bold">CARE</Text>
      <Text> Wipe the metallic part clean with a cloth dampened in a mild cleaner and wooden tray with soft dry cloth.</Text>

      <Text fontWeight="bold">COUNTRY OF ORIGIN</Text>
      <Text> Designed and Made in India.</Text>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Delivery Time & Returns
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Text fontWeight="bold">DELIVERY</Text>
      <Text>Dispatch to Courier in 48 Hours.<br/>Eligible for Cash on Delivery</Text>

      <Text fontWeight="bold">FREE SHIPPING</Text>
      <Text>Shipping is free for all prepaid orders above Rs.749.<br/>A charge of Rs.49 is applied to all Prepaid orders below Rs.749.</Text>

      <Text fontWeight="bold">CASH ON DELIVERY</Text>
      <Text>Rs.99 extra charges for all Cash On Delivery orders.</Text>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    )
}
export default Acco