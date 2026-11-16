import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/config/site";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "@/components/sections";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Golden-Vac Equipamentos | Caminhões combinados, sucção e hidrojateamento em Goiânia", template: "%s | Golden-Vac Equipamentos" },
  description: "Fabricação, reforma e manutenção de equipamentos para saneamento e limpeza urbana. Equipamentos sob medida para saneamento, direto da fábrica Golden-Vac em Goiânia.",
  openGraph: { type: "website", locale: "pt_BR", siteName: site.name, title: "Golden-Vac Equipamentos", description: site.slogan, images: [site.openGraphImage] },
  robots: { index: true, follow: true },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
 const schema={"@context":"https://schema.org","@type":"LocalBusiness",name:site.name,legalName:site.legalName,taxID:site.cnpj,url:site.url,email:site.email,telephone:site.phones.map(p=>`+${p.number}`),address:{"@type":"PostalAddress",streetAddress:[site.address.street,site.address.district].filter(Boolean).join(", "),addressLocality:site.city.split(" - ")[0],addressRegion:site.city.split(" - ")[1],postalCode:site.address.zip,addressCountry:"BR"},areaServed:site.coverage};
 return <html lang="pt-BR"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><SiteHeader/>{children}<SiteFooter/><FloatingWhatsApp/></body></html>;
}
