<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class ExternaController extends Controller
{
    public function obterDatos()
    {
        // Realizamos la solicitud GET a la API
        $response = Http::withHeaders([
            'x-rapidapi-key' => '69d74599a7mshf2f05c55c1da843p114d3cjsn45df98ad50ad',
            'x-rapidapi-host' => 'imdb236.p.rapidapi.com',
        ])->get('https://imdb236.p.rapidapi.com/imdb/most-popular-movies');

        // Verificamos que la respuesta sea exitosa (código 200)
        if ($response->successful()) {
            // Pasamos la respuesta a la vista
            return view('vista-externa', ['data' => $response->json()]);
        } else {
            return response()->json(['error' => 'No se pudo obtener los datos'], $response->status());
        }
    }
}


