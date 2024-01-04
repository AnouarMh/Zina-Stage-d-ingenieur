import { getAssetPath } from "@/core/helpers/assets";
import axios from "axios";
import { ref } from "vue";

export interface ICustomer {

  id: number;
  numerotel: string;
  image: string;
  nom: string;
  email: string;
  country: string;
  localisation: string;
  horaire: string;
};
export interface Client {

  id: number;
  nom: string;
  prenom: string;
  email: string;
  numerotel: string;
  country: string;
  langue: string;
  image: string;
  admin_id:number;
  nomAdmin:string;
  approuver:string;
};

export interface Fournisseur {

  id: number;
  nom: string;
  email: string;
  password:string;
  numerotel: string;
  image: string;
  country: string;
  localisation:string;
  horaire:string;
  admin_id:number;
  approuver:number;

};
export interface Service {

  id: number;
  nom: string;
  description: string;
  tarif:string;
  duree: string;
  categorie: string;
  admin_id:number;
  image: string;
  

};

export interface Reservation{
  id:number;
  date:string;
  service:string;
  client:string;
  etat:string;
}
export interface Produit{

  id:number;
  nom:string;
  description:string;
  tarif:string;
  produits:string;
  quantite:string;
}
export interface Commande{
  
    id:number;
    nom:string;
    produit:string;
    quantite:string;
    somme:string;
    etat:string;
  }

  export interface ProduitFr{
    
    id:number;
    nom:string;
    description:string;
    tarif:string;
    produits:string;
    }

export async function getFournisseurs() {
  try {
        const response = await axios.get('http://127.0.0.1:8000/api/superadmin/fournisseurs');
        return response.data;
       
      } catch (error) {
        return [];
      }
}
export async function getProduits() {
  try {
        const response = await axios.get('http://127.0.0.1:8000/api/admin/produits');
        return response.data;
       
      } catch (error) {
        return [];
      }
}
export async function getAllServices() {
  try {
        const response = await axios.get('http://127.0.0.1:8000/api/admin/getAllServices');
        return response.data;
       
      } catch (error) {
        return [];
      }
}

export async function getCustomers() {
  try {
        const response = await axios.get('http://127.0.0.1:8000/api/superadmin/admins');
        return response.data;
       
      } catch (error) {
        return [];
      }
}

export async function getAdminbyId(id: number) {
  try {
        const response = await axios.get(`http://127.0.0.1:8000/api/superadmin/getadmins/${id}`);
        return response.data;
      } catch (error) {
        return [];
      } 

}
export async function updateAdmin(admin:object,id: number) {
  try {
        const response = await axios.post(`http://127.0.0.1:8000/api/superadmin/upadmins/${id}`,admin);
       
        return response;
      } catch (error) {
        return [];
      } 

}

export async function getClientsByAdmin(id: number) {
  try {
        const response = await axios.get(`http://127.0.0.1:8000/api/superadmin/clients/${id}`);
        return response.data;
      } catch (error) {
        return [];
      }
}

export async function deleteAdmin(id:any) {
  try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/superadmin/deltadmins/${id}`);
        return response.data;
      } catch (error) {
        return [];
      }
}

export async function getFournisseurById(id: number) {
  try {
        const response = await axios.get(`http://127.0.0.1:8000/api/superadmin/getFournisseurById/${id}`);
        return response.data;
      } catch (error) {
        return [];
      } 

}
export async function getServiceById(id: number) {
  try {
        const response = await axios.get(`http://127.0.0.1:8000/api/admin/getService/${id}`);
        return response.data;
      } catch (error) {
        return [];
      } 

}
export async function getNomAdminDuClient(id: number) {
  try {
        const response = await axios.get(`http://127.0.0.1:8000/api/superadmin/getNomAdminDuClient/${id}`);
        return response.data;
      } catch (error) {
        return [];
      } 

}

export async function annulerCommande(id: number) {
  try {
        const response = await axios.post(`http://127.0.0.1:8000/api/admin/annulerCommande/${id}`);
        return response.data;
      } catch (error) {
        return [];
      }
}

export async function commanderProduit(commande:object) {
  try {
        const response = await axios.post(`http://127.0.0.1:8000/api/admin/commanderproduit`,commande);
        return response.data;
      }
      catch (error) {
        return [];
      } 
    }

export async function updateFournisseur(admin:object,id: number) {
  try {
        const response = await axios.post(`http://127.0.0.1:8000/api/superadmin/updateFournisseur/${id}`,admin);
       
        return response;
      } catch (error) {
        return [];
      } 

}
export async function updateService(service:object,id: number) {
  try {
        const response = await axios.post(`http://127.0.0.1:8000/api/admin/updateService/${id}`,service);
       
        return response;
      } catch (error) {
        return [];
      } 

}
export async function updateClient(service:object,id: number) {
  try {
        const response = await axios.post(`http://127.0.0.1:8000/api/admin/updateClinet/${id}`,service);
       
        return response;
      } catch (error) {
        return [];
      } 

}
export async function deleteService(id:any) {
  try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/admin/deleteService/${id}`);
        return response.data;
      } catch (error) {
        return [];
      }
}

export async function deleteClient(id:any) {
  try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/admin/deleteClient/${id}`);
        return response.data;
      } catch (error) {
        return [];
      }
}


export async function approuverAdmin(id:any) {
  try {
        const response = await axios.post(`http://127.0.0.1:8000/api/superadmin/approuver/${id}`);
        return response.data;
      } catch (error) {
        return [];
      }
}
export async function approuverClient(id:any) {
  try {
        const response = await axios.post(`http://127.0.0.1:8000/api/admin/approuverClient/${id}`);
        return response.data;
      } catch (error) {
        return [];
      }
}
export async function approuverFournisseur(id:any) {
  try {
        const response = await axios.post(`http://127.0.0.1:8000/api/superadmin/approuverFrnsr/${id}`);
        return response.data;
      } catch (error) {
        return [];
      }
}
export async function deleteFournisseur(id:any) {
  try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/superadmin/delete/${id}`);
        return response.data;
      } catch (error) {
        return [];
      }
}

export async function getClients() {
  try {
        const response = await axios.get('http://127.0.0.1:8000/api/admin/clients');
        return response.data;
       
      } catch (error) {
        return [];
      }
}
export async function getClientssup() {
  try {
        const response = await axios.get('http://127.0.0.1:8000/api/superadmin/clients');
        return response.data;
       
      } catch (error) {
        return [];
      }
}
export async function getReservations(id:any) {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/clients/getReservationbyadmin/${id}`);
    return response.data;
   
  } catch (error) {
    return [];
  }
}
export async function getServicesClient(id:any) {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/clients/getServiceById/${id}`);
    return response.data;
   
  } catch (error) {
    return [];
  }
}

export  async function addreservation(reservation:any) {
 
  try {
    const response = await axios.post(`http://127.0.0.1:8000/api/clients/addReservation`,reservation);
    return response.data;
  }
  catch (error) {
    return [];
  } 
}
export async function getCommandes(id:any) {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/clients/getCommandebyadmin/${id}`);
    return response.data;
   
  } catch (error) {
    return [];
  }
}
export async function getCommandesbyfr(id:any) {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/clients/getCommandebyFr/${id}`);
    return response.data;
   
  } catch (error) {
    return [];
  }
}
export async function getClientByCenter(id : any) {
  try {
        const response = await axios.get(`http://127.0.0.1:8000/api/admin/getClientByCenter/${id}`);
        return response.data;
       
      } catch (error) {
        return [];
      }
}
export async function getServiceByCenter(id : any) {
  try {
        const response = await axios.get(`http://127.0.0.1:8000/api/admin/getServiceByCenter/${id}`);
        return response.data;
       
      } catch (error) {
        return [];
      }
}
export async function getClientById(id: number) {
  try {
        const response = await axios.get(`http://127.0.0.1:8000/api/admin/getClientByAdmin/${id}`);
        return response.data;
      } catch (error) {
        return [];
      } 

}
export async function getproduitbyfour(id : any) {
  try {
        const response = await axios.get(`http://127.0.0.1:8000/api/fournisseur/getproduitbyfour/${id}`);
        return response.data;
       
      } catch (error) {
        return [];
      }
}
export async function getReservationbyClient(id : any) {
  try {
        const response = await axios.get(`http://127.0.0.1:8000/api/clients/getReservationbyid/${id}`);
        return response.data;
       
      } catch (error) {
        return [];
      }
}

