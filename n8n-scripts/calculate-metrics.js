const client = $input.first().json;
const rows = client.rows || [];
const now = new Date();
const currentMonth = now.toLocaleString('pt-BR', { month: 'long' }).toLowerCase();
const currentYear = now.getFullYear();

const monthNames = {
  'janeiro': 0, 'fevereiro': 1, 'marco': 2, 'abril': 3,
  'maio': 4, 'junho': 5, 'julho': 6, 'agosto': 7,
  'setembro': 8, 'outubro': 9, 'novembro': 10, 'dezembro': 11
};

const monthRows = rows.filter(r => {
  if (!r.mes) return false;
  const mesLower = r.mes.toLowerCase().trim();
  return mesLower.includes(currentMonth) || mesLower.includes(String(now.getMonth() + 1).padStart(2, '0'));
});

const totalLeads = monthRows.length;
const contatoFeito = monthRows.filter(r => r.contato && r.contato.toLowerCase().includes('contato feito')).length;
const agendados = monthRows.filter(r => r.agendou && r.agendou.trim() !== '').length;
const compareceram = monthRows.filter(r => r.compareceu && r.compareceu.trim() !== '').length;
const fechados = monthRows.filter(r => r.ganhou && r.ganhou.trim() !== '').length;
const perdidos = monthRows.filter(r => r.data_perdido && r.data_perdido.trim() !== '').length;

const pct = (v, t) => t > 0 ? Math.round((v / t) * 100) : 0;

let totalRespTime = 0;
let respCount = 0;
for (const r of monthRows) {
  if (r.data && r.data_contato) {
    try {
      const entrada = new Date(r.data);
      const contato = new Date(r.data_contato);
      if (!isNaN(entrada) && !isNaN(contato)) {
        totalRespTime += (contato - entrada) / 3600000;
        respCount++;
      }
    } catch (e) {}
  }
}

const status = (() => {
  const taxaAgend = pct(agendados, totalLeads);
  const taxaComp = pct(compareceram, agendados);
  const taxaVenda = pct(fechados, compareceram);

  if (taxaAgend >= 40 && taxaComp >= 70 && taxaVenda >= 50 && perdidos === 0) return 'saudavel';
  if (taxaAgend < 25 || taxaComp < 50 || taxaVenda < 30 || perdidos >= 3) return 'gargalo';
  return 'atencao';
})();

return [{
  json: {
    id: client.id,
    name: client.name,
    seg: client.seg,
    leads: totalLeads,
    contato: contatoFeito,
    agendados: agendados,
    compareceram: compareceram,
    fechados: fechados,
    perdidos: perdidos,
    pct_agend: pct(agendados, totalLeads),
    pct_comp: pct(compareceram, agendados),
    pct_venda: pct(fechados, compareceram),
    resp_h: respCount > 0 ? Math.round((totalRespTime / respCount) * 10) / 10 : 0,
    status: status,
    _debug: {
      total_rows: rows.length,
      month_rows: monthRows.length,
      current_month: currentMonth
    }
  }
}];
