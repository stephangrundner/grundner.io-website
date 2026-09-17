Für Terminbuchung, Bestätigungen und Detailansichten in Apps. Ein Schatten ist hier die einzige erlaubte Ausnahme vom schattenlosen System.

\`\`\`jsx
<Dialog open={open} onClose={close} label="ERSTGESPRÄCH" title="Termin vorschlagen"
  footer={<><Button variant="secondary" onClick={close}>Abbrechen</Button><Button>Anfragen</Button></>}>
  <DatePicker value={d} onChange={setD} />
</Dialog>
\`\`\`
