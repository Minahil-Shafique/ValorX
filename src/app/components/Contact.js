"use client";

import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="block w-full p-4 mb-4 bg-gray-800 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="block w-full p-4 mb-4 bg-gray-800 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          className="block w-full p-4 mb-4 bg-gray-800 rounded h-40"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-600 py-3 px-8 rounded text-lg">
          Send Message
        </button>
        {status && <p className="mt-4">{status}</p>}
      </form>
    </section>
  );
}
