<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePersonaxeRequest;
use App\Http\Requests\UpdatePersonaxeRequest;
use App\Models\Personaxe;

class PersonaxeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Personaxe::all());
    }

    public function vistaPersonaxes()
    {
        $personaxes = Personaxe::all();
        return view('personaxes.index', compact('personaxes'));
    }

    public function buscarPorLetra($letra)
    {
        return response()->json(Personaxe::where('nome', 'like', $letra . '%')->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePersonaxeRequest $request)
    {
        $request->validate([
            'nome' => 'required|string',
            'imaxe' => 'required|url',
            'tipo_id' => 'required|exists:tipos,id',
            'descricion' => 'required|string',
        ]);

        $personaxe = Personaxe::create($request->all());
        return response()->json($personaxe, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Personaxe $personaxe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePersonaxeRequest $request, Personaxe $personaxe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Personaxe::destroy($id);
        return response()->json(['message' => 'Personaxe eliminado'], 200);
    }
}
