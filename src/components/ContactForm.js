import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation('contact');  // using 'contact' namespace

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // You can connect this to EmailJS or any backend here
    alert(t('form.alertThankYou'));   // translated alert message
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  if (submitted) return <p>{t('form.thankYouMessage')}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {t('form.name')}<br />
        <input name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />
      <label>
        {t('form.email')}<br />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        {t('form.message')}<br />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />
      </label>
      <br />
      <button type="submit">{t('form.submit')}</button>
    </form>
  );
};

export default ContactForm;
