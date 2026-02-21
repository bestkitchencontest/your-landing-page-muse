const VideoSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-display text-4xl md:text-6xl text-secondary-foreground mb-4">
          Watch How It Works
        </h2>
        <p className="text-muted mb-10 text-lg">
          See how easy it is to enter and what you could win
        </p>
        <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/oZSoV4pUgQE"
            title="Contest Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="mt-10">
          <a
            href="sms:661-KITCHEN"
            className="inline-block bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg transition-transform hover:scale-105"
          >
            TEXT 661-KITCHEN TO ENTER TODAY
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
