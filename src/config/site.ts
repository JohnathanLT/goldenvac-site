export const site = {
  name: "Golden-Vac Equipamentos",
  legalName: "Golden Vac Equipamentos e Serviços Ltda.",
  cnpj: "35.655.978/0001-76",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://goldenvac.com.br", // TODO confirmar domínio institucional
  city: "Goiânia - GO",
  slogan: "Construindo um país mais limpo e independente.",
  phones: [
    { label: "Comercial", number: "5562994905217", display: "(62) 99490-5217", whatsapp: true }, // TODO confirmar setor
    { label: "Comercial 2", number: "5562994383431", display: "(62) 99438-3431", whatsapp: true }, // TODO confirmar setor
    { label: "Peças e assistência", number: "5562984897566", display: "(62) 98489-7566", whatsapp: true }, // TODO confirmar setor
  ],
  whatsappDefault: 0,
  whatsappMessage: "Olá, Golden-Vac! Vim pelo site e gostaria de um orçamento.",
  email: "comercial@goldenvac.com.br", // TODO confirmar
  address: { street: "", district: "", city: "Goiânia - GO", zip: "", mapsEmbedUrl: "", mapsLink: "" }, // TODO preencher endereço
  hours: "Segunda a sexta, 8h às 18h", // TODO confirmar
  instagram: "https://www.instagram.com/golden_vac_/",
  youtube: "", // TODO preencher se houver perfil
  facebook: "", // TODO preencher se houver perfil
  coverage: "Atendemos todo o Brasil", // TODO confirmar
  finame: false, // TODO habilitar somente após confirmar credenciamento BNDES
  formspreeId: "",
  openGraphImage: "/galeria/trabalho-05.jpg",
} as const;
export const heroBenefits = ["Fábrica própria em Goiânia-GO", site.coverage, "Equipamentos sob medida, com engenharia dedicada", "Pós-venda, peças e assistência"];

type ContactPhone = (typeof site.phones)[number];

export const whatsappUrl = (
  phone: ContactPhone = site.phones[site.whatsappDefault],
  message: string = site.whatsappMessage,
) =>
  `https://wa.me/${phone.number}?text=${encodeURIComponent(message)}`;
