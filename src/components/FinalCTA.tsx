const FinalCTA = () => {
  return (
    <section className="py-24 bg-secondary text-center">
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="font-display text-5xl md:text-7xl text-secondary-foreground mb-6">
          Your Dream Kitchen
          <br />
          <span className="text-gradient-gold">Could Be Next</span>
        </h2>
        <p className="text-muted text-lg mb-10">
          Limited-time contest. Submit your entry today via text or online at{" "}
          <a href="https://worstkitchencontest.com" className="text-primary underline hover:no-underline">
            worstkitchencontest.com
          </a>
        </p>
        <a
          href="sms:661-KITCHEN"
          className="inline-block bg-primary text-primary-foreground font-bold text-xl px-12 py-6 rounded-lg animate-pulse-glow transition-transform hover:scale-105"
        >
          TEXT 661-KITCHEN NOW TO ENTER
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
