export interface Service {
  id: number;
  nom: string;
  description: string;
  tarif: string;
  duree: string;
  categorie: string;
  admin_id: number;
  image: string; // Add the image property to the Service type
}