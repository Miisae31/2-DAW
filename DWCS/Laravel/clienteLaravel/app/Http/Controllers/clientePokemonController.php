<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class clientePokemonController extends Controller
{
    public function index() {
        $apiUrl = 'http://localhost:8001/api/pokemons';
        $pokemons = json_decode(Http::get($apiUrl));

        return view('pokemons',['pokemons' => $pokemons]);
    }
}
