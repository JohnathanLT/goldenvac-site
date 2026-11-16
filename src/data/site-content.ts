export const services = [
  { title:"Fabricação", copy:"Equipamentos novos montados no chassi do cliente ou fornecidos completos.", icon:"factory" },
  { title:"Reforma", copy:"Recuperação e modernização de equipamentos usados, inclusive de outras marcas.", icon:"reform" }, // TODO confirmar reformas de outras marcas
  { title:"Manutenção", copy:"Manutenção preventiva e corretiva para manter o equipamento rodando.", icon:"maintenance" },
  { title:"Peças e acessórios", copy:"Mangotes, bicos, válvulas e componentes de reposição.", icon:"parts" }, // TODO confirmar lista de peças
] as const;
export const segments=[{label:"Prefeituras e autarquias de saneamento",icon:"municipality"},{label:"Empresas de desentupimento e limpa-fossa",icon:"sanitation"},{label:"Indústria",icon:"industry"},{label:"Mineração",icon:"mining"},{label:"Construção civil",icon:"construction"},{label:"Locadoras de equipamentos",icon:"rental"}] as const; // TODO confirmar segmentos atendidos
export const steps=["Contato e levantamento da necessidade","Projeto sob medida e proposta","Fabricação, com acompanhamento por fotos","Entrega e treinamento do operador","Pós-venda, peças e assistência"];
export const faqs=[
 {q:"Vocês fazem equipamento sob medida?",a:"Sim. Cada equipamento é desenvolvido conforme a operação do cliente. Adaptamos capacidade do tanque, sistema de bombas, motorização auxiliar, layout hidráulico e comandos operacionais."},
 {q:"Qual o prazo de fabricação de um equipamento?",a:"O prazo é informado após entendermos a configuração e as necessidades do projeto. Fale com nosso comercial para receber uma proposta."}, // TODO validar procedimento e prazo de fabricação
 {q:"Vocês montam o equipamento no meu chassi?",a:"Sim. A montagem em chassi do cliente pode ser avaliada conforme o modelo e as especificações do projeto."},
 {q:"Reformam equipamentos de outras marcas?",a:"Consulte nossa equipe sobre a avaliação e a disponibilidade para reforma do seu equipamento."}, // TODO confirmar
 {q:"Atendem empresas fora de Goiás?",a:"Entre em contato para consultar o atendimento e a logística para sua região."},
 {q:"Vendem para prefeituras e órgãos públicos?",a:"Sim. Nossa equipe comercial pode orientar sobre a solução e os documentos necessários para o seu processo."}, // TODO confirmar experiência/documentação para órgãos públicos
 {q:"Oferecem garantia e assistência após a entrega?",a:"Entre em contato com nosso comercial para conhecer as condições de garantia, peças e assistência aplicáveis a cada equipamento."}, // TODO confirmar condições
 {q:"Têm peças de reposição a pronta entrega?",a:"Consulte a disponibilidade da peça com nossa equipe de peças e assistência."}, // TODO confirmar disponibilidade
];
export const aboutText="A Golden-Vac é uma fabricante goiana de equipamentos para saneamento e limpeza urbana. Em nossa fábrica em Goiânia, projetamos sob medida e montamos caminhões combinados, sistemas de sucção a vácuo e hidrojateadores, adaptando cada equipamento à operação do cliente. Trabalhamos com fabricação própria, acompanhamento do projeto do início ao fim e pós-venda próximo, porque um equipamento parado é uma cidade sem atendimento. Nosso compromisso está no nosso lema: construir um país mais limpo e independente.";
