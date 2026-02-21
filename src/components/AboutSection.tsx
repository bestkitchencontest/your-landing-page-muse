import boulderLogo from "@/assets/boulder-logo.png";

const AboutSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <img src={boulderLogo} alt="Boulder Builders" className="h-24 mx-auto mb-8" />
        <h2 className="font-display text-4xl md:text-5xl mb-4">
          Trusted Kitchen Remodeling Experts
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Boulder Builders specializes in high-quality kitchen transformations in the Santa Clarita Valley.
          Our team has helped hundreds of homeowners turn outdated kitchens into beautiful, modern spaces.
        </p>
        <p className="font-display text-2xl text-primary">Rock Solid Quality</p>
      </div>
    </section>
  );
};

export default AboutSection;
