let btnNodejs = document.getElementById('btn-nodejs');
let btnLinux = document.getElementById('btn-linux');
let btnWeb = document.getElementById('btn-web');

btnNodejs.addEventListener('click', removeBtn);
btnLinux.addEventListener('click', removeBtn);
btnWeb.addEventListener('click', removeBtn);

function removeBtn(e) {
  e.target.className = "d-none";
}
