<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePokemonRequest;
use App\Http\Requests\UpdatePokemonRequest;
use App\Models\Pokemon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class PokemonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pokemons = Pokemon::all();
        return response()->json($pokemons, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required|string'
        ]);
        $pokemon = new Pokemon();
        $pokemon->nome = $request->nome;
        $pokemon->save();


       // $pokemon = Pokemon::create($request->all());

        return response()->json($pokemon, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $pokemon = Pokemon::find($id);

        if(!$pokemon) {
            return response()->json(['error' => 'Non se atopou o Pokemon'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $pokemon = Pokemon::find($id);

        if (!$pokemon) {
            return response()->json(['error' => 'Non se atopou o Pokemon'], 404);
        }

        $request->validate([
            'nome' => 'required|string'
        ]);

        $pokemon->update($request->all());

        return response()->json($pokemon, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $pokemon = Pokemon::find($id);

        if (!$pokemon) {
            return response()->json(['error' => 'Non se atopou o Pokemon'], 404);
        }

        $pokemon->delete();

        return response()->json(['message' => 'Pokemon eliminado'], 200);
    }
}
