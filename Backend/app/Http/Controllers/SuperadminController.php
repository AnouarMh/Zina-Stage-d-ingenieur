<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Superadmin;
use App\Models\Admin;
use App\Models\Fournisseur;
use App\Models\Client;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class SuperadminController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        $superadmin = Superadmin::where('email', $credentials['email'])->first();
    
        if (!$superadmin || !Hash::check($credentials['password'], $superadmin->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    
        $token = $superadmin->createToken('superadmin-token')->plainTextToken;
        return response()->json(['token' => $token], 200);
    }
  


    public function logout()
    {
        Auth::guard('superadmin')->user()->tokens()->delete();
        return response()->json(['message' => 'Logged out successfully'], 200);
    }

    public function getAdmins()
    {
        $admins = Admin::all();
        return response()->json($admins, 200);
    }
    //get admins by id
    public function getAdmin($id)
    {
        $admin = Admin::find($id);
        return response()->json($admin, 200);
    }
    //modifier admin
    public function updateAdmin(Request $request, $id)
    {
        $data = $request->only([
            'nom', 'email', 'numerotel', 'localisation', 'country', 'localisation', 'horaire'
        ]);
        $admin = Admin::find($id);
        $admin->update($data);
        return response()->json($admin, 200);
    }
//afficher la liste des clients selon id d'admin
    public function getClients($id)
    {
        $clients = Client::where('admin_id', $id)->get();
        return response()->json($clients, 200);
    }
    //supprimer le compte d'admin
    public function deleteAdmin($id)
    {
        $admin = Admin::find($id);
        $admin->delete();
        return response()->json("Supprimé", 200);
    }
    
    public function getFournisseurs()
    {
        $fournisseurs = Fournisseur::all();
        return response()->json($fournisseurs, 200);
    }

    public function getClientByAdmin($adminId)
    {
        $clients = Client::where('admin_id', $adminId)->get();
        return response()->json($clients, 200);
    }

    //filtrer les clients par centre
    public function getClientByCenter($centerId)
    {
        $clients = Client::where('admin_id', $centerId)->get();
        return response()->json($clients, 200);
    }
    public function getAllClients()
    {
        $clients = Client::all();
        return response()->json($clients, 200);

    }

    //update superadmin
    public function updateSuperadmin(Request $request)
    {
        $request->validate([
            'image' => 'sometimes|image|nullable',
        ]);
        $data = $request->only([
            'nom', 'prenom', 'email', 'numerotel', 'image', 'country',
        ]);
        if ($request->hasFile('image')) {
            $extension = $request->image->getClientOriginalExtension();
            $filename = Str::random(10) . '.' . $extension;
            $request->image->storeAs('uploads', $filename, 'public');
            $path = 'http://localhost:8000/storage/uploads/' . $filename;
            $data['image'] = $path;
        }
     

        $superadmin = Auth::guard('superadmin')->user();
        $superadmin->update($data);

        return response()->json(['message' => 'Superadmin updated successfully', 'superadmin' => $superadmin], 200);
    }
    //get client by admin_id
    public function getClientsCentre($centerId)
    {
        $clients = Client::where('admin_id', $centerId)->get();
        return response()->json($clients, 200);
    }

    //reset email with confirmation password 
    public function resetEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:superadmins',
            'password' => 'required|min:6',
        ]);

        $credentials = $request->only('email', 'password');
        $superadmin = Auth::guard('superadmin')->user();

        if (!$superadmin || !Hash::check($credentials['password'], $superadmin->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $superadmin->update(['email' => $credentials['email']]);

        return response()->json(['message' => 'Email updated successfully', 'superadmin' => $superadmin], 200);
    }

    //reset password with confirmation password
    public function resetPassword(Request $request)
    {
        $request->validate([
            'password' => 'required|min:6',
            'new_password' => 'required|min:6',
        ]);

        $credentials = $request->only('password', 'new_password');
        $superadmin = Auth::guard('superadmin')->user();

        if (!$superadmin || !Hash::check($credentials['password'], $superadmin->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $superadmin->update(['password' => Hash::make($credentials['new_password'])]);

        return response()->json(['message' => 'Password updated successfully', 'superadmin' => $superadmin], 200);
    }

    //get client by id
    public function getClient($id)
    {
        $client = Client::find($id);
        return response()->json($client, 200);
    }
    public function createFournisseur(Request $request)
    {
        $request->validate([
            'nom' => 'required',
            'email' => 'required|email|unique:admins',
            'password' => 'required|min:6',
            'country' => 'required',
        ]);
    
       
    
        $data = $request->only([
            'nom', 'email', 'password', 'numerotel', 'image', 'country', 'localisation', 'horaire'
        ]);
    
        // ... Autres étapes de validation et de traitement
        //donne la valeur  de superadmin_id si la superadmin ajouter le centre si nn donne 0
        $data['admin_id'] = Auth::guard('superadmin')->user()->id;

    
        $data['password'] = Hash::make($data['password']);
        $admin = Fournisseur::create($data);
    
        return response()->json(['message' => 'Admin de centre créé avec succès', 'admin' => $admin], 201);
    }
    public function deleteFournisseur($id)
    {
        $fournisseur = Fournisseur::find($id);
        $fournisseur->delete();
        return response()->json($fournisseur, 200);
    }
    public function deltadmins($id)
    {
        $admin = Admin::find($id);
        $admin->delete();
        return response()->json($admin, 200);
    }
   public function updateAdmins(Request $request, $id)
    {
        $data = $request->only([
            'nom', 'email', 'numerotel', 'localisation', 'country', 'localisation', 'horaire'
        ]);
        $admin = Admin::find($id);
        $admin->update($data);
        return response()->json($admin, 200);
    }
    public function updateFournisseur(Request $request, $id)
    {
        $data = $request->only([
            'nom', 'email', 'numerotel', 'localisation', 'country', 'localisation', 'horaire'
        ]);
        $fournisseur = Fournisseur::find($id);
        $fournisseur->save($data);
        return response()->json($fournisseur, 200);
    }




    public function getFournisseurById($id)
    {
        $fournisseurs = Fournisseur::find($id);
        return response()->json($fournisseurs, 200);
    }

    public function approuverAdmin($id)
    {
        // Récupérer l'administrateur par son ID
        $admin = Admin::find($id);

        if (!$admin) {
            return response()->json(['message' => 'Admin not found'], 404);
        }

        // Si l'utilisateur est un super admin, approuver l'administrateur
        // Mettre à jour l'attribut "approuver" à 1
        $admin->approuver = 1;
        $admin->save();

        return response()->json(['message' => 'Admin approved successfully'], 200);
    }

    public function approuverFrnsr($id)
    {
        // Récupérer l'administrateur par son ID
        $fournisseur = Fournisseur::find($id);

        if (!$fournisseur) {
            return response()->json(['message' => 'Fournisseur not found'], 404);
        }

        // Si l'utilisateur est un super admin, approuver l'administrateur
        // Mettre à jour l'attribut "approuver" à 1
        $fournisseur->approuver = 1;
        $fournisseur->save();

        return response()->json(['message' => 'Fournisseur approved successfully'], 200);
    }
}
