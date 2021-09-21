function calculate() {
    let c1 = Number(document.getElementById('c1').value);
    let c2 = Number(document.getElementById('c2').value);
    let c3 = Number(document.getElementById('c3').value);
    let c4 = Number(document.getElementById('c4').value);
    let c5 = Number(document.getElementById('c5').value);
    let c6 = Number(document.getElementById('c6').value);
    let c7 = Number(document.getElementById('c7').value);
    let c8 = Number(document.getElementById('c8').value);
    let g1 = Number(document.getElementById('g1').value);
    let g2 = Number(document.getElementById('g2').value);
    let g3 = Number(document.getElementById('g3').value);
    let g4 = Number(document.getElementById('g4').value);
    let g5 = Number(document.getElementById('g5').value);
    let g6 = Number(document.getElementById('g6').value);
    let g7 = Number(document.getElementById('g7').value);
    let g8 = Number(document.getElementById('g8').value);
    let CGPA = (((c1 * g1) + (c2 * g2) + (c3 * g3) + (c4 * g4) + (c5 * g5) + (c6 * g6) + (c7 * g7) + (c8 * g8)) / (g1 + g2 + g3 + g4 + g5 + g6 + g7 + g8));
    document.getElementById('CGPA').value = CGPA;
}