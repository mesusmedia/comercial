const client = $input.first().json;
const sheetUrl = `https://docs.google.com/spreadsheets/d/${client.sheet_id}/gviz/tq?tqx=out:json&sheet=CRM`;

try {
  const response = await this.helpers.httpRequest({
    method: 'GET',
    url: sheetUrl,
    returnFullResponse: true
  });

  let raw = response.body;
  if (typeof raw === 'string') {
    raw = raw.replace(/^\/\*O_o\*\/\n/, '').replace(/^google\.visualization\.Query\.setResponse\(/, '').replace(/\);?\s*$/, '');
  }
  const data = JSON.parse(raw);
  const rows = data.table?.rows || [];

  const parsedRows = rows.map(row => {
    const c = row.c || [];
    return {
      data: c[0]?.v || null,
      hora: c[1]?.v || null,
      nome: c[2]?.v || null,
      numero: c[3]?.v || null,
      mensagem: c[4]?.v || null,
      status: c[5]?.v || null,
      origem: c[6]?.v || null,
      suborigem: c[7]?.v || null,
      mes: c[8]?.v || null,
      contato: c[9]?.v || null,
      agendou: c[10]?.v || null,
      data_agendamento: c[11]?.v || null,
      compareceu: c[12]?.v || null,
      ganhou: c[13]?.v || null,
      motivo_perda: c[14]?.v || null,
      receita_consultas: c[15]?.v || null,
      receita_tratamentos: c[16]?.v || null,
      observacoes: c[17]?.v || null,
      campanha: c[18]?.v || null,
      conjunto: c[19]?.v || null,
      anuncio: c[20]?.v || null,
      criativo: c[21]?.v || null,
      source_id: c[22]?.v || null,
      plataforma: c[23]?.v || null,
      instancia: c[24]?.v || null,
      filtros: c[25]?.v || null,
      data_agendado: c[26]?.v || null,
      data_compareceu: c[27]?.v || null,
      data_ganho: c[28]?.v || null,
      data_perdido: c[29]?.v || null,
      data_contato: c[30]?.v || null
    };
  });

  return [{ json: { ...client, rows: parsedRows, total_rows: parsedRows.length } }];
} catch (e) {
  return [{ json: { ...client, rows: [], total_rows: 0, error: e.message } }];
}
