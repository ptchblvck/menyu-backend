// Purpose: Translate text from one language to another.

// TODO - The translation needs to happen before the input from the user is saved to the database. Save the translated text also in the database. The translation should be done using the Google Translate API.

function translateFromLangToLang<TLang>(from: TLang, to: TLang, text: string) {
  return {
    from,
    to,
    translate: (text: string) => {
      // logic to translate text
    },
  };
}
