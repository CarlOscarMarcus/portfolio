import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const { t } = useTranslation('contact');

  return (
    <section>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>

      <ContactForm />
    </section>
  );
};

export default Contact;
