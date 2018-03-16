let btnJob = document.getElementById('btn-job');
let btnClassName = null;
let btnText = null;

btnJob.addEventListener('click', chageText);

function chageText(e) {
  btnClassName = e.target.className;
  btnText = e.target.innerText;
  e.target.className = "d-none";
  let changeInput = document.querySelector('#change-job');
  changeInput.className = "input-group";
  let input = changeInput.querySelector('input');
  input.focus();
  input.addEventListener('blur', changeJob);
}

function changeJob(e) {
  let jobValue = e.target.value;
  e.target.value = '';
  btnJob.innerText = jobValue ? jobValue : btnText;
  btnJob.className = btnClassName;
  document.querySelector('#change-job').className = "d-none";
}
