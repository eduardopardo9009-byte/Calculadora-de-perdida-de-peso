document.addEventListener('DOMContentLoaded', () => {
    const btnCalcular = document.getElementById('btnCalcular');
    
    btnCalcular.addEventListener('click', () => {
        // 1. Obtener los valores ingresados por el usuario
        const caloriasPorHora = parseFloat(document.getElementById('tipoEjercicio').value);
        const horas = parseFloat(document.getElementById('horas').value);
        const contenedorResultado = document.getElementById('resultado');

        // 2. Validar que las horas sean correctas
        if (isNaN(horas) || horas <= 0) {
            contenedorResultado.innerHTML = "<strong>Por favor, ingresa un número de horas válido mayor a 0.</strong>";
            contenedorResultado.classList.remove('oculto');
            return;
        }

        // 3. Realizar el cálculo
        // Calorías totales = horas * calorías que quema ese ejercicio por hora
        const caloriasQuemadas = horas * caloriasPorHora;
        
        // Se necesitan aprox 7700 calorías para perder 1 kg de grasa
        const kgPerdidos = caloriasQuemadas / 7700;

        // 4. Mostrar el resultado en el HTML (limitado a 2 decimales)
        contenedorResultado.innerHTML = `
            <strong>¡Excelente trabajo!</strong><br>
            Quemaste aproximadamente <strong>${caloriasQuemadas} calorías</strong>.<br>
            Esto equivale a una pérdida de <strong>${kgPerdidos.toFixed(2)} kg</strong> de grasa.
        `;
        contenedorResultado.classList.remove('oculto');
    });
});