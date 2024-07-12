function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var openbtn = document.getElementById("openbtn");
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
        openbtn.style.display = "block";
    } else {
        sidebar.style.display = "block";
        openbtn.style.display = "none";
    }
}

document.getElementById("sidebar").style.display = "none";

document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const area = parseFloat(document.getElementById('area').value);
    const perimeter = parseFloat(document.getElementById('perimeter').value);
    
    const a = -1;
    const b = perimeter / 2;
    const c = -area;

    const discriminant = Math.pow(b, 2) - (4 * a * c);
    
    document.getElementById('areaResult').textContent = `Área: ${area} m²`;
    document.getElementById('perimeterResult').textContent = `Perímetro: ${perimeter} m`;
    document.getElementById('quadraticFormula1').textContent = `Ecuación cuadrática: ${a}x² + ${b}x ${c >= 0 ? '+' : '-'} ${Math.abs(c)} = 0`;
    document.getElementById('terms').textContent = `Términos: a = ${a}, b = ${b}, c = ${c}`;
    document.getElementById('discriminantResult').textContent = `Discriminante: ${discriminant}`;
    
    // Mostrar la sección de resultados
    document.getElementById('results').classList.remove('hidden');

    if (discriminant < 0) {
        document.getElementById('solution1').textContent = `No hay soluciones reales.`;
        document.getElementById('solution2').textContent = '';
        document.getElementById('rootsResult').textContent = '';
        document.getElementById('conclusion').textContent = '';
        document.getElementById('steps').innerHTML = '';
    } else {
        const sqrtDiscriminant = Math.sqrt(discriminant);
        const x1 = (-b + sqrtDiscriminant) / (2 * a);
        const x2 = (-b - sqrtDiscriminant) / (2 * a);
    
        const solution1 = Math.round(x1 * 100) / 100;
        const solution2 = Math.round(x2 * 100) / 100;

        // Paso a paso de la solución
        let steps = `
            <p>Calculamos discriminante:</p>
            <p>D = b² - 4ac</p>
            <p>D= ${b}² - 4(${a})(${c})</p>
            <p>D= ${Math.pow(b, 2)} - ${4 * a * c}</p>
            <p>D= ${discriminant}</p>
            <p>Calculamos solución x1 usando el signo positivo:</p>
            <p>x1= (-b + √D) / 2a</p>
            <p>x1 = (${ -b } + √${ discriminant }) / 2(${ a })</p>
            <p>x1 = (${ -b } + ${ sqrtDiscriminant }) / ${ 2 * a }</p>
            <p>x1 = ${ solution1 }</p>
            <p>Calculamos solución x2 usando el signo negativo:</p>
            <p>x2 = (-b - √D) / 2a</p>
            <p>x2=(${ -b } - √${ discriminant }) / 2(${ a })</p>
            <p>x2 = (${ -b } - ${ sqrtDiscriminant }) / ${ 2 * a }</p>
            <p>x2 = ${ solution2 }</p>
        `;
        document.getElementById('steps').innerHTML = steps;

        document.getElementById('solution1').textContent = `Solución x1 (ALTURA) = ${solution1 % 1 === 0 ? solution1 : solution1.toFixed(2)} m`;
        document.getElementById('solution2').textContent = `Solución x2 (BASE) = ${solution2 % 1 === 0 ? solution2 : solution2.toFixed(2)} m`;
        document.getElementById('conclusion').textContent = `La Altura es de ${solution1 % 1 === 0 ? solution1 : solution1.toFixed(2)} m y la Base es ${solution2 % 1 === 0 ? solution2 : solution2.toFixed(2)} m. Estas serían las dimensiones.`;
    }
});

document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.sidebar a').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        toggleSidebar();
    });
});

window.addEventListener('load', function() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    document.querySelectorAll('.sidebar a').forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        }
    });
});
