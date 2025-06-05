import { Button } from "@/components/moving-border-button/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#01E194]">Book a Call</h2>
        <p className="mb-6 text-lg">Let’s discuss how we can work together to grow your business and help your clients.</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-white text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-white text-black"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 rounded bg-white text-black"
            rows={4}
          />
            <Button 
            duration={3000}
            borderClassName="h-6 w-6"
            contentStyle={{ backgroundColor: '#01E194' }}
            >
            Submit
            </Button> 
        </form>
      </div>
    </section>
  );
};
