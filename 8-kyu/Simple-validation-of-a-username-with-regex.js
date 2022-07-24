// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

// Solution//////////////////

function validateUsr(username) {
  res = /^[0-9a-z_]{4,16}$/;

  return res.test(username);
}

console.log(
  validateUsr('asddsa'),
  validateUsr('a'),
  validateUsr('Hass'),
  validateUsr('Hasd_12assssssasasasasasaasasasasas'),
  validateUsr(''),
  validateUsr('____'),
  validateUsr('012'),
  validateUsr('p1pp1'),
  validateUsr('asd43 34'),
  validateUsr('asd43_34')
);
