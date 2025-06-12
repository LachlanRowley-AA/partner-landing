//ContactSection.tsx
import { Button } from "@/components/moving-border-button/button";
import { useState } from "react";

interface FormData {
  name: string;
  businessName: string;
  phoneNumber: string;
  email: string;
  comments: string;
}

export const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    businessName: '',
    phoneNumber: '',
    email: '',
    comments: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // You can replace this with your actual API endpoint
      const response = await fetch('/api/createQuery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        // Reset form on success
        setFormData({
          name: '',
          businessName: '',
          phoneNumber: '',
          email: '',
          comments: ''
        });
      } else {
        setError(result.error || 'Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Form submission failed', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setError(null);
  };

  return (
    <section id="contact" className="py-10 bg-black text-white px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#01E194]">
          {isSuccess ? "Message Sent!" : "Book a Call"}
        </h2>
        <p className="mb-6 text-lg">
          {isSuccess 
            ? "Thank you"
            : "Let's discuss how we can work together to grow your business and help your clients."
          }
        </p>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full p-3 rounded bg-white text-black"
              required
              disabled={isSubmitting}
            />
            <input
              type="text"
              placeholder="Business Name"
              value={formData.businessName}
              onChange={(e) => handleInputChange('businessName', e.target.value)}
              className="w-full p-3 rounded bg-white text-black"
              required
              disabled={isSubmitting}
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full p-3 rounded bg-white text-black"
              required
              disabled={isSubmitting}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              className="w-full p-3 rounded bg-white text-black"
              required
              disabled={isSubmitting}
            />
            <textarea
              placeholder="Message"
              value={formData.comments}
              onChange={(e) => handleInputChange('comments', e.target.value)}
              className="w-full p-3 rounded bg-white text-black"
              rows={4}
              required
              disabled={isSubmitting}
            />

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded">
                {error}
              </div>
            )}

            <Button
              duration={3000}
              borderClassName="h-6 w-12"
              contentStyle={{ backgroundColor: '#01E194' }}
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="text-6xl text-[#01E194] mb-4">✓</div>
            <p className="text-lg text-gray-300">
              Your message has been sent successfully! We'll review your details and get back to you soon.
            </p>
            <Button
              duration={3000}
              borderClassName="h-6 w-12"
              contentStyle={{ backgroundColor: 'transparent', border: '2px solid #01E194' }}
              onClick={resetForm}
              disabled="true"
            >
              Message Sent Successfully
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};