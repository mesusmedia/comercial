const client = $input.first().json;
const conversations = client.allConversations || [];
const now = new Date();
const from = new Date(now.getFullYear(), now.getMonth(), 1);

let leads = 0, contato = 0, agendamento = 0, comparecimento = 0, venda = 0, alerts = 0;
let totalRespTime = 0, respCount = 0;

for (const conv of conversations) {
  const created = new Date(conv.created_at);
  if (created < from) continue;
  leads++;

  if (conv.last_non_activity_at && conv.last_non_activity_at !== conv.created_at) {
    contato++;
  }

  if (conv.status !== 'resolved' && conv.last_non_activity_at) {
    const hoursSince = (now - new Date(conv.last_non_activity_at)) / 3600000;
    if (hoursSince > 24) alerts++;
  }

  if (conv.first_reply_created_at) {
    totalRespTime += (new Date(conv.first_reply_created_at) - created) / 3600000;
    respCount++;
  }

  const tags = (conv.tags || []).map(t => t.toLowerCase());
  if (tags.some(t => ['agendou','agendamento','scheduled','confirmou','agendado'].includes(t))) agendamento++;
  if (tags.some(t => ['compareceu','comparecimento','attended'].includes(t))) comparecimento++;
  if (tags.some(t => ['vendido','venda','sold','pagou','fechou'].includes(t))) venda++;
}

const pct = (v, t) => t > 0 ? Math.round((v / t) * 100) : 0;
return [{ json: {
  id: client.id, name: client.name, seg: client.seg,
  leads, contato, pct_agend: pct(agendamento, leads), pct_comp: pct(comparecimento, leads),
  pct_venda: pct(venda, leads), alerts, resp_h: respCount > 0 ? Math.round((totalRespTime / respCount) * 10) / 10 : 0,
  _debug: { total_convs: conversations.length, pages_fetched: Math.ceil(conversations.length / 30), inbox_id: client.inbox_id }
}}];
