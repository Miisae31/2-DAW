<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PersonaxeController;
use App\Http\Controllers\ExternaController;
use App\Http\Controllers\TipoController;
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

// API Externa
Route::get('/externa', [ExternaController::class, 'obterDatos']);

// Personaxe (protexido con token)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/personaxes', [PersonaxeController::class, 'index']);
    Route::get('/personaxes/{letra}', [PersonaxeController::class, 'buscarPorLetra']);
    Route::post('/personaxes', [PersonaxeController::class, 'store']);
    Route::delete('/personaxes/{id}', [PersonaxeController::class, 'destroy']);
});

// Tipo (protexido con token)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/tipos', [TipoController::class, 'index']);
    Route::post('/tipos', [TipoController::class, 'store']);
    Route::delete('/tipos/{id}', [TipoController::class, 'destroy']);
});
