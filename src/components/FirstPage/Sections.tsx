import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { SectionProps } from "../../types/SectionTypes";
import { InnerSection } from "./components/InnerSections";


function Section({ section_name, content }: SectionProps) {
  return (
    <>
      <section id={section_name} className="min-h-[100vh]">
        <InnerSection name={section_name} content={content} />
      </section>
    </>
  );
}

export default Section;
