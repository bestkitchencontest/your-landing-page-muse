import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";

const transformations = [
  { image: beforeAfter1, label: "Complete Kitchen Overhaul" },
  { image: beforeAfter2, label: "Modern Open-Concept Remodel" },
];

const BeforeAfter = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="font-display text-4xl md:text-6xl text-center mb-4">
          See the Transformations We Create
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-14 max-w-2xl mx-auto">
          Real kitchens. Real homeowners. Real results.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {transformations.map((t) => (
            <div key={t.label} className="rounded-xl overflow-hidden shadow-lg group">
              <img
                src={t.image}
                alt={t.label}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="bg-secondary p-4 text-center">
                <p className="font-display text-xl text-secondary-foreground">{t.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
