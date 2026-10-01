const paths = {
  email: 'M3 5h18v14H3z M3 6l9 7 9-7',
  resume: 'M6 3h8l4 4v14H6z M14 3v5h4 M9 12h6 M9 16h6',
  top: 'M12 20V4 M5 11l7-7 7 7',
}

export default function ContactIcon({ name }) {
  // Drawn locally so this small social link does not load an external icon package.
  if (name === 'linkedin') {
    return <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M4.8 3h14.4A1.8 1.8 0 0 1 21 4.8v14.4a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 19.2V4.8A1.8 1.8 0 0 1 4.8 3Zm2.4 6.7V18h2.6V9.7H7.2Zm1.3-4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm3.1 4V18h2.6v-4.1c0-1.1.2-2.2 1.6-2.2s1.4 1.3 1.4 2.3v4h2.6v-4.6c0-2.4-.5-4-3.1-4a2.7 2.7 0 0 0-2.5 1.4V9.7h-2.6Z" fillRule="evenodd" clipRule="evenodd" /></svg>
  }
  return <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={paths[name]} /></svg>
}
