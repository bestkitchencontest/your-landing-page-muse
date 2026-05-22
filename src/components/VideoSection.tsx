import { useState } from "react";
import { Play } from "lucide-react";

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
                backgroundImage: `url(https://img.youtube.com/vi/SL3iLmXd1Ts/maxresdefault.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Flashing gold overlay */}
              <div className="absolute inset-0 bg-primary/30 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />

              {/* Pulsing rings */}
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-primary/40 animate-ping" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-primary/60 animate-ping [animation-delay:0.3s]" />

              {/* Play button */}
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                <Play className="w-10 h-10 text-primary-foreground fill-primary-foreground ml-1" />
              </span>

              {/* Flashing CTA text */}
              <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-2xl text-primary tracking-wider animate-pulse drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                ▶ TAP TO PLAY
              </span>
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
