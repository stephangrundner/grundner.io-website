Login für interne Werkzeuge und Kundenportale. Fehler immer textlich, nie nur farbig.

\`\`\`jsx
<LoginForm
  title="Anmelden"
  subtitle="Zugang zum Projektbereich"
  error={err}
  onSubmit={values => signIn(values)}
/>
\`\`\`
