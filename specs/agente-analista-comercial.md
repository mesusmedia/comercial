# Spec — Agente Analista Comercial L3M

> Criado em 2026-08-22. Planilha modelo mapeada em 2026-08-22.

## Problema

Lucas precisa analisar funil comercial de ~30 clientes manualmente (na unha).
Sem automação, não consegue entregar análise estratégica — só operacional.
Time de gestores não tem visão analítica para reportar gargalos.

## Papel do Agente

Não é gestor comercial do cliente. É **analista de funil** que:
- Detecta onde o lead está sangrando
- Reporta para Lucas e gestores com diagnóstico claro
- Substitui a análise manual diária

## Stack disponível

- n8n (orquestrador)
- Chatwoot (conversas — inbox separado por cliente)
- Evolution API (WhatsApp)
- Kommo CRM (pipeline)
- Windsor.ai API (Meta Ads + Google Ads)
- Google Sheets (planilha padrão por cliente)
- Claude API (análise e classificação)

## Trigger

**Diário às 08h00** — n8n Schedule Trigger (cron: `0 8 * * *`)

## Clientes Ativos

Lista de clientes gerenciados. Para adicionar novo cliente: incluir nova linha com
`{ "id": "CXXX-Nome", "sheet_id": "...", "chatwoot_instance": "1048674045" }`.

A instância Chatwoot padrão para todos os clientes é: **1048674045**

O `inbox_id` de cada cliente corresponde ao número no prefixo do ID:
`C124` → `inbox_id: 124` | `C86` → `inbox_id: 86` | `EsteticaLosAngelesLeads` → verificar manualmente

```json
[
  { "id": "C124-DraAnnaHOF",                  "inbox_id": 124, "sheet_id": "1N2oAsy3PJud__z9MBSFrX9wr1AVfw_b-X-YpgDHIdkQ", "chatwoot_instance": "1048674045" },
  { "id": "C123-DrRafaelRocha",               "inbox_id": 123, "sheet_id": "1iX55z4aFf7CIzLHD0OVGdZCeCWrMfgK-hE_3LLAkfko", "chatwoot_instance": "1048674045" },
  { "id": "C52-DrLucasPitao",                 "inbox_id": 52,  "sheet_id": "1ssM8yBQsSpby-y7FXqs8NmWAAjzsfigxhR4P4J7mfys",  "chatwoot_instance": "1048674045" },
  { "id": "C63-DrRaphaelMoreira",             "inbox_id": 63,  "sheet_id": "1hnJ7rl0Hcy2GcWdh3nMN7s9nhBCtahKsHYiQglAF_JE", "chatwoot_instance": "1048674045" },
  { "id": "C123-OrgulhoSaoVicente",           "inbox_id": 123, "sheet_id": "1-Xp3qunysH4vw8jrU8wWW0g8eTzLK2pt4jmoSxMDId0", "chatwoot_instance": "1048674045" },
  { "id": "C123-OrgulhodeSorrirSantos",       "inbox_id": 123, "sheet_id": "1bWYYqtG_2TZ3Zs0r5wkvadSI8gEMAug-9nZUp-jxYuc",  "chatwoot_instance": "1048674045" },
  { "id": "C123-OrgulhodeSorrirPeruibe",      "inbox_id": 123, "sheet_id": "17_CS-0I470XfX5sQMLAd0jdQJxng4gFCBkO1eaQx8qA",  "chatwoot_instance": "1048674045" },
  { "id": "C86-DrWilliamHenrique",            "inbox_id": 86,  "sheet_id": "14Ss2564FyP_SJeXxTI8OI-5n0tRMlchsJJYFJrxRrxY", "chatwoot_instance": "1048674045" },
  { "id": "C135-DraMichelleSantos",           "inbox_id": 135, "sheet_id": "1pQpLfdt9gCHoRekLRpqFk9pwW2V51ksCN_NTJd1G_zY",  "chatwoot_instance": "1048674045" },
  { "id": "C136-IntegrareOdontologia",        "inbox_id": 136, "sheet_id": "1TEuyWftgK9iM2rINKEeg-xTAZGVFxibmWZpokn6XCEc", "chatwoot_instance": "1048674045" },
  { "id": "C140-EspacoBottega",               "inbox_id": 140, "sheet_id": "1AAcB8qjEf-NDM36lPTCOuUst7tsACIvfNe4QgsJf_yM",  "chatwoot_instance": "1048674045" },
  { "id": "C141-VictorRios",                  "inbox_id": 141, "sheet_id": "1NQlACxzoHdcjBpH7B2_WDpiMc6uAnznEtiMWHMopHjo",  "chatwoot_instance": "1048674045" },
  { "id": "C149-ClinicaGGlow",                "inbox_id": 149, "sheet_id": "1zOwuPWh_g2fLHyfmBfHl1RIPYznzGdf7yGidGnq9qN0",  "chatwoot_instance": "1048674045" },
  { "id": "EsteticaLosAngelesLeads",          "inbox_id": null, "sheet_id": "1zBcRC0HaV4JXg1Cix-XBl6cZzQ6044oFMhM3NlTZn7E",  "chatwoot_instance": "1048674045" },
  { "id": "C150-Lumia",                       "inbox_id": 150, "sheet_id": "1fVoRc627ZhHEBKFIGuGvvtiMDBrO_2D3Wp2mWZlH3Go",  "chatwoot_instance": "1048674045" },
  { "id": "C155-ClinicaElodonto",             "inbox_id": 155, "sheet_id": "17eesV8xZKnisx9pJo11RndZOcKDwIT6zet8dBfHrPlM",  "chatwoot_instance": "1048674045" },
  { "id": "C158-VictorianoFaces",             "inbox_id": 158, "sheet_id": "12dTGJBLDOdxxPAX0WJJR7R6Zhu_NtZ9xX19VsUvdK8A",  "chatwoot_instance": "1048674045" },
  { "id": "C157-DraCristianeTiburtino",       "inbox_id": 157, "sheet_id": "1bM8T1h-gAZdbOgjWQqkFoJPU_vODLI-ObIt9OtTLGic",  "chatwoot_instance": "1048674045" },
  { "id": "C162-DrBrunoAraujo",               "inbox_id": 162, "sheet_id": "1Vc5IT497LN25AUD8ckoH7CkXJ-72O7ypn8ZxuoAUELg",  "chatwoot_instance": "1048674045" },
  { "id": "C163-AcessoSaudeCIC",              "inbox_id": 163, "sheet_id": "1SuyRNdYrGZXtBFmB0-Hv91ZICa7geeFHx6Ayiz7jU08",  "chatwoot_instance": "1048674045" },
  { "id": "C164-DraLea",                      "inbox_id": 164, "sheet_id": "1hQu7EiDa6hI0Wr7WVdcSBNg2eiaLucOw6P_mDgNkd0Y",  "chatwoot_instance": "1048674045" },
  { "id": "C166-Lucasmallmann",               "inbox_id": 166, "sheet_id": "1t4KLQdv9bjYcftwMw81rn-WvMs0NW92omQLWR_MkiF4",  "chatwoot_instance": "1048674045" },
  { "id": "C167-AvanteOdontologiaBH",         "inbox_id": 167, "sheet_id": "17axePFMIWOUQ3kGJ308w4kptO6PZt_mY9XwjifqozrY",  "chatwoot_instance": "1048674045" },
  { "id": "C167-AvanteOdontologiaSL",         "inbox_id": 167, "sheet_id": "1i5nQbdPOPLIQgUjibXCVZwd4JNuLo_AiKsqWEYNBx8k",  "chatwoot_instance": "1048674045" },
  { "id": "C168-DraMichelleAlves",            "inbox_id": 168, "sheet_id": "1VMbs_ElKqEs0l_OmEgf354Xo4nW5b7IexbpUki_Wtw0",  "chatwoot_instance": "1048674045" },
  { "id": "C169-DrKeeynerCorrea",             "inbox_id": 169, "sheet_id": "1SmdVcj_MQBpRJXNai8xM9yXW9coOquQEG8HxjDlLbeE",  "chatwoot_instance": "1048674045" },
  { "id": "C172-DrCaioFigueira",              "inbox_id": 172, "sheet_id": "1biD55AqQuFQZJlSnUyGvrg3DwKWD-8fLSl5bt2fJiEM",  "chatwoot_instance": "1048674045" },
  { "id": "C171-DraStefaniRezende",           "inbox_id": 171, "sheet_id": "16A--MHKp8IBoZKHGQD21LFN-7WUVL2m_BcZmu0UdEXg",  "chatwoot_instance": "1048674045" },
  { "id": "C170-DraMariaEduarda",             "inbox_id": 170, "sheet_id": "1eHv46erWBLB3w8zg5xP5oN_TWftJ6ELgJZzOlYVVbOY",  "chatwoot_instance": "1048674045" },
  { "id": "C173-OdontoPrime",                 "inbox_id": 173, "sheet_id": "1wGjMuOTYoIwu9F2wI8atQQaMeLy3iMqaW4gOx2nqM-k",  "chatwoot_instance": "1048674045" },
  { "id": "C174-EsteticFaceItapetininga",     "inbox_id": 174, "sheet_id": "18V8FQD8Q5lVSoioIkDjnUKYFqminsQWgIWbuc8ImW9E",  "chatwoot_instance": "1048674045" }
]
```

## Métricas por Cliente (Chatwoot)

As métricas precisam ser validadas no Chatwoot. Adicionar filtro por período/data.
Por padrão: primeiro dia do mês atual até o dia atual.

### Métricas coletadas

| Métrica           | Fonte      | Descrição                                    |
| ----------------- | ---------- | -------------------------------------------- |
| Leads             | Chatwoot   | Total de conversas iniciadas no período       |
| Contato           | Chatwoot   | Leads que receberam resposta (primeiro touch) |
| Agendamento       | Chatwoot   | Leads que agendaram consulta                 |
| Comparecimento    | Chatwoot   | Leads que compareceram à consulta            |
| Venda             | Chatwoot   | Leads que fecharam contrato/pagamento        |
| Alertas           | Chatwoot   | Leads sem resposta há mais de X horas         |
| Tempo resposta    | Chatwoot   | Média de tempo de primeira resposta (horas)  |

### Classificação de saúde

| Status    | Critério                                                        |
| --------- | --------------------------------------------------------------- |
| Saudável  | Sem alertas, agendamento ≥ 40%, comparecimento ≥ 65%, venda ≥ 50% |
| Atenção   | 1-2 alertas OU agendamento 25-39% OU comparecimento 50-64%       |
| Gargalo   | ≥ 3 alertas OU agendamento < 25% OU comparecimento < 50%         |
