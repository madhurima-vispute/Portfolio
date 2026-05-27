import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Quick validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please populate all required fields.');
      return;
    }

    setStatus('sending');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS variables are not fully configured in the environment.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err?.message || err?.text || 'Failed to send your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-800/20 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-semibold mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 mb-4 font-sans">
            Get In Touch
          </h2>
          <p className="text-sm text-zinc-300 font-light max-w-xl leading-relaxed">
            Have an exciting opportunity or a project to discuss? Drop me a line below or reach out directly.
          </p>
        </div>

        {/* Form & Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-obsidian-950/40 border border-zinc-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-md relative flex flex-col justify-between text-left">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] font-mono font-bold tracking-wider text-zinc-300 uppercase">
                    Full Name <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'sending' || status === 'success'}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-obsidian-900 text-xs text-zinc-200 placeholder-zinc-500 focus:border-emerald-500/40 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 outline-none"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-[10px] font-mono font-bold tracking-wider text-zinc-300 uppercase">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={status === 'sending' || status === 'success'}
                    placeholder="Acme Corp"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-obsidian-900 text-xs text-zinc-200 placeholder-zinc-500 focus:border-emerald-500/40 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[10px] font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  Email Address <span className="text-emerald-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'sending' || status === 'success'}
                  placeholder="jane.doe@company.com"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-obsidian-900 text-xs text-zinc-200 placeholder-zinc-500 focus:border-emerald-500/40 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 outline-none"
                  required
                />
              </div>

              {/* Row 3: Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  Message <span className="text-emerald-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'sending' || status === 'success'}
                  placeholder="Describe the opportunity, role requirements, or questions you have..."
                  className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-obsidian-900 text-xs text-zinc-200 placeholder-zinc-500 focus:border-emerald-500/40 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 outline-none resize-none"
                  required
                />
              </div>

              {/* Status Alert Panels */}
              {status === 'success' && (
                <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-xs text-emerald-400 flex items-center gap-2.5 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20 text-xs text-red-400 flex items-center gap-2.5 animate-fade-in">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-800 disabled:text-zinc-500 text-obsidian-950 font-bold tracking-wide transition-all shadow-[0_4px_20px_-5px_rgba(16,185,129,0.2)] disabled:shadow-none hover:scale-[1.01]"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-obsidian-950 border-t-transparent animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left gap-8">
            <div className="flex flex-col gap-6">
              {/* Direct Info Header */}
              <div>
                <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase mb-2">
                  Direct Connections
                </h3>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  You can also reach out to me directly through any of these platforms.
                </p>
              </div>

              {/* Connection Cards */}
              <div className="flex flex-col gap-4">
                {/* Email card */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=madhurima.v03@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-obsidian-900/30 hover:bg-obsidian-900/60 border border-zinc-800/20 hover:border-zinc-800/60 flex items-center gap-4 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-obsidian-950 border border-zinc-800/40">
                    <Mail className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                      Email
                    </div>
                    <div className="text-xs font-semibold text-zinc-200">
                      madhurima.v03@gmail.com
                    </div>
                  </div>
                </a>

                {/* Phone card */}
                <a
                  href="tel:+919152698356"
                  className="p-4 rounded-xl bg-obsidian-900/30 hover:bg-obsidian-900/60 border border-zinc-800/20 hover:border-zinc-800/60 flex items-center gap-4 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-obsidian-950 border border-zinc-800/40">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                      Mobile
                    </div>
                    <div className="text-xs font-semibold text-zinc-200">
                      (+91) 9152698356
                    </div>
                  </div>
                </a>

                {/* LinkedIn Card */}
                <a
                  href="https://www.linkedin.com/in/madhurima-v-a86286226?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-obsidian-900/30 hover:bg-obsidian-900/60 border border-zinc-800/20 hover:border-zinc-800/60 flex items-center gap-4 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-obsidian-950 border border-zinc-800/40">
                    <Linkedin className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                      LinkedIn
                    </div>
                    <div className="text-xs font-semibold text-zinc-200">
                      madhurima-v
                    </div>
                  </div>
                </a>

                {/* GitHub Card */}
                <a
                  href="https://github.com/madhurima-vispute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-obsidian-900/30 hover:bg-obsidian-900/60 border border-zinc-800/20 hover:border-zinc-800/60 flex items-center gap-4 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-obsidian-950 border border-zinc-800/40">
                    <Github className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                      GitHub
                    </div>
                    <div className="text-xs font-semibold text-zinc-200">
                      madhurima-vispute
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mt-1.5 flex-shrink-0" />
              <div className="text-xs leading-relaxed text-zinc-300 font-light">
                <span className="font-bold text-zinc-200">Availability:</span> Open to new opportunities. Let's connect!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
