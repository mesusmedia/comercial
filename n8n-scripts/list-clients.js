const clients = [
  { id: 'C124-DraAnnaHOF', name: 'Dra. Anna HOF', seg: 'Saude', inbox_id: 124, sheet_id: '1N2oAsy3PJud__z9MBSFrX9wr1AVfw_b-X-YpgDHIdkQ' },
  { id: 'C123-DrRafaelRocha', name: 'Dr. Rafael Rocha', seg: 'Saude', inbox_id: 123, sheet_id: '1iX55z4aFf7CIzLHD0OVGdZCeCWrMfgK-hE_3LLAkfko' },
  { id: 'C52-DrLucasPitao', name: 'Dr. Lucas Pitao', seg: 'Saude', inbox_id: 52, sheet_id: '1ssM8yBQsSpby-y7FXqs8NmWAAjzsfigxhR4P4J7mfys' },
  { id: 'C63-DrRaphaelMoreira', name: 'Dr. Raphael Moreira', seg: 'Saude', inbox_id: 63, sheet_id: '1hnJ7rl0Hcy2GcWdh3nMN7s9nhBCtahKsHYiQglAF_JE' },
  { id: 'C123-OrgulhoSaoVicente', name: 'Orgulho Sao Vicente', seg: 'Odonto', inbox_id: 123, sheet_id: '1-Xp3qunysH4vw8jrU8wWW0g8eTzLK2pt4jmoSxMDId0' },
  { id: 'C123-OrgulhodeSorrirSantos', name: 'Orgulho de Sorrir Santos', seg: 'Odonto', inbox_id: 123, sheet_id: '1bWYYqtG_2TZ3Zs0r5wkvadSI8gEMAug-9nZUp-jxYuc' },
  { id: 'C123-OrgulhodeSorrirPeruibe', name: 'Orgulho de Sorrir Peruibe', seg: 'Odonto', inbox_id: 123, sheet_id: '17_CS-0I470XfX5sQMLAd0jdQJxng4gFCBkO1eaQx8qA' },
  { id: 'C86-DrWilliamHenrique', name: 'Dr. William Henrique', seg: 'Saude', inbox_id: 86, sheet_id: '14Ss2564FyP_SJeXxTI8OI-5n0tRMlchsJJYFJrxRrxY' },
  { id: 'C135-DraMichelleSantos', name: 'Dra. Michelle Santos', seg: 'Saude', inbox_id: 135, sheet_id: '1pQpLfdt9gCHoRekLRpqFk9pwW2V51ksCN_NTJd1G_zY' },
  { id: 'C136-IntegrareOdontologia', name: 'Integrar Odontologia', seg: 'Odonto', inbox_id: 136, sheet_id: '1TEuyWftgK9iM2rINKEeg-xTAZGVFxibmWZpokn6XCEc' },
  { id: 'C140-EspacoBottega', name: 'Espaco Bottega', seg: 'Estetica', inbox_id: 140, sheet_id: '1AAcB8qjEf-NDM36lPTCOuUst7tsACIvfNe4QgsJf_yM' },
  { id: 'C141-VictorRios', name: 'Victor Rios', seg: 'Saude', inbox_id: 141, sheet_id: '1NQlACxzoHdcjBpH7B2_WDpiMc6uAnznEtiMWHMopHjo' },
  { id: 'C149-ClinicaGGlow', name: 'Clinica Glow', seg: 'Estetica', inbox_id: 149, sheet_id: '1zOwuPWh_g2fLHyfmBfHl1RIPYznzGdf7yGidGnq9qN0' },
  { id: 'EsteticaLosAngelesLeads', name: 'Estetica Los Angeles', seg: 'Estetica', inbox_id: null, sheet_id: '1zBcRC0HaV4JXg1Cix-XBl6cZzQ6044oFMhM3NlTZn7E' },
  { id: 'C150-Lumia', name: 'Lumia', seg: 'Estetica', inbox_id: 150, sheet_id: '1fVoRc627ZhHEBKFIGuGvvtiMDBrO_2D3Wp2mWZlH3Go' },
  { id: 'C155-ClinicaElodonto', name: 'Clinica Elodonto', seg: 'Odonto', inbox_id: 155, sheet_id: '17eesV8xZKnisx9pJo11RndZOcKDwIT6zet8dBfHrPlM' },
  { id: 'C158-VictorianoFaces', name: 'Victoriano Faces', seg: 'Estetica', inbox_id: 158, sheet_id: '12dTGJBLDOdxxPAX0WJJR7R6Zhu_NtZ9xX19VsUvdK8A' },
  { id: 'C157-DraCristianeTiburtino', name: 'Dra. Cristiane Tiburtino', seg: 'Saude', inbox_id: 157, sheet_id: '1bM8T1h-gAZdbOgjWQqkFoJPU_vODLI-ObIt9OtTLGic' },
  { id: 'C162-DrBrunoAraujo', name: 'Dr. Bruno Araujo', seg: 'Saude', inbox_id: 162, sheet_id: '1Vc5IT497LN25AUD8ckoH7CkXJ-72O7ypn8ZxuoAUELg' },
  { id: 'C163-AcessoSaudeCIC', name: 'Acesso Saude CIC', seg: 'Saude', inbox_id: 163, sheet_id: '1SuyRNdYrGZXtBFmB0-Hv91ZICa7geeFHx6Ayiz7jU08' },
  { id: 'C164-DraLea', name: 'Dra. Lea', seg: 'Saude', inbox_id: 164, sheet_id: '1hQu7EiDa6hI0Wr7WVdcSBNg2eiaLucOw6P_mDgNkd0Y' },
  { id: 'C166-Lucasmallmann', name: 'Lucas Mallmann', seg: 'Saude', inbox_id: 166, sheet_id: '1t4KLQdv9bjYcftwMw81rn-WvMs0NW92omQLWR_MkiF4' },
  { id: 'C167-AvanteOdontologiaBH', name: 'Avante Odontologia BH', seg: 'Odonto', inbox_id: 167, sheet_id: '17axePFMIWOUQ3kGJ308w4kptO6PZt_mY9XwjifqozrY' },
  { id: 'C167-AvanteOdontologiaSL', name: 'Avante Odontologia SL', seg: 'Odonto', inbox_id: 167, sheet_id: '1i5nQbdPOPLIQgUjibXCVZwd4JNuLo_AiKsqWEYNBx8k' },
  { id: 'C168-DraMichelleAlves', name: 'Dra. Michelle Alves', seg: 'Saude', inbox_id: 168, sheet_id: '1VMbs_ElKqEs0l_OmEgf354Xo4nW5b7IexbpUki_Wtw0' },
  { id: 'C169-DrKeeynerCorrea', name: 'Dr. Keeyner Correa', seg: 'Saude', inbox_id: 169, sheet_id: '1SmdVcj_MQBpRJXNai8xM9yXW9coOquQEG8HxjDlLbeE' },
  { id: 'C172-DrCaioFigueira', name: 'Dr. Caio Figueira', seg: 'Saude', inbox_id: 172, sheet_id: '1biD55AqQuFQZJlSnUyGvrg3DwKWD-8fLSl5bt2fJiEM' },
  { id: 'C171-DraStefaniRezende', name: 'Dra. Stefani Rezende', seg: 'Saude', inbox_id: 171, sheet_id: '16A--MHKp8IBoZKHGQD21LFN-7WUVL2m_BcZmu0UdEXg' },
  { id: 'C170-DraMariaEduarda', name: 'Dra. Maria Eduarda', seg: 'Saude', inbox_id: 170, sheet_id: '1eHv46erWBLB3w8zg5xP5oN_TWftJ6ELgJZzOlYVVbOY' },
  { id: 'C173-OdontoPrime', name: 'Odonto Prime', seg: 'Odonto', inbox_id: 173, sheet_id: '1wGjMuOTYoIwu9F2wI8atQQaMeLy3iMqaW4gOx2nqM-k' },
  { id: 'C174-EsteticFaceItapetininga', name: 'Estetic Face Itapetininga', seg: 'Estetica', inbox_id: 174, sheet_id: '18V8FQD8Q5lVSoioIkDjnUKYFqminsQWgIWbuc8ImW9E' }
];

const now = new Date();
const currentMonth = now.toLocaleString('pt-BR', { month: 'long' }).toLowerCase();
const currentYear = now.getFullYear();

return clients.map(c => ({
  json: {
    ...c,
    current_month: currentMonth,
    current_year: currentYear
  }
}));
