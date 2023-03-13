export class TimeConverter {
  public convertTimeSteampToBrazilianDateTime(start: number): string {
    const date = new Date(start * 1000); // converte para milissegundos

    // Ajusta para o fuso horário de Brasília (UTC-03:00)
    date.setUTCHours(date.getUTCHours() - 3);

    // Obtém os valores de data e hora em horário de Brasília
    const brYear = date.getFullYear();
    const brMonth = date.getMonth() + 1;
    const brDay = date.getDate();

    return `${brDay}/${brMonth}/${brYear}`;
  }
}
