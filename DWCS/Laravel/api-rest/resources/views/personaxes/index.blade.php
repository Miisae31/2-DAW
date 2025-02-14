<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Personaxes</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #4CAF50; color: white; }
        img { width: 50px; height: auto; }
    </style>
</head>
<body>
    <h1>Lista de Personaxes</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Imagen</th>
                <th>Tipo</th>
                <th>Descripción</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($personaxes as $personaxe)
                <tr>
                    <td>{{ $personaxe->id }}</td>
                    <td>{{ $personaxe->nome }}</td>
                    <td><img src="{{ $personaxe->imagen }}" alt="{{ $personaxe->nome }}"></td>
                    <td>{{ $personaxe->tipo }}</td>
                    <td>{{ $personaxe->descripcion }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
