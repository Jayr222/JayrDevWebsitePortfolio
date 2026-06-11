import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link, Mail, MapPin, Phone } from 'lucide-react';
import Container from '../layout/Container';
import Button from '../common/Button';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('EmailJS is not configured yet. Add your EmailJS IDs to .env.');
      return;
    }

    setIsSending(true);
    setStatus('Sending message...');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: 'jayragamata68@gmail.com',
        },
        { publicKey },
      );

      setForm(initialForm);
      setStatus('Message sent. Thanks for reaching out.');
    } catch {
      setStatus('Message failed to send. Please try again or email me directly.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="bg-green py-12 text-cream">
      <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.8fr_1.15fr] lg:items-center">
        <div className="grid overflow-hidden rounded-xl border border-white/20 bg-white/8 md:grid-cols-[0.86fr_1fr]">
          <div className="relative min-h-72 bg-[#d9c7aa]">
            <img
              src="/images/avatar.png"
              alt="Jayr Agamata portrait"
              className="h-full min-h-72 w-full object-cover object-[50%_18%] grayscale"
            />
          </div>
          <div className="relative p-8">
            <h2 className="font-serif text-5xl font-black leading-[1.02]">
              Let&apos;s Work
              <br />
              Together
            </h2>
            <p className="mt-5 text-sm leading-7 text-cream/72">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision.
            </p>
            <Button href="#contact-form" variant="gold" className="mt-7 min-h-11 rounded-lg px-6 text-xs">
              Contact Me
            </Button>
          </div>
        </div>
        <div className="grid gap-7">
          {[
            { icon: Mail, label: 'Email', value: 'jayragamata68@gmail.com' },
            { icon: Phone, label: 'Phone', value: 'Available on request' },
            { icon: MapPin, label: 'Location', value: 'Philippines / Remote' },
            { icon: Link, label: 'Available for', value: 'Freelance & Full-time' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-4">
              <Icon className="mt-0.5 h-5 w-5 text-gold" />
              <div>
                <p className="text-xs font-bold">{label}</p>
                <p className="mt-1 text-xs text-cream/65">{value}</p>
              </div>
            </div>
          ))}
        </div>
        <form id="contact-form" className="scroll-mt-24 grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              className="min-h-12 rounded-lg border border-white/20 bg-green-deep/35 px-4 text-sm outline-none placeholder:text-cream/45 focus:border-gold"
              name="name"
              onChange={updateField}
              placeholder="Your Name"
              required
              value={form.name}
            />
            <input
              className="min-h-12 rounded-lg border border-white/20 bg-green-deep/35 px-4 text-sm outline-none placeholder:text-cream/45 focus:border-gold"
              name="email"
              onChange={updateField}
              placeholder="Your Email"
              required
              type="email"
              value={form.email}
            />
          </div>
          <textarea
            className="min-h-40 rounded-lg border border-white/20 bg-green-deep/35 px-4 py-4 text-sm outline-none placeholder:text-cream/45 focus:border-gold"
            name="message"
            onChange={updateField}
            placeholder="Your Message"
            required
            value={form.message}
          />
          <div className="flex flex-wrap items-center gap-4">
            <Button
              type="submit"
              variant="gold"
              className="w-fit min-h-11 rounded-lg px-7 text-xs disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </Button>
            {status ? <p className="text-xs text-cream/65">{status}</p> : null}
          </div>
        </form>
      </Container>
    </section>
  );
}
