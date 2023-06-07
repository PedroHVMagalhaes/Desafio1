
const handleSubmit = (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;


  fetch('https://api.sheetmonkey.io/form/ngriDHTwDfiKeApeNHr6iz', {

    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }),
    
  });
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
}

document.querySelector('form').addEventListener('submit', handleSubmit);
