import { Camera, UserCheck, Home } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Submit Photos",
    description: "Take photos of your kitchen and text them to 661-KITCHEN with your details and why it deserves a makeover.",
  },
  {
    icon: UserCheck,
    title: "Get Selected",
    description: "Our team will review entries and choose winners based on need and impact.",
  },
  {
    icon: Home,
    title: "Transform Your Kitchen",
    description: "Winners receive cabinets, appliances, or a full remodel worth up to $20,000.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="font-display text-4xl md:text-6xl text-center mb-16">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-card rounded-xl p-8 text-center shadow-lg border border-border hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="font-display text-5xl text-primary mb-2">{i + 1}</div>
              <h3 className="font-display text-2xl mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="sms:661-KITCHEN"
            className="inline-block bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg transition-transform hover:scale-105"
          >
            TEXT 661-KITCHEN TO ENTER NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
