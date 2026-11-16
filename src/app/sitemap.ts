import type { MetadataRoute } from "next";
import { equipamentos } from "@/data/equipamentos";
import { site } from "@/config/site";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{return [{url:site.url,lastModified:new Date(),changeFrequency:"monthly",priority:1},...equipamentos.map(e=>({url:`${site.url}/equipamentos/${e.slug}/`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.75})),{url:`${site.url}/politica-de-privacidade/`,lastModified:new Date(),changeFrequency:"yearly",priority:.3}]}
