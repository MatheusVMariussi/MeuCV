//https://matheusmariussi.com.br/every-scoreboard

import React from 'react';
import { FaEnvelope, FaShieldAlt, FaGamepad, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EveryScoreboard = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 p-6 md:p-12 font-sans">
      <div className="fixed top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-8 transition-colors">
          <FaArrowLeft /> Voltar para o Portfólio
        </Link>

        {/* HEADER */}
        <header className="mb-12 border-b border-neutral-800 pb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-600 rounded-lg">
                <FaGamepad size={32} className="text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Every Scoreboard</h1>
          </div>
          <p className="text-neutral-400 text-lg">
            Política de Privacidade e Suporte Oficial
          </p>
        </header>

        {/* SEÇÃO DE SUPORTE */}
        <section className="mb-12 bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <FaEnvelope className="text-blue-500" /> Suporte / Contato
          </h2>
          <p className="mb-4 text-neutral-300">
            Se você encontrou algum bug, tem sugestões de melhoria ou precisa de ajuda com o aplicativo, entre em contato diretamente conosco.
          </p>
          <a 
            href="mailto:imath.mariussi@gmail.com" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
          >
            ✉️ imath.mariussi@gmail.com
          </a>
        </section>

        {/* POLÍTICA DE PRIVACIDADE */}
        <section className="space-y-6 text-neutral-300">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <FaShieldAlt className="text-green-500" /> Política de Privacidade
          </h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-sm text-neutral-500 mb-4">Última atualização: 20 de Janeiro de 2026</p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">1. Coleta de Dados</h3>
            <p>
              O aplicativo <strong>Every Scoreboard</strong> preza pela sua privacidade. 
              Atualmente, <strong>não coletamos, armazenamos ou compartilhamos</strong> nenhuma informação pessoal identificável dos usuários.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">2. Armazenamento Local</h3>
            <p>
              Todos os dados de pontuação, nomes de jogadores e configurações de partidas são armazenados <strong>exclusivamente no dispositivo do usuário</strong>. 
              Nenhum dado é enviado para servidores externos.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">3. Permissões</h3>
            <p>
              O aplicativo pode solicitar permissões básicas do sistema operacional apenas para funcionamento de recursos essenciais (como manter a tela ligada durante a partida), sem acesso a contatos, fotos ou localização.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2">4. Alterações nesta Política</h3>
            <p>
              Podemos atualizar nossa Política de Privacidade periodicamente. Recomendamos que você revise esta página periodicamente para quaisquer alterações.
            </p>
          </div>
        </section>

        <footer className="mt-20 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          © {new Date().getFullYear()} Matheus Mariussi. Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
};

export default EveryScoreboard;