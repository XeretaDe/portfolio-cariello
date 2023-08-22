type Test = "Resume" | "3D";

export interface SectionProps {
    section_name: string;
    content: {
      text: string;
      type: Test;
    };
  }