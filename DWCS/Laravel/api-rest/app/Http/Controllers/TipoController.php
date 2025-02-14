<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTipoRequest;
use App\Http\Requests\UpdateTipoRequest;
use App\Models\Tipo;

class TipoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Tipo::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTipoRequest $request)
    {
        $request->validate([
            'nome' => 'required|100'
        ]);

        $tipo = Tipo::create($request->all());
        return response()->json($tipo, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Tipo $tipo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTipoRequest $request, Tipo $tipo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Tipo::destroy($id);
        return response()->json(['message' => 'Tipo eliminado'], 200);
    }
}
