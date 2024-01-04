<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

use App\Models\Reservation;
use Illuminate\Support\Collection;

class ReservationController extends Controller
{
    //ajouter une reservation
    public function addReservation(Request $request)
    {
        $reservation = new Reservation();
        $reservation->date = $request->date;
        $reservation->client_id = $request->client_id;
        $reservation->service_id = $request->service_id;
        $reservation->save();
        return response()->json($reservation, 200);
    }

    //get reservation by admin_id à partir de service_id tels que dans la table service on trouve l'admin_id
    public function getReservationByAdmin($id)
    {
        $admin=Admin::find($id);
        //filtrer les services de l'admin
        $services=$admin->services;
        //filtrer les reservations de ces services
        $reservations = collect();

        foreach($services as $service){
            $reservations[]=$service->reservations;
        }
        //retourner nom de service et nom dde client et date
        $reservations=$reservations->flatten();
        $reservations=$reservations->map(function($item){
            return [
                'service'=>$item->service->nom,
                'client'=>$item->client->nom,
                'date'=>$item->date,
                'etat'=>$item->etat,
            ];
        });
        return response()->json($reservations, 200);        
    }

    //modifier une reservation
    public function updateReservation(Request $request, $id)
    {
        $reservation = Reservation::find($id);
        $reservation->date = $request->date;
        $reservation->heure = $request->heure;
        $reservation->client_id = $request->client_id;
        $reservation->save();
        return response()->json($reservation, 200);
    }

    //supprimer une reservation

    public function deleteReservation($id)
    {
        $reservation = Reservation::find($id);
        $reservation->delete();
        return response()->json($reservation, 200);
    }

    //afficher une reservation
    public function getReservation($id)
    {
        $reservation = Reservation::find($id);
        return response()->json($reservation, 200);
    }

    //afficher toutes les reservations
    public function getReservations()
    {
        $reservations = Reservation::all();
        return response()->json($reservations, 200);
    }

    //afficher les reservations d'un client
    public function getReservationsClient($id)
    {
        $reservations = Reservation::where('client_id', $id)->get();
        //get admin by id service


        $reservation=$reservations->map(function($item){
            return [
                'service'=>$item->service->nom,
                'date'=>$item->date,
                'etat'=>$item->etat,
            ];
        });
        return response()->json($reservation, 200);
        
    }


}
