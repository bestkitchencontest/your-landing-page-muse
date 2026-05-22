import { useState } from "react";
import videoThumbnail from "@/assets/video-thumbnail.jpg";

const VideoSection = () => {
  const [playing, setPlaying] = useState(false);

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
          {playing ? (
            <iframe
              src="https://www.youtube.com/embed/SL3iLmXd1Ts?autoplay=1"
              title="Contest Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              aria-label="Play video"
              className="group absolute inset-0 w-full h-full cursor-pointer overflow-hidden"
              style={{
                backgroundImage: `url(${videoThumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

            </button>
          )}
        </div>
        <div className="mt-10">
          <a
            href="sms:323-KITCHEN"
            className="inline-block bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg transition-transform hover:scale-105"
          >
            TEXT 323-KITCHEN TO ENTER TODAY
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
