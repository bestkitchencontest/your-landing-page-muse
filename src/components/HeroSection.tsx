import heroImage from "@/assets/hero-kitchen.jpg";
import boulderLogo from "@/assets/boulder-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Kitchen transformation before and after"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--dark-overlay)" }} />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 flex justify-center">
          <img src={boulderLogo} alt="Boulder Builders Inc." className="h-20 md:h-28 w-auto" />
        </div>
        <p className="font-display text-xl md:text-2xl tracking-widest text-primary mb-4">
          BOULDER BUILDERS PRESENTS
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none text-secondary-foreground mb-6">
          WIN A KITCHEN MAKEOVER
          <br />
          <span className="text-gradient-gold">WORTH UP TO $20,000</span>
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
          Submit photos of your outdated, damaged, or dysfunctional kitchen for a chance to win new cabinets, appliances, or a full remodel.
        </p>
        <a
          href="sms:661-KITCHEN"
          className="inline-block bg-primary text-primary-foreground font-bold text-lg md:text-xl px-10 py-5 rounded-lg animate-pulse-glow transition-transform hover:scale-105"
        >
          TEXT 661-KITCHEN NOW TO ENTER
        </a>
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            Open to SCV homeowners
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            Multiple winners selected
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            Sponsored by top local brands
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
