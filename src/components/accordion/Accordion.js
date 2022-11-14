import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function FaqAccordion({ question, answer }) {
    return (
        <>
            <Accordion allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>{question}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>{answer}</AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </>
    );
}

export default FaqAccordion;