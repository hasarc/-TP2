// API à utiliser pour le travail: https://randomuser.me/api/?results=5


fetch('https://randomuser.me/api/?results=5')
  .then(response => response.json()) 
  .then(data => {
    let output = '<h2>Liste des utilisateurs</h2>'; 
    data.results.forEach(function(user) { 
      output += '<img src="' + user.picture.medium + '" alt="Photo de l\'utilisateur" /> - '; 
      output += user.name.first + ' ' + user.name.last + ' - '; 
      output += user.email + '<br/>';
    });

    document.getElementById('container').innerHTML = output;

    console.log(data);
  })
  .catch(error => console.error('Erreur :', error));
