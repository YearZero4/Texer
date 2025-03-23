const vform = document.getElementsByClassName('verify-form')[0];
const listfile = document.getElementById('list-file');
const btns = document.getElementById('buttons');
const dni = document.getElementById('dni');
const results = document.getElementsByClassName('results-of-id')[0];
const head = document.getElementsByClassName('header')[0];
const convert = document.getElementById('convert');
const iconxlsx = document.getElementById('xlsx');
vform.style.display = 'none';
loading.style.display='none';
head.style.display='none';
listfile.style.display='none';
counter.style.display='none';
convert.style.display='none';
btns.style.display='flex';
iconxlsx.style.display='none';
document.getElementById('create-pdf').addEventListener('click', (event) => {
 const ci = document.getElementById('dni').textContent;
 cosole.log(ci);
 if (ci) {
  window.location.href = `/generate_pdf/${ci}`;
  } else {
   alert('Por favor, ingresa una cédula antes de generar el PDF.');
  }
});

document.getElementById('back').addEventListener('click', (event) => {
results.style.display='none'; btns.style.display='none'; dni.style.display='none';
head.style.display='flex'; vform.style.display = 'flex'; listfile.style.display = 'flex';
counter.style.display='flex'; convert.style.display='flex'; iconxlsx.style.display='flex';

});
