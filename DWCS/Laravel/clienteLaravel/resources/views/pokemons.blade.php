<h1>Pokemons</h1>
<ul>
    @if($pokemons !== null)
        @foreach($pokemons as $pokemon)
            <li>{{ $pokemon->nome }}</li>
        @endforeach
    @else
    Non se atoparon Pokémons.
    @endif
</ul>
