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

    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    const area = base * height;
    const perimeter = 2 * (base + height);


    document.getElementById('baseValue').textContent = base + ' m';
    document.getElementById('heightValue').textContent = height + ' m';

    // Display results
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('areaResult').textContent = 'Área: ' + area + ' m²';
    document.getElementById('perimeterResult').textContent = 'Perímetro: ' + perimeter + ' m';


    const procedure = `
        Área = b x h<br>
        Área = ${base} x ${height}<br>
        Área = ${area} m²<br><br>
        Perímetro = 2b + 2h<br>
        Perímetro = 2(${base}) + 2(${height})<br>
        Perímetro = ${2*base} + ${2*height}<br>
        Perímetro = ${perimeter} m
    `;
    document.getElementById('procedure').innerHTML = procedure;


    const conclusion = `
        Con una base de ${base} m y una altura de ${height} m, el área del rectángulo es ${area} m² y el perímetro es ${perimeter} m.
    `;
    document.getElementById('conclusion').textContent = conclusion;
});
