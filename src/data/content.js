export const site = {
  nome: 'Éclat Estética Avançada',
  nicho: 'Estética Avançada',
  cidade: 'Torres',
  estado: 'RS',
  whatsapp: '51991280480',
  telefone: '(51) 3626-0480',
  telefoneWhats: '(51) 99128-0480',
  email: 'contato@eclatestetica.com.br',
  instagram: 'eclat.estetica',
  facebook: 'https://facebook.com/eclat.estetica',
  endereco: 'Av. Beira Mar, 720 · Praia Grande, Torres — RS · CEP 95560-000',
  enderecoEncoded: 'Av.+Beira+Mar,+720,+Praia+Grande,+Torres+-+RS,+95560-000',
  anoFundacao: '2019',
  dominio: 'eclatestetica.com.br',
};

export const wa = (msg) =>
  `https://wa.me/55${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const waDefault = wa('Olá, gostaria de agendar uma avaliação');

export const responsavelTecnica = {
  nome: 'Dra. Helena Vasconcellos',
  registro: 'CRM/RS 38.472 · RQE 21.556',
  especialidade: 'Dermatologia',
};

const q = (id, w = 1400, extra = '') => `https://images.unsplash.com/photo-${id}?w=${w}&q=70&auto=format&fit=crop${extra}`;
const qf = (id, w = 900) => `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop&crop=faces`;

export const img = {
  face: qf('1672454158574-5f978761d872'),
  faceHero: q('1672454158574-5f978761d872', 1600, '&crop=faces'),
  skin: q('1730288951113-9cc087c14b83'),
  lips: q('1710968282393-8725f1c7b77b'),
  lipsWide: q('1710968282393-8725f1c7b77b', 1200),
  clinic: q('1760614034530-a0d34463e03d', 1600),
  helena: qf('1617812191081-2a24e3f30e45'),
  rafael: qf('1666016300348-4910245e470a'),
  banner: '/banner_preenchimento.png',
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/antes-depois', label: 'Antes e Depois' },
  { href: '/depoimentos', label: 'Depoimentos' },
  { href: '/contato', label: 'Contato' },
];

export const seo = {
  home: { title: 'Éclat Estética Avançada | Clínica de Estética em Torres/RS', description: 'Botox, preenchimento labial, limpeza de pele e depilação a laser com critério médico em Torres/RS. Agende sua avaliação.' },
  sobre: { title: 'Sobre a Éclat | Filosofia e Equipe Médica', description: 'Conheça a filosofia da Éclat — beleza natural, segurança e individualidade — e a equipe médica que cuida de você.' },
  servicos: { title: 'Serviços | Tratamentos Estéticos Avançados | Éclat', description: 'Botox, preenchimento labial, limpeza de pele profunda, depilação a laser e mais: indicações, duração e cuidados pós.' },
  antesDepois: { title: 'Antes e Depois | Galeria de Resultados | Éclat', description: 'Galeria de casos por tratamento na Éclat. Resultados variam conforme cada paciente, avaliados em consulta.' },
  depoimentos: { title: 'Depoimentos | Experiências de Pacientes | Éclat', description: 'Relatos de pacientes sobre a experiência de cuidado e os tratamentos realizados na Éclat Estética Avançada.' },
  contato: { title: 'Contato | Agende sua Avaliação | Éclat', description: 'Fale com a Éclat em Torres/RS. Endereço, telefone, WhatsApp, horários e formulário para agendar sua avaliação.' },
  campanha: { title: 'Campanha de Preenchimento Labial | Éclat', description: 'Campanha de preenchimento labial da Éclat Estética Avançada. Confira as condições especiais.' },
};

export const treatments = [
  { name: 'Toxina Botulínica', desc: 'Suaviza linhas de expressão preservando a naturalidade.', alt: 'Detalhe do olhar em close, pele natural', img: img.face, anchor: 'botox' },
  { name: 'Preenchimento Labial', desc: 'Contorno e volume harmônicos, planejados com você.', alt: 'Close de lábios com iluminação suave', img: img.lips, anchor: 'labial' },
  { name: 'Limpeza de Pele Profunda', desc: 'Renovação da pele respeitando sua barreira natural.', alt: 'Pele do rosto em close, textura saudável', img: img.skin, anchor: 'limpeza' },
  { name: 'Depilação a Laser', desc: 'Redução progressiva dos pelos com conforto e segurança.', alt: 'Detalhe de pele lisa', img: img.helena, anchor: 'laser' },
];

export const services = [
  { id: 'botox', n: 1, name: 'Toxina Botulínica', alt: 'Aplicação de toxina botulínica, detalhe do olhar', img: img.face,
    what: 'Aplicação de toxina botulínica registrada na Anvisa para relaxar a musculatura responsável por linhas dinâmicas — testa, glabela e região dos olhos.',
    forWhom: 'Indicada para quem deseja suavizar linhas de expressão e prevenir marcas mais profundas, sempre após avaliação individual.',
    duration: 'De 20 a 30 minutos.',
    aftercare: 'Evitar deitar-se, massagear a área e praticar atividade física intensa nas primeiras horas. O resultado se estabelece em cerca de 15 dias.' },
  { id: 'labial', n: 2, name: 'Preenchimento Labial', alt: 'Close de lábios com luz suave', img: img.lips,
    what: 'Preenchimento com ácido hialurônico para definir o contorno, hidratar e equilibrar o volume dos lábios, com resultado planejado em conjunto.',
    forWhom: 'Para quem busca harmonia e proporção, mantendo uma aparência natural e coerente com o rosto.',
    duration: 'De 40 a 60 minutos, com anestésico tópico.',
    aftercare: 'Inchaço leve e sensibilidade são esperados nos primeiros dias. Evitar calor intenso e maquiagem na região nas primeiras 24 horas.' },
  { id: 'limpeza', n: 3, name: 'Limpeza de Pele Profunda', alt: 'Pele do rosto renovada, close', img: img.skin,
    what: 'Protocolo de higienização, extração e ativos que removem impurezas e estimulam a renovação cutânea de forma cuidadosa.',
    forWhom: 'Indicada para peles com cravos, oleosidade ou textura irregular. A frequência é definida conforme o tipo de pele.',
    duration: 'De 60 a 90 minutos.',
    aftercare: 'Uma leve vermelhidão pode ocorrer. Uso de protetor solar e hidratação são essenciais nas 48 horas seguintes.' },
  { id: 'laser', n: 4, name: 'Depilação a Laser', alt: 'Detalhe de pele lisa após depilação a laser', img: img.face,
    what: 'Tecnologia de laser que reduz progressivamente o crescimento dos pelos, com parâmetros ajustados ao seu fototipo.',
    forWhom: 'Para quem deseja reduzir os pelos de forma duradoura. O número de sessões varia conforme a área e características individuais.',
    duration: 'De 15 a 60 minutos, conforme a área tratada.',
    aftercare: 'Evitar exposição solar, água muito quente e esfoliação nos dias seguintes. O protetor solar é indispensável.' },
  { id: 'peeling', n: 5, name: 'Peeling de Diamante', alt: 'Textura de pele renovada, close', img: img.skin,
    what: 'Microdermoabrasão que remove células mortas e estimula a renovação da camada superficial da pele, devolvendo luminosidade.',
    forWhom: 'Indicado para peles opacas, com textura irregular ou marcas superficiais. Pode ser associado a outros protocolos.',
    duration: 'De 30 a 45 minutos.',
    aftercare: 'Pele pode ficar levemente sensível nas primeiras 24 horas. Uso de protetor solar é indispensável nos dias seguintes.' },
  { id: 'skinbooster', n: 6, name: 'Bioestimulador de Colágeno', alt: 'Detalhe de pele hidratada, close', img: img.rafael,
    what: 'Microinjeções de ácido hialurônico de baixa reticulação que hidratam profundamente e estimulam a produção natural de colágeno.',
    forWhom: 'Para quem busca firmeza e viço da pele de forma gradual, com resultado que evolui nas semanas seguintes à aplicação.',
    duration: 'De 30 a 45 minutos, com anestésico tópico.',
    aftercare: 'Pequenos pontos de aplicação e leve inchaço são esperados por 24 a 48 horas. Evitar exposição solar direta nesse período.' },
];

export const team = [
  { name: 'Dra. Helena Vasconcellos', role: 'Diretora técnica · Dermatologia', crm: 'CRM/RS 38.472 · RQE 21.556', img: img.helena },
  { name: 'Dr. Rafael Moretti', role: 'Harmonização facial', crm: 'CRM/RS 41.209 · RQE 24.881', img: img.rafael },
  { name: 'Dra. Beatriz Antunes', role: 'Laser & Dermatologia', crm: 'CRM/RS 44.760 · RQE 26.315', img: img.face },
];

export const testimonials = [
  { name: 'M. L.', treatment: 'Preenchimento labial', text: 'Fui recebida com muita atenção desde a avaliação. A equipe explicou cada etapa e respeitou o que eu queria — um resultado natural. Saí me sentindo cuidada, não como "mais uma".' },
  { name: 'Carolina R.', treatment: 'Toxina botulínica', text: 'Sempre tive receio de botox por medo de ficar com o rosto "parado". A Dra. Helena foi transparente do início ao fim e o resultado ficou leve, exatamente como conversamos.' },
  { name: 'A. S.', treatment: 'Limpeza de pele', text: 'A limpeza de pele foi outro nível de cuidado. Ambiente impecável, produtos de qualidade e uma diferença real na textura da minha pele.' },
  { name: 'Fernanda T.', treatment: 'Depilação a laser', text: 'Fiz laser nas pernas e axilas. Processo confortável, atendimento pontual e uma redução visível sessão após sessão.' },
  { name: 'J. P.', treatment: 'Avaliação geral', text: 'O que mais me marcou foi a honestidade. Não me venderam pacotes desnecessários — indicaram exatamente o que eu precisava naquele momento.' },
  { name: 'Renata M.', treatment: 'Toxina botulínica', text: 'Uma clínica sofisticada sem ser intimidadora. Me senti à vontade e segura o tempo todo, e isso fez toda a diferença.' },
];

export const cases = [
  { treatment: 'Toxina botulínica', caption: 'Suavização das linhas da testa · 15 dias após a aplicação.', imgA: '/antes_rugas.png', imgB: '/depois_rugas.png' },
  { treatment: 'Preenchimento labial', caption: 'Hidratação e definição de contorno · resultado imediato.', imgA: '/antes_preenchimento.png', imgB: '/depois_preenchimento.png' },
  { treatment: 'Limpeza de pele', caption: 'Redução de cravos e oleosidade · após 1 sessão.', imgA: '/antes_limpeza.png', imgB: '/depois_limpeza.png' },
  { treatment: 'Toxina botulínica', caption: 'Região da glabela · 21 dias após a aplicação.', imgA: '/antes_rugas.png', imgB: '/depois_rugas.png' },
  { treatment: 'Preenchimento labial', caption: 'Equilíbrio de volume · 7 dias após o procedimento.', imgA: '/antes_preenchimento.png', imgB: '/depois_preenchimento.png' },
  { treatment: 'Depilação a laser', caption: 'Redução progressiva dos pelos · após 4 sessões.', imgA: '/antes_depilacao.png', imgB: '/depois_depilacao.png' },
];

export const pilares = [
  { title: 'Beleza natural', text: 'Nosso trabalho é valorizar traços que já são seus. Buscamos harmonia e equilíbrio, nunca a padronização.' },
  { title: 'Segurança em primeiro lugar', text: 'Profissionais habilitados, produtos registrados na Anvisa e protocolos rigorosos de higiene e biossegurança.' },
  { title: 'Individualidade', text: 'Cada plano de tratamento é desenhado para os seus objetivos, com expectativas conversadas de forma transparente.' },
];

export const horario = [
  { dia: 'Segunda a sexta', hora: '9h — 19h' },
  { dia: 'Sábado', hora: '9h — 13h' },
  { dia: 'Domingo e feriados', hora: 'Fechado' },
];
