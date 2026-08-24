export default function Home() {
  return (
    <>
      {/* Header - Simple and clean */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-accent">💧</span>
              <h1 className="text-xl font-bold text-primary-dark">Los Angeles Estética e Bem-Estar</h1>
            </div>
            <div className="hidden md:block">
              <a href="https://wa.me/+5541997850163?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20tratamentos%20corporais%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es."
                 className="btn-whatsapp"
                 target="_blank"
                 rel="noopener noreferrer">
                💬 FALAR NO WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-160px)]">
        {/* Hero Section */}
        <section className="bg-primary-light py-12">
          <div className="container mx-auto text-center">
            <h1 className="mb-6">Tratamento para gordura localizada, flacidez e celulite</h1>
            <p className="text-lg text-primary-dark/80 max-w-2xl mx-auto">
              Na Los Angeles Estética e Bem-Estar, você encontra protocolos corporais personalizados,
              combinando diferentes tecnologias de acordo com os seus objetivos.
            </p>
            <div className="mt-8">
              <a href="https://wa.me/+5541997850163?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20tratamentos%20corporais%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es."
                 className="btn-whatsapp"
                 target="_blank"
                 rel="noopener noreferrer">
                QUERO CONHECER OS PROTOCOLOS
              </a>
            </div>
            <p className="mt-4 text-sm text-primary-dark/60">
              📍 Avenida Sete de Setembro, 6490 – Batel, Curitiba
            </p>
          </div>
        </section>

      {/* Section 2: 3 Cards - Problems */}
        <section className="bg-white py-12">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-primary-dark">
              Cada corpo tem uma necessidade diferente. O tratamento também deve ter.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Gordura Localizada */}
              <div className="card text-center">
                <h3 className="text-lg font-semibold text-primary-dark mb-4">
                  GORDURA LOCALIZADA
                </h3>
                <p className="text-primary-dark/70">
                  Aquela gordura que permanece mesmo com alimentação equilibrada e rotina de exercícios.
                </p>
              </div>

              {/* Card 2: Flacidez */}
              <div className="card text-center">
                <h3 className="text-lg font-semibold text-primary-dark mb-4">
                  FLACIDEZ
                </h3>
                <p className="text-primary-dark/70">
                  Perda de firmeza e sustentação que pode deixar a pele com aspecto menos uniforme.
                </p>
              </div>

              {/* Card 3: Celulite */}
              <div className="card text-center">
                <h3 className="text-lg font-semibold text-primary-dark mb-4">
                  CELULITE
                </h3>
                <p className="text-primary-dark/70">
                  Alterações na aparência da pele que podem incomodar e afetar sua confiança.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Package Options */}
        <section className="bg-primary-light py-12">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-primary-dark">
              Conheça algumas das nossas opções para o verão
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Package 1: Brisa do Verão */}
              <div className="card">
                <h3 className="text-xl font-semibold text-accent mb-4">
                  Brisa do Verão
                </h3>
                <p className="font-medium mb-2">12 sessões | 3 tecnologias</p>
                <p className="text-primary-dark/60">
                  Foco no cuidado corporal completo.
                </p>
              </div>

              {/* Package 2: Beira Mar */}
              <div className="card">
                <h3 className="text-xl font-semibold text-accent mb-4">
                  Beira Mar
                </h3>
                <p className="font-medium mb-2">10 sessões | 2 tecnologias</p>
                <p className="text-primary-dark/60">
                  Combinação de tratamentos para diferentes necessidades corporais.
                </p>
              </div>

              {/* Package 3: Onda de Frescor */}
              <div className="card">
                <h3 className="text-xl font-semibold text-accent mb-4">
                  Onda de Frescor
                </h3>
                <p className="font-medium mb-2">12 sessões | tecnologias combinadas</p>
                <p className="text-primary-dark/60">
                  Uma proposta completa para cuidado corporal.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a href="https://wa.me/+5541997850163?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20tratamentos%20corporais%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es."
                 className="btn-success"
                 target="_blank"
                 rel="noopener noreferrer">
                VER OPÇÕES E CONDIÇÕES
              </a>
            </div>
          </div>
        </section>

        {/* Section 4: Technologies */}
        <section className="bg-white py-12">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-primary-dark">
              Tecnologias combinadas para diferentes objetivos
            </h2>
            <p className="text-center text-primary-dark/70 mb-8 max-w-2xl mx-auto">
              Dependendo da avaliação e do objetivo, os protocolos podem combinar tecnologias como:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-accent/10 text-accent px-3 py-1 rounded text-sm">CmSlim</span>
              <span className="bg-accent/10 text-accent px-3 py-1 rounded text-sm">Vela Shape</span>
              <span className="bg-accent/10 text-accent px-3 py-1 rounded text-sm">Cellutec</span>
              <span className="bg-accent/10 text-accent px-3 py-1 rounded text-sm">Exilis</span>
              <span className="bg-accent/10 text-accent px-3 py-1 rounded text-sm">Legacy</span>
              <span className="bg-accent/10 text-accent px-3 py-1 rounded text-sm">Transform X</span>
              <span className="bg-accent/10 text-accent px-3 py-1 rounded text-sm">Enzimas</span>
            </div>
            <p className="mt-6 text-center text-primary-dark/60 text-sm max-w-2xl mx-auto">
              A indicação da tecnologia e da combinação de tratamentos é realizada de acordo com a avaliação e as necessidades individuais.
            </p>
          </div>
        </section>

        {/* Section 5: Final CTA */}
        <section className="bg-primary-light py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary-dark mb-6">
              Pronta para começar seu projeto de verão?
            </h2>
            <p className="text-primary-dark/70 mb-8 max-w-2xl mx-auto">
              Cuide da gordura localizada, flacidez, celulite e do contorno corporal com um protocolo personalizado para as suas necessidades.
            </p>
            <p className="text-primary-dark/60 mb-8 text-sm max-w-2xl mx-auto">
              Fale com a Los Angeles Estética e Bem-Estar e descubra as opções disponíveis.
            </p>
            <a href="https://wa.me/+5541997850163?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20tratamentos%20corporais%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es."
               className="btn-whatsapp"
               target="_blank"
               rel="noopener noreferrer">
              QUERO CONHECER MEU PROTOCOLO
            </a>
            <p className="mt-4 text-sm text-primary-dark/60">
              📍 Avenida Sete de Setembro, 6490 – Batel, Curitiba
            </p>
          </div>
        </section>
      </main>

      {/* FAQ Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-primary-dark">
            FAQ
          </h2>
          <p className="text-center text-primary-dark/60 mb-6">
            Essa parte pode ajudar bastante no Google porque responde objeções e também aumenta a quantidade de conteúdo relevante da página.
          </p>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="border-b border-gray-light pb-4 last:mb-0">
              <h3 className="text-lg font-semibold mb-2 text-primary-dark">
                Qual protocolo é indicado para gordura localizada?
              </h3>
              <p className="text-primary-dark/70">
                A indicação depende da avaliação e das características de cada pessoa. A clínica trabalha com diferentes tecnologias e combinações que podem ser utilizadas em protocolos corporais personalizados.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="border-b border-gray-light pb-4 last:mb-0">
              <h3 className="text-lg font-semibold mb-2 text-primary-dark">
                Vocês têm tratamento para flacidez?
              </h3>
              <p className="text-primary-dark/70">
                Sim. Existem diferentes tecnologias e combinações voltadas ao cuidado com a firmeza e a qualidade da pele. A melhor opção é definida após avaliação.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="border-b border-gray-light pb-4 last:mb-0">
              <h3 className="text-lg font-semibold mb-2 text-primary-dark">
                Existe tratamento para celulite?
              </h3>
              <p className="text-primary-dark/70">
                Sim. A clínica possui diferentes recursos que podem ser utilizados em protocolos direcionados ao cuidado com a aparência da celulite, de acordo com cada caso.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="border-b border-gray-light pb-4 last:mb-0">
              <h3 className="text-lg font-semibold mb-2 text-primary-dark">
                Preciso fazer vários tratamentos?
              </h3>
              <p className="text-primary-dark/70">
                Não necessariamente. A quantidade e a combinação de sessões dependem do protocolo indicado para o seu objetivo.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="border-b border-gray-light pb-4 last:mb-0">
              <h3 className="text-lg font-semibold mb-2 text-primary-dark">
                Os protocolos são personalizados?
              </h3>
              <p className="text-primary-dark/70">
                Sim. A proposta é avaliar suas necessidades e objetivos para definir a combinação de tratamentos mais adequada.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="border-b border-gray-light pb-4 last:mb-0">
              <h3 className="text-lg font-semibold mb-2 text-primary-dark">
                Onde fica a Los Angeles Estética e Bem-Estar?
              </h3>
              <p className="text-primary-dark/70">
                Estamos na Avenida Sete de Setembro, 6490 – Batel, Curitiba.
              </p>
            </div>

            {/* FAQ Item 7 */}
            <div className="border-b border-gray-light pb-4 last:mb-0">
              <h3 className="text-lg font-semibold mb-2 text-primary-dark">
                Como faço para saber qual protocolo é indicado para mim?
              </h3>
              <p className="text-primary-dark/70">
                Clique no botão de contato e fale com nossa equipe para solicitar informações e agendar sua avaliação.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a href="https://wa.me/+5541997850163?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20tratamentos%20corporais%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es."
               className="btn-whatsapp"
               target="_blank"
               rel="noopener noreferrer">
              QUERO CONHECER MEU PROTOCOLO
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2026 Los Angeles Estética e Bem-Estar. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/60 mt-2">
            📍 Avenida Sete de Setembro, 6490 – Batel, Curitiba | 💬 WhatsApp: (41) 99785-0163
          </p>
        </div>
      </footer>
    </>
  );
}