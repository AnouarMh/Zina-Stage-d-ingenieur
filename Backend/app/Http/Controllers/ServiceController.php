<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

use App\Models\Service;
use Illuminate\Support\Facades\Auth;
class ServiceController extends Controller
{
    //ajouter un service voir les attributs :  'nom', 'description', 'tarif', 'duree', 'admin_id'
    public function addService(Request $request)
    {
        $service = new Service();
        $service->nom = $request->nom;
        $service->description = $request->description;
        $service->tarif = $request->tarif;
         $service->image ="sss";         
         $service->categorie = $request->nom;


        $service->duree = $request->duree;
        $service['admin_id'] = Auth::guard('admin')->user()->id;
        

        $service->save();
        return response()->json($service, 200);
    }
    //rechercher service à partir de categorie 
    public function searchServiceByCategorie(Request $request)
    {
        $data = $request->only([
            'categorie'
       ]);
        $query = Service::query();
        $serviceList = []; 
        if (!empty($data['categorie'])) {
            $query->Where('categorie', 'like', '%' . $data['categorie'] . '%');
            //get service id 
            $service_id = $query->get('id');
            for ($i=0; $i < count($service_id); $i++) { 
                $service = Service::find($service_id);
                //set service to list if not exist 
                if (!in_array($service, $serviceList)) {
                    $serviceList[] = $service;
                }
            }
        }
       //return service
        return response()->json($serviceList, 200);   
    }

    //rechercher un admin à partir de categorie de service
    public function searchAdminByCategorieService(Request $request)
    {
        $data = $request->only([
            'categorie'
       ]);
        $query = Service::query();
        $adminList = []; 
        if (!empty($data['categorie'])) {
            $query->Where('categorie', 'like', '%' . $data['categorie'] . '%');
            //get admin id 
            $admin_id = $query->get('admin_id');
            for ($i=0; $i < count($admin_id); $i++) { 
                $admin = Admin::find($admin_id);
                //set admin to list if not exist 
                if (!in_array($admin, $adminList)) {
                    $adminList[] = $admin;
                }
            }
        }
       //return admin
        return response()->json($adminList, 200);   
    }

    //rechercher service à partir de id d'admin et categorie de service
    public function searchServiceByAdminAndCategorie(Request $request)
    {
        $data = $request->only([
            'categorie', 'admin_id'
       ]);
        $query = Service::query();
        $serviceList = []; 
        if (!empty($data['categorie']) && !empty($data['admin_id'])) {
            $query->Where('categorie', 'like', '%' . $data['categorie'] . '%')->Where('admin_id', 'like', '%' . $data['admin_id'] . '%');
            //get service id 
            $service_id = $query->get('id');
            for ($i=0; $i < count($service_id); $i++) { 
                $service = Service::find($service_id);
                //set service to list if not exist 
                if (!in_array($service, $serviceList)) {
                    $serviceList[] = $service;
                }
            }
        }
       //return service
        return response()->json($serviceList, 200);   
    }
    
    //modifier un service
    public function updateService(Request $request, $id)
    {
        $service = Service::find($id);
        $service->nom = $request->nom;
        $service->description = $request->description;
        $service->prix = $request->prix;
        $service->image = $request->image;
        $service->categorie_id = $request->categorie_id;
        $service->fournisseur_id = $request->fournisseur_id;
        $service->save();
        return response()->json($service, 200);
    }

    //supprimer un service
    public function deleteService($id)
    {
        $service = Service::find($id);
        $service->delete();
        return response()->json($service, 200);
    }

    //afficher un service
    public function getService($id)
    {
        $service = Service::find($id);
        return response()->json($service, 200);
    }

    //afficher tous les services
    public function getAllServices()
    {
        $services = Service::all();
        return response()->json($services, 200);
    }

    //afficher les services d'un fournisseur
    public function getServicesByFournisseur($id)
    {
        $services = Service::where('fournisseur_id', $id)->get();
        return response()->json($services, 200);
    }

    //afficher les services d'une categorie
    public function getServicesByCategorie($id)
    {
        $services = Service::where('categorie_id', $id)->get();
        return response()->json($services, 200);
    }

    //afficher les services d'une categorie et d'un fournisseur

    public function getServicesByCategorieAndFournisseur($idCategorie, $idFournisseur)
    {
        $services = Service::where('categorie_id', $idCategorie)->where('fournisseur_id', $idFournisseur)->get();
        return response()->json($services, 200);
    }

    public function getServiceByCenter($centerId)
    {
        
        $services = Service::where('admin_id', $centerId)->get();
        return response()->json($services, 200);
    }

//get service by id
    public function getServiceById($id)
    {
        $service = Service::find($id);
        return response()->json($service, 200);
    }
    //update Service
    public function updateServiceById(Request $request, $id)
    {
        $service = Service::find($id);
        $service->nom = $request->nom;
        $service->description = $request->description;
        $service->tarif = $request->tarif;
        $service->duree = $request->duree;
        $service->categorie = $request->categorie;
        $service->save();
        return response()->json($service, 200);
    }
    //delete service 
    public function deleteServiceById($id)
    {
        $service = Service::find($id);
        $service->delete();
        return response()->json($service, 200);
    }

    //get all service
    public function getAllService()
    {
        $services = Service::all();
        return response()->json($services, 200);
    }
    //get service by id
    public function getServiceByAdmin($id)
    {
        $service = Service::find( $id);
        return response()->json($service, 200);
    }

    //get admin by id service
    public function getAdminByService($id)
    {
        $service = Service::find($id);
        $admin = Admin::find($service->admin_id);
        return response()->json($admin, 200);
    }

    //get les 3 derniere service et return avec image et nom et description et nomdeadmin
    public function get3LastService()
    {
        $services = Service::orderBy('created_at', 'desc')->take(3)->get();
        $services = $services->map(function ($item) {
            return [
                'id' => $item->id,
                'nom' => $item->nom,
                'description' => $item->description,
                'tarif' => $item->tarif,
                'duree' => $item->duree,
                'categorie' => $item->categorie,
                'admin_id' => $item->admin_id,
                'image' => $item->image,
                'admin' => $item->admin->nom,
            ];
        });
        return response()->json($services, 200);
    }
}
