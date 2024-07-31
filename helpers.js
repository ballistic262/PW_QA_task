function formatProductName(productName) {
    return productName.toLowerCase().replace(/\s+/g, '-');
}

function getRandomFirstName() {
    const firstNames = ['Jarek', 'Włodzimierz', 'Krystyna', 'Antoni', 'Kwadrat'];
    return firstNames[Math.floor(Math.random() * firstNames.length)];
  }
  
  function getRandomLastName() {
    const lastNames = ['Nowak', 'Kowalski', 'Słonimski', 'Jop', 'Pielgrzym'];
    return lastNames[Math.floor(Math.random() * lastNames.length)];
  }
  
  function getRandomPostalCode() {
    return (Math.floor(10000 + Math.random() * 90000)).toString();  // Generates a 5-digit number
  }
  module.exports = {
    formatProductName,
    getRandomFirstName,
    getRandomLastName,
    getRandomPostalCode
  };