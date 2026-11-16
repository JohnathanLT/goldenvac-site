import { AboutSection, ContactSection, EquipmentSection, FaqSection, FinameSection, FinalCta, GallerySection, Hero, ProcessSection, QuoteSection, SegmentsSection, ServicesSection, SobMedidaSection } from "@/components/sections";
import { site } from "@/config/site";
import { sobMedida } from "@/data/sob-medida";

export default function Home(){
 const videoSchema={"@context":"https://schema.org","@type":"VideoObject",name:sobMedida.videoName,description:sobMedida.narration.join(" "),thumbnailUrl:`${site.url}${sobMedida.poster}`,duration:"PT29S",contentUrl:`${site.url}${sobMedida.video}`};
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(videoSchema)}}/><main><Hero/><EquipmentSection/><ServicesSection/><SobMedidaSection/><SegmentsSection/><GallerySection/><ProcessSection/><FinameSection/><AboutSection/><FaqSection/><QuoteSection/><ContactSection/><FinalCta/></main></>
}
