<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\Request;

use App\Models\Client;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\Fournisseur;

class ClientController extends Controller
{
    //Ajouetr un client
    public function addClient(Request $request)
    {
        $client = new Client();
        $client->nom = $request->nom;
        $client->prenom = $request->prenom;
        $client->email = $request->email;
        $client->password = $request->password;
        $client->numerotel = $request->numerotel;
        $client->image = $request->image;
        $client->country = $request->country;
        $client->localisation = $request->localisation;
        $client->horaire = $request->horaire;
        $client->admin_id = $request->admin_id;
        $client->save();
        return response()->json($client, 200);
    }

    //Modifier un client
    public function updateClient(Request $request, $id)
    {
        $client = Client::find($id);
        $client->nom = $request->nom;
        $client->prenom = $request->prenom;
        $client->email = $request->email;
        $client->password = $request->password;
        $client->numerotel = $request->numerotel;
        $client->image = $request->image;
        $client->country = $request->country;
        $client->localisation = $request->localisation;
        $client->horaire = $request->horaire;
        $client->admin_id = $request->admin_id;
        $client->save();
        return response()->json($client, 200);
    }

    //Supprimer un client
    public function deleteClient($id)
    {
        $client = Client::find($id);
        $client->delete();
        return response()->json($client, 200);
    }

    //Afficher un client
    public function getClient($id)
    {
        $client = Client::find($id);
        return response()->json($client, 200);
    }

    //Afficher tous les clients
    public function getClients()
    {
        $clients = Client::all();
        return response()->json($clients, 200);
    }

    //Afficher les clients par admin
    public function getClientByAdmin($adminId)
    {
        $clients = Client::where('admin_id', $adminId)->get();
        return response()->json($clients, 200);
    }

    //donne moi la liste de client selon lors admin_id tels que la relation se fait dans un tableau de relation externe 
    public function getClientsByAdmin($id)
    {
        $admin = Admin::find($id);
        $clients = $admin->clients;
        return response()->json($clients, 200);
    }
  

    public function getNomAdminDuClient($id)
    {
        // Trouver le client par son ID
        $client = Client::find($id);

        if (!$client) {
            // Gérer le cas où le client n'est pas trouvé
            return response()->json(['message' => 'Client non trouvé'], 404);
        }

        // Appeler la fonction pour obtenir le nom de l'administrateur associé
        $nomAdmin = $client->getNomAdministrateur();

        // Vous pouvez maintenant utiliser $nomAdmin comme bon vous semble
        return response()->json(['nom_admin' => $nomAdmin]);
    }
    //Login de Client
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        $client = Client::where('email', $credentials['email'])->first();

        if (!$client || !Hash::check($credentials['password'], $client->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $client->createToken('client-token')->plainTextToken;
        return response()->json(['token' => $token,'user-type' =>'client'], 200);
    }

  public function loginAllUser(Request $request)
    {
        $credentials = $request->only('email', 'password');
        $client = Client::where('email', $credentials['email'])->first();
        $admin = Admin::where('email', $credentials['email'])->first();
        $fournisseur = Fournisseur::where('email', $credentials['email'])->first();

        // if (!$client || !Hash::check($credentials['password'], $client->password)) {
        //     return response()->json(['message' => 'Invalid credentials'], 401);
        // }
        // if (!$admin || !Hash::check($credentials['password'], $admin->password)) {
        //     return response()->json(['message' => 'Invalid credentials'], 401);
        // }
        // if (!$fournisseur || !Hash::check($credentials['password'], $fournisseur->password)) {
        //     return response()->json(['message' => 'Invalid credentials'], 401);
        // }

        //if client exist return token and type 
        if($client){
            $token = $client->createToken('client-token')->plainTextToken;
            return response()->json(['token' => $token,'type' =>'client'], 200);
        }
        //if admin exist return token and type
        if($admin){
            $token = $admin->createToken('admin-token')->plainTextToken;
            return response()->json(['token' => $token,'type' =>'admin'], 200);
        }
        //if fournisseur exist return token and type
        if($fournisseur){
            $token = $fournisseur->createToken('fournisseur-token')->plainTextToken;
            return response()->json(['token' => $token,'type' =>'fournisseur'], 200);
        }
        //if ni client ni admin ni fournisseur return error
        else{
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    
    }
    //Logout de Client
    public function logout()
    {
        Auth::guard('client')->user()->tokens()->delete();
        return response()->json(['message' => 'Logged out successfully'], 200);
    }

   //rechercher admin par nom ou localisation ou les deux 
   public function searchbyetablis(Request $request)
   {
       $data = $request->only([
           'nom', 'localisation'
       ]);
   
       $query = Admin::query();
   
       if (!empty($data['nom'])) {
           $query->Where('nom', 'like', '%' . $data['nom'] . '%');
       }
   
       if (!empty($data['localisation'])) {
           $query->Where('localisation', 'like', '%' . $data['localisation'] . '%');
       }

       if (!empty($data['nom']) && !empty($data['localisation'])) {
        $query->Where(function ($query) use ($data) {
            $query->where('nom', 'like', '%' . $data['nom'] . '%')
                  ->where('localisation', 'like', '%' . $data['localisation'] . '%');
        });
    }
   
       $admins = $query->get();
   
       return response()->json($admins, 200);
   }
   //Rechercher service par nom 
    public function searchService(Request $request)
    {
         $data = $request->only([
              'nom'
         ]);
    
         $query = Service::query();
    
         if (!empty($data['nom'])) {
              $query->Where('nom', 'like', '%' . $data['nom'] . '%');
         }
    
         $services = $query->get();
    
         return response()->json($services, 200);
    }
   //cree compte client  avec nom prenom email password confirmpassword
    public function createClient(Request $request)
    {
         $request->validate([
              'nom' => 'required',
              'prenom' => 'required',
              'email' => 'required|email|unique:clients',
              'password' => 'required',
         ]);
    
         $data = $request->only([
              'nom', 'prenom', 'email', 'password','numerotel','image'
         ]);
         //numerotel et image null
            $data['numerotel'] = '0000';
            $data['image'] = 'null';
            $data['country'] = 'Tunisie';
            $data['langue'] = 'Français';
            //admin_id relation manytomany
            //mettre plusieur admin_id
            $data['admin_id'] = [1,2];

         $data['password'] = Hash::make($data['password']);
    
         $client = Client::create($data);
    
         $token = $client->createToken('client-token')->plainTextToken;
    
         return response()->json(['token' => $token], 201);
    }

    //ajouter un user 
    public function addUser(Request $request)
    {
        $request->validate([
            'name' => 'required',
            //email unique dans la table users et dans les autres tables 
            'email' => 'required|email|unique:users|unique:admins|unique:clients',
            'password' => 'required',
       ]);

       $data = $request->only([
            'name', 'email', 'password',
       ]);

       $data['password'] = Hash::make($data['password']);

       $user = User::create($data);

       $token = $user->createToken('user-token')->plainTextToken;

       return response()->json(['token' => $token], 201);
    }

//fonction ajouter user selon leur role avec user name email unique et password et role si son role clients ajouter au tableau client et si centre ajouter au table admin
public function addUserByRole(Request $request)
{
    $request->validate([
        'nom' => 'required',
        'email' => 'required|email|unique:fournisseurs|unique:admins|unique:clients',
        'password' => 'required',
        'role' => 'required',
    ]);

    $data = $request->only([
        'nom', 'email', 'password', 'role','numerotel','image','country','langue','localisation','horaire','superadmin_id','prenom'
    ]);

    $data['password'] = Hash::make($data['password']);
    

    $role = $data['role'];
    unset($data['role']); // Supprimer le rôle du tableau de données car il n'appartient pas à la table utilisateur

    if ($role === 'centre') {
        $data['numerotel'] = '0000';
    $data['image'] = 'null';
    $data['country'] = 'Tunisie';
    $data['langue'] = 'Français';
    $data['localisation'] = 'null';
    $data['horaire'] = 'null';
    $data['superadmin_id'] = 1;
        $admin = Admin::create($data);
        $token = $admin->createToken('admin-token')->plainTextToken;

        return response()->json(['token' => $token], 201);
        //mettre les attributs numerotel valeur par defaut 
        //
    } elseif ($role === 'client') {
        $data['image'] = 'null';
        $data['prenom'] =$data['nom'];
        $data['numerotel'] = '0000';
        $data['country'] = 'Tunisie';
        $data['langue'] = 'Français';

        $client = Client::create($data); // Ajouter un client au lieu d'un utilisateur
        $token = $client->createToken('admin-token')->plainTextToken;

        return response()->json(['token' => $token], 201);
    } elseif ($role === 'fournisseur') {
        $data['image'] = 'null';
        $data['prenom'] =$data['nom'];
        $data['numerotel'] = '0000';
        $data['country'] = 'Tunisie';
        $data['langue'] = 'Français';
        $data['localisation'] = 'null';
        $data['horaire'] = 'null';
        $data['admin_id'] = 1;
        $client = Fournisseur::create($data); // Ajouter un client au lieu d'un utilisateur
        $token = $client->createToken('admin-token')->plainTextToken;

        return response()->json(['token' => $token], 201);
    } 
    else {
        return response()->json(['error' => 'Rôle non valide'], 400);
    }

   

    
}
//cree compte avec google account
public function createClientWithGoogle(Request $request)
{
     $request->validate([
          'nom' => 'required',
          'prenom' => 'required',
          'email' => 'required|email|unique:clients',
          'password' => 'required',
     ]);

     $data = $request->only([
          'nom', 'prenom', 'email', 'password','numerotel','image'
     ]);
     //numerotel et image null
        $data['numerotel'] = '0000';
        $data['image'] = 'null';
        $data['country'] = 'Tunisie';
        $data['langue'] = 'Français';
        //admin_id relation manytomany
        //mettre plusieur admin_id
        $data['admin_id'] = [1,2];

     $data['password'] = Hash::make($data['password']);

     $client = Client::create($data);

     $token = $client->createToken('client-token')->plainTextToken;

     return response()->json(['token' => $token], 201);
    }

    
}
