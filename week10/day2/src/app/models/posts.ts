// È molto importante quando abbiamo comunichiamo con un'API (pubblica o privata che sia), creare l'interfaccia specificando i tipi di dati con la quale andremo a lavorare.
//Definisco la struttura dei dati che dovranno viaggiare all'interno di questa applicazione e definisco un modello che rispetta quella struttura

export interface Posts {
  id: number,
  body: string,
  title: string,
  active: boolean
}
