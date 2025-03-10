<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pokemon extends Model
{
    use HasFactory;

    protected $table = 'pokemons'; // Indicamos a taboa porque o comando --all pode dar algun problema
    protected $fillable = ['nome'];
}
