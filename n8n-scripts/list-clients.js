// ⚠️ COLE SEU TOKEN DO CHATWOOT AQUI ⚠️
const API_TOKEN = 'COLE_SEU_TOKEN_AQUI';

const clients = [
  { id: 'C124-DraAnnaHOF', name: 'Dra. Anna HOF', seg: 'Saúde', inbox_id: 124 },
  { id: 'C123-DrRafaelRocha', name: 'Dr. Rafael Rocha', seg: 'Saúde', inbox_id: 123 },
  { id: 'C52-DrLucasPitao', name: 'Dr. Lucas Pitão', seg: 'Saúde', inbox_id: 52 },
  { id: 'C63-DrRaphaelMoreira', name: 'Dr. Raphael Moreira', seg: 'Saúde', inbox_id: 63 },
  { id: 'C123-OrgulhoSaoVicente', name: 'Orgulho São Vicente', seg: 'Odonto', inbox_id: 123 },
  { id: 'C123-OrgulhodeSorrirSantos', name: 'Orgulho de Sorrir Santos', seg: 'Odonto', inbox_id: 123 },
  { id: 'C123-OrgulhodeSorrirPeruibe', name: 'Orgulho de Sorrir Peruíbe', seg: 'Odonto', inbox_id: 123 },
  { id: 'C135-DraMichelleSantos', name: 'Dra. Michelle Santos', seg: 'Saúde', inbox_id: 135 },
  { id: 'C136-IntegrareOdontologia', name: 'Integrar Odontologia', seg: 'Odonto', inbox_id: 136 },
  { id: 'C140-EspacoBottega', name: 'Espaço Bottega', seg: 'Estética', inbox_id: 140 },
  { id: 'C141-VictorRios', name: 'Victor Rios', seg: 'Saúde', inbox_id: 141 },
  { id: 'C149-ClinicaGGlow', name: 'Clínica Glow', seg: 'Estética', inbox_id: 149 },
  { id: 'EsteticaLosAngelesLeads', name: 'Estética Los Angeles', seg: 'Estética', inbox_id: null },
  { id: 'C150-Lumia', name: 'Lumia', seg: 'Estética', inbox_id: 150 },
  { id: 'C155-ClinicaElodonto', name: 'Clínica Elodonto', seg: 'Odonto', inbox_id: 155 },
  { id: 'C158-VictorianoFaces', name: 'Victoriano Faces', seg: 'Estética', inbox_id: 158 },
  { id: 'C157-DraCristianeTiburtino', name: 'Dra. Cristiane Tiburtino', seg: 'Saúde', inbox_id: 157 },
  { id: 'C163-AcessoSaudeCIC', name: 'Acesso Saúde CIC', seg: 'Saúde', inbox_id: 163 },
  { id: 'C164-DraLea', name: 'Dra. Léa', seg: 'Saúde', inbox_id: 164 },
  { id: 'C166-Lucasmallmann', name: 'Lucas Mallmann', seg: 'Saúde', inbox_id: 166 },
  { id: 'C168-DraMichelleAlves', name: 'Dra. Michelle Alves', seg: 'Saúde', inbox_id: 168 },
  { id: 'C169-DrKeeynerCorrea', name: 'Dr. Keeyner Correa', seg: 'Saúde', inbox_id: 169 },
  { id: 'C172-DrCaioFigueira', name: 'Dr. Caio Figueira', seg: 'Saúde', inbox_id: 172 },
  { id: 'C171-DraStefaniRezende', name: 'Dra. Stefani Rezende', seg: 'Saúde', inbox_id: 171 },
  { id: 'C170-DraMariaEduarda', name: 'Dra. Maria Eduarda', seg: 'Saúde', inbox_id: 170 },
  { id: 'C173-OdontoPrime', name: 'Odonto Prime', seg: 'Odonto', inbox_id: 173 },
  { id: 'C174-EsteticFaceItapetininga', name: 'Estetic Face Itapetininga', seg: 'Estética', inbox_id: 174 }
];

const now = new Date();
const from = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
const to = now.toISOString().split('T')[0];

return clients.map(c => ({
  json: { ...c, date_from: from, date_to: to }
}));
