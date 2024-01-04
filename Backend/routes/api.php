<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SuperadminController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\CommandeController;
use App\Http\Controllers\ProduitsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('superadmin')->group(function () {
    Route::post('login', [SuperadminController::class, 'login']);
    Route::get('clientsbycenter/{centerId}', [SuperadminController::class, 'getClientsCentre']);
    Route::get('getadmins/{id}', [SuperadminController::class, 'getAdmin']);

    Route::middleware('auth:superadmin')->group(function () {
        Route::post('logout', [SuperadminController::class, 'logout']);
         Route::post('update/{admin}', [SuperadminController::class, 'updateSuperadmin']);
         Route::post('restemail', [SuperadminController::class, 'resetEmail']);

         Route::post('resetpwd', [SuperadminController::class, 'resetPassword']);
         Route::post('logout', [SuperadminController::class, 'logout']);

        Route::get('admins', [SuperadminController::class, 'getAdmins']);
        Route::post('upadmins/{id}', [SuperadminController::class, 'updateAdmin']);
        Route::delete('deltadmins/{id}', [SuperadminController::class, 'deleteAdmin']);
        // Route::get('clients/{adminId}', [SuperadminController::class, 'getClientByAdmin']);
        Route::get('clients/{centerId}', [SuperadminController::class, 'getClients']);
        Route::get('clientsbycenter/{centerId}', [SuperadminController::class, 'getClientsCentre']);

        Route::get('fournisseurs', [SuperadminController::class, 'getFournisseurs']);
        Route::post('create', [SuperadminController::class, 'createFournisseur']);
        Route::post('upadmins/{id}', [SuperadminController::class, 'updateAdmin']);
        Route::delete('delete/{id}', [SuperadminController::class, 'deleteFournisseur']);
        Route::delete('deltadmins/{id}', [SuperadminController::class, 'deltadmins']);
       

        Route::get('getFournisseurById/{id}', [SuperadminController::class, 'getFournisseurById']); 
       
       Route::post('updateFournisseur/{id}', [SuperadminController::class, 'updateFournisseur']);
       Route::post('approuver/{id}', [SuperadminController::class, 'approuverAdmin']);
       Route::post('approuverFrnsr/{id}', [SuperadminController::class, 'approuverFrnsr']); 
       Route::get('clients', [ClientController::class, 'getClients']);
       Route::get('getNomAdminDuClient/{id}', [ClientController::class, 'getNomAdminDuClient']);
        // Route::get('clients/{adminId}', [SuperadminController::class, 'getClientByAdmin']);
    });
});

Route::prefix('admin')->group(function () {
    Route::post('create', [AdminController::class, 'createCenter']);
    Route::post('login', [AdminController::class, 'login']);
    Route::get('getAllServices', [ServiceController::class, 'getAllServices']);
    Route::get('clients', [ClientController::class, 'getClients']);
    Route::get('produits', [AdminController::class, 'getProduits']);
    Route::get('getClientByCenter/{centerId}', [ClientController::class, 'getClientsByAdmin']);
    Route::get('getServiceByCenter/{centerId}', [ServiceController::class, 'getServiceByCenter']);
    Route::post('addService', [ServiceController::class, 'addService']);
    Route::post('commanderproduit', [CommandeController::class, 'commanderProduit']);
    Route::get('getClientByAdmin/{id}', [AdminController::class, 'getClientByAdmin']);
    Route::post('updateClinet/{id}', [AdminController::class, 'updateClient']);
    Route::delete('deleteClient/{id}', [AdminController::class, 'deleteClient']);

    Route::middleware('auth:admin')->group(function () {
        Route::post('createClient', [AdminController::class, 'createClient']);
        Route::get('manage-clients', [AdminController::class, 'getClients']);
        Route::get('manage-reservations', [AdminController::class, 'manageReservations']);
        Route::get('manage-services', [AdminController::class, 'manageServices']);
        Route::post('order-products', [AdminController::class, 'orderProductsFromFournisseur']);
        Route::post('createService', [ServiceController::class, 'addService']);
        Route::get('getService/{id}', [ServiceController::class, 'getServiceById']);
        Route::post('updateService/{id}', [ServiceController::class, 'updateServiceById']);
        Route::delete('deleteService/{id}', [ServiceController::class, 'deleteService']);
        Route::post('approuverClient/{id}', [AdminController::class, 'approuverClient']);
        Route::delete('deleteComande/{id}', [CommandeController::class, 'deleteCommande']);
         Route::post('annulerCommande/{id}', [CommandeController::class, 'annulerCommande']);



    });
});

Route::prefix('clients')->group(function () {
    Route::post('login', [ClientController::class, 'login']);
    Route::post('loginAll', [ClientController::class, 'loginAllUser']);

    Route::get('searchbyetab', [ClientController::class, 'searchbyetablis']);
    Route::get('CentrebyCateg', [ServiceController::class, 'searchAdminByCategorieService']);
    Route::get('ServicebyCateg', [ServiceController::class, 'searchServiceByCategorie']);
    Route::get('ServicebyIdCateg', [ServiceController::class, 'searchServiceByAdminAndCategorie']);
    Route::post('addUser', [ClientController::class, 'addUserByRole']);
    
    Route::post('addReservation', [ReservationController::class, 'addReservation']);
    Route::get('getReservationbyadmin/{id}', [ReservationController::class, 'getReservationByAdmin']);
    Route::get('getReservationbyid/{id}', [ReservationController::class, 'getReservationsClient']);

    Route::get('getCommandebyadmin/{id}', [CommandeController::class, 'getCommandeByAdmin']);
    Route::get('getCommandebyFr/{id}', [CommandeController::class, 'getCommandeByFournisseur']);

    Route::get('getallservice', [ServiceController::class, 'getAllService']);
    Route::get('get3LastService', [ServiceController::class, 'get3LastService']);

    Route::get('getServiceById/{id}', [ServiceController::class, 'getServiceByAdmin']);
    Route::get('getAdminByService/{id}', [ServiceController::class, 'getAdminByService']);


});
Route::prefix('fournisseur')->group(function () {
    Route::get('getproduitbyfour/{id}', [ProduitsController::class, 'getProduitByFournisseur']);

});