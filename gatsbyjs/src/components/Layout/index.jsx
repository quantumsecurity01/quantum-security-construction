import React from 'react';

import './layout.css';
import LanguageProvider from '@deadline/common/LanguageSwitcher/context/language.provider';

const Layout = ({ children }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

export { Layout };
