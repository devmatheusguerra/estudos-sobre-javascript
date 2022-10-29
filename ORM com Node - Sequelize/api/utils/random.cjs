function randName() {
    const names = ['John', 'Paul', 'George', 'Ringo', 'Lucas', 'Wesley', 'Matthew'];
    const lastNames = ['Lennon', 'McCartney', 'Harrison', 'Starr', 'Skywalker', 'Snipes', 'McConaughey'];
    return `${names[Math.floor(Math.random() * names.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
  }
  
  function randEmail(name) {
    const domains = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'live.com', 'icloud.com'];
    return `${name.replace(' ', '.')}@${domains[Math.floor(Math.random() * domains.length)]}`.toLowerCase();
  }
  
  function randRole() {
    const roles = ['estudante', 'docente'];
    return roles[Math.floor(Math.random() * roles.length)];
  }
  
  function randBoolean() {
    return Math.random() >= 0.5;
  }

  function randDate() {
    const start = new Date(2010, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  function randNumber(begin, end) {
    return Math.floor(Math.random() * (end - begin + 1)) + begin;
  }


module.exports =  { randName, randEmail, randRole, randBoolean, randDate, randNumber };