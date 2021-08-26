import { useState } from "react";
import { IntlProvider } from "react-intl";

import Layout from "./components/Layout/Layout";
import locales from "./translations/locales.js";
// import themes from "./themes/themes";

import { getFromLS } from "./utils/localeStorage";
// import { createTheming } from "@callstack/react-theme-provider";

const setMessages = (locale) => {
  if (!locales.hasOwnProperty(locale)) {
    return;
  }
  return locales[locale];
};

const App = ({ theme }) => {
  // const { ThemeProvider, withTheme, useTheme } = createTheming(themes.light);
  const savedLocale = getFromLS("localeLanguage");
  // const savedTheme = getFromLS("theme");

  const [locale, setLocale] = useState(savedLocale || "en");
  // const [theme, setTheme] = useState({ theme: themes.light });
  return (
    <IntlProvider locale={locale} messages={setMessages(locale)}>
      <Layout setLocale={setLocale}></Layout>
    </IntlProvider>
  );
};

export default App;
