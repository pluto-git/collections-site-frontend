import { useState } from "react";
import { IntlProvider } from "react-intl";

import Layout from "./components/Layout/Layout";
import locales from "./translations/locales.js";

import { getFromLS } from "./utils/localeStorage";

const setMessages = (locale) => {
  if (!locales.hasOwnProperty(locale)) {
    return;
  }
  return locales[locale];
};

const App = () => {
  const savedLocale = getFromLS("localeLanguage");
  const [locale, setLocale] = useState(savedLocale || "en");

  return (
    <IntlProvider locale={locale} messages={setMessages(locale)}>
      <Layout setLocale={setLocale}></Layout>
    </IntlProvider>
  );
};

export default App;
