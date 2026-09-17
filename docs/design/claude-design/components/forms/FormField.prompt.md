Wrapper für jedes Eingabefeld. Fehler werden immer textlich erklärt, nie nur über Farbe.

\`\`\`jsx
<FormField label="E-Mail" required htmlFor="email" error="Bitte eine vollständige E-Mail-Adresse angeben.">
  <Input id="email" type="email" invalid />
</FormField>
\`\`\`
