<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Pérdida de Peso</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="contenedor">
        <!-- Asegúrate de tener una imagen llamada ejercicio.jpg en la carpeta img -->
        <img src="img/ejercicio.jpg" alt="Persona haciendo ejercicio" class="imagen-banner" onerror="this.src='https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80'">
        
        <h1>Calcula tu Pérdida de Peso</h1>
        <p>Descubre cuántos kilogramos podrías perder según tus horas de ejercicio.</p>
        
        <div class="formulario">
            <label for="tipoEjercicio">Tipo de ejercicio:</label>
            <select id="tipoEjercicio">
                <option value="300">Caminar (Ligero - 300 cal/hora)</option>
                <option value="500">Bicicleta/Nadar (Moderado - 500 cal/hora)</option>
                <option value="700">Correr (Intenso - 700 cal/hora)</option>
            </select>

            <label for="horas">Horas de ejercicio a la semana:</label>
            <input type="number" id="horas" placeholder="Ej: 5" min="0">

            <button id="btnCalcular">Calcular</button>
        </div>

        <div id="resultado" class="resultado oculto">
            <!-- Aquí aparecerá el resultado -->
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
