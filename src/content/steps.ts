/** Section 7: How it works. Copy from PDF page 7 / draft site. */
export const howItWorks = {
  eyebrow: "Simple from start to finish",
  title: ["Your idea to your wall.", "In 3 easy steps."],
  intro: "We guide you from your first idea through to the final print.",
  cta: { label: "Let's start with your wall", href: "#contact" },
  steps: [
    {
      n: "01",
      title: "Consultation & online site assessment",
      body: "Send your wall size (width × height), a wall photo, your location and your design idea. We assess your space online and advise you.",
    },
    {
      n: "02",
      title: "Mockup approval & booking",
      body: "Review the design for your space. Once the mockup and quotation are approved, confirm your booking with a deposit.",
    },
    {
      n: "03",
      title: "Setup & printing",
      body: "Our team arrives, sets up the equipment and prints the approved artwork directly onto your prepared surface.",
    },
  ],
} as const;
