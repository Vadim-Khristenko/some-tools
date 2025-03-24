import React, { useState, useEffect } from 'react';
import './styles.css';

const loadTranslations = async (language) => {
  const response = await fetch(`/translations/${language}.json`);
  const translations = await response.json();
  return translations;
};

const App = () => {
  const [translations, setTranslations] = useState({});
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const fetchTranslations = async () => {
      const loadedTranslations = await loadTranslations(language);
      setTranslations(loadedTranslations);
    };

    fetchTranslations();
  }, [language]);

  const t = (key) => translations[key] || key;

  return (
    <div>
      <h1>{t('happy_march_8th')}</h1>
      <p>{t('wishing_you_a_wonderful_international_womens_day')}</p>
    </div>
  );
};

export default App;
