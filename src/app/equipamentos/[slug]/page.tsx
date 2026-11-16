import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EquipmentDetails } from "@/components/sections";
import { equipamentos } from "@/data/equipamentos";
import { site } from "@/config/site";

export function generateStaticParams(){return equipamentos.map(e=>({slug:e.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const e=equipamentos.find(x=>x.slug===slug);return e?{title:e.nome,description:e.resumo,openGraph:{title:`${e.nome} | ${site.name}`,description:e.resumo,images:[e.fotos[0]||site.openGraphImage]}}:{title:"Equipamento não encontrado"}}
export default async function EquipmentPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const e=equipamentos.find(x=>x.slug===slug);if(!e)notFound();const product={"@context":"https://schema.org","@type":"Product",name:e.nome,description:e.resumo,category:e.categoria,image:e.fotos.map(x=>`${site.url}${x}`),brand:{"@type":"Brand",name:site.name},manufacturer:{"@type":"Organization",name:site.legalName}};return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(product)}}/><EquipmentDetails slug={slug}/></>}
