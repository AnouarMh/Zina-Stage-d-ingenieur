<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Commande;
use App\Models\Admin;
use App\Models\Produit ;

class CommandeController extends Controller
{
    //ajouter une commande
    public function addCommande(Request $request)
    {
        $commande = new Commande();
        $commande->date = $request->date;
        $commande->heure = $request->heure;
        $commande->client_id = $request->client_id;
        $commande->save();
        return response()->json($commande, 200);
    }
    //commande a un attribut admin_id donne moi fonction de get commande avec admin_id
    public function getCommandeByAdmin($id)
    {
       
        $lcommande=Commande::where('admin_id', $id)->get();
        //retourner le nom de fournisseur à travers son id et le nom de produit à travers son id et la quantite 
        $admin=Admin::find($id);
        //boucle de lcommande 
        $lcommande=$lcommande->map(function($item) use($admin){
            return [
                'nom'=>$item->fournisseur->nom,
                'produit'=>$item->produit->nomproduit,
                'quantite'=>$item->quantite,
                'somme'=>$item->produit->tarif*$item->quantite,
                'etat'=>$item->etat,
                'id'=>$item->id,
                 
            ];
        });
        return response()->json($lcommande, 200);

    }
    public function getCommandeByFournisseur($id)
    {
       
        $lcommande=Commande::where('fournisseur_id', $id)->get();
        //retourner le nom de fournisseur à travers son id et le nom de produit à travers son id et la quantite 
        $admin=Admin::find($id);
        //boucle de lcommande 
        $lcommande=$lcommande->map(function($item) use($admin){
            return [
                'nom'=>$item->admin->nom,
                'produit'=>$item->produit->nomproduit,
                'quantite'=>$item->quantite,
                'somme'=>$item->produit->tarif*$item->quantite,
                'etat'=>$item->etat,
                 
            ];
        });
        return response()->json($lcommande, 200);

    }

    //modifier une commande
    public function updateCommande(Request $request, $id)
    {
        $commande = Commande::find($id);
        $commande->date = $request->date;
        $commande->heure = $request->heure;
        $commande->client_id = $request->client_id;
        
        $commande->save();
        return response()->json($commande, 200);
    }

    //supprimer une commande

    public function deleteCommande($id)
    {
        $commande = Commande::find($id);
        $commande->delete();
        return response()->json($commande, 200);
    }

    //afficher une commande
    public function getCommande($id)
    {
        $commande = Commande::find($id);
        return response()->json($commande, 200);
    }

    //afficher toutes les commandes
    public function getCommandes()
    {
        $commandes = Commande::all();
        return response()->json($commandes, 200);
    }

    //afficher les commandes d'un client
    public function getCommandesClient($id)
    {
        $commandes = Commande::where('client_id', $id)->get();
        return response()->json($commandes, 200);
    }

    //afficher les commandes d'un service
    public function getCommandesService($id)
    {
        $commandes = Commande::where('service_id', $id)->get();
        return response()->json($commandes, 200);
    }

    //afficher les commandes d'un admin
    public function getCommandesAdmin($id)
    {
        $commandes = Commande::where('admin_id', $id)->get();
        return response()->json($commandes, 200);
    }

    //changer etat de commande en annuler et supprimer apres 10 minutes 
    public function annulerCommande($id)
    {
        $commande = Commande::find($id);
        $commande->etat = "annuler";
        $commande->save();
                return response()->json($commande, 200);
    }


    //commander un produit à travers admin
    public function commanderProduit(Request $request)
    {
        $commande = new Commande();
        $commande->admin_id = $request->admin_id;
        $commande->produit_id = $request->produit_id;
        $produit=Produit::find($request->produit_id);
        $fournisseur_id=$produit->fournisseur_id;
        $commande->fournisseur_id=$fournisseur_id;
        $commande->quantite=$request->quantite;
        $commande->etat = 'en attente';
        $commande->save();
        return response()->json($commande, 200);
    }

    //get commande by idclient
    
}
