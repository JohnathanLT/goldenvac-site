import { sobMedida } from "@/data/sob-medida";

export type GalleryItem = { src: string; poster?: string; captions?: string; alt: string; categoria: "Fabricação" | "Reforma" | "Manutenção" | "Entregas"; equipamento: string; local?: string; cliente?: string; tipo: "foto" | "video"; data?: string };
export const categorias = ["Todos", "Fabricação", "Reforma", "Manutenção", "Entregas"] as const;
// TODO confirmar categoria, equipamento e local de cada material antes da publicação final.
const fotos = [
  "Vista lateral de caminhão combinado azul em área externa", "Caminhão combinado azul fotografado em pátio", "Caminhão combinado azul em vista lateral", "Caminhão combinado azul em ângulo frontal", "Caminhão combinado vermelho estacionado junto à fábrica", "Caminhão combinado vermelho em vista lateral", "Caminhão combinado vermelho visto pela traseira", "Caminhão combinado vermelho em ângulo frontal", "Equipamento combinado fotografado em área externa", "Equipamento combinado em vista lateral", "Caminhão combinado em pátio externo", "Caminhão combinado fotografado de perto", "Caminhão combinado azul em vista frontal", "Caminhão combinado azul em vista lateral", "Caminhão combinado azul em área aberta",
];
export const galeria: GalleryItem[] = [
  ...fotos.map((alt,index)=>({src:`/galeria/trabalho-${String(index+1).padStart(2,"0")}.jpg`,alt,categoria:"Fabricação" as const,equipamento:"Caminhão combinado",tipo:"foto" as const})),
  {src:"/galeria/video-1.mp4",poster:"/galeria/trabalho-02.jpg",alt:"Vídeo de equipamento Golden-Vac",categoria:"Fabricação",equipamento:"Equipamento em vídeo",tipo:"video"},
  {src:"/galeria/video-2.mp4",poster:"/galeria/trabalho-05.jpg",alt:"Vídeo de equipamento Golden-Vac",categoria:"Fabricação",equipamento:"Equipamento em vídeo",tipo:"video"},
  {src:"/galeria/video-3.mp4",poster:"/galeria/trabalho-09.jpg",alt:"Vídeo de equipamento Golden-Vac",categoria:"Fabricação",equipamento:"Equipamento em vídeo",tipo:"video"},
  {src:sobMedida.video,poster:sobMedida.poster,captions:sobMedida.captions,alt:"Projeto sob medida Golden-Vac, com engenharia dedicada",categoria:"Fabricação",equipamento:"Projeto sob medida",tipo:"video"},
];
