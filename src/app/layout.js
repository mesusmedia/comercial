import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Los Angeles Estética e Bem-Estar | Tratamentos Corporais Personalizados',
  description: 'Protocolos corporais personalizados para gordura localizada, flacidez e celulite. Tecnologias combinadas conforme sua avaliação e objetivos. Agende sua avaliação no WhatsApp.',
  openGraph: {
    title: 'Los Angeles Estética e Bem-Estar | Tratamentos Corporais Personalizados',
    description: 'Tratamento para gordura localizada, flacidez e celulite com protocolos personalizados. Agende avaliação gratuita pelo WhatsApp.',
    url: 'https://losangelesestetica.com.br', // Placeholder - user should update
    siteName: 'Los Angeles Estética e Bem-Estar',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Los Angeles Estética e Bem-Estar - Tratamentos corporais personalizados'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '@losangelesest | Tratamentos Corporais',
    description: 'Protocolos personalizados para gordura, flacidez e celulite'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="bg-white text-black min-h-screen">
        {children}
      </body>
    </html>
  );
}