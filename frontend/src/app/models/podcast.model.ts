export interface Podcast {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: string;
  premium: boolean;
  creadores_idcreador: number;
  // Añade más campos si tu API devuelve más información
}