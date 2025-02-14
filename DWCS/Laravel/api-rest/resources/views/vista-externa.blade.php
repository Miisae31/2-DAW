@if(isset($data) && is_array($data) && count($data) > 0)
    <ul>
        @foreach($data as $movie)
            <li>
                <strong>Título:</strong> <a href="{{ $movie['url'] }}" target="_blank">{{ $movie['primaryTitle'] }}</a> <br>
                <strong>Descripción:</strong> {{ $movie['description'] }} <br>
                <strong>Año de lanzamiento:</strong> {{ $movie['releaseDate'] }} <br>
                <strong>Duración:</strong> {{ $movie['runtimeMinutes'] }} minutos <br>
                <strong>Rating promedio:</strong> {{ $movie['averageRating'] }} <br>
                <strong>Géneros:</strong>

                <img src="{{ $movie['primaryImage'] }}" alt="Imagen de la película" width="200" />
            </li>
        @endforeach
    </ul>
@else
    <p>No se han encontrado películas para mostrar.</p>
@endif
