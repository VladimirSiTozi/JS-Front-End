function solve() {
  const text = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;
  const resultElement = document.querySelector('#result');

  const convertToPascal = (text) => 
    text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');

  const convertToCamel = text => convertToPascal(text).charAt(0).toLowerCase() + convertToPascal(text).slice(1);

  const convertor = {
    "Camel Case": convertToCamel,
    "Pascal Case": convertToPascal
  };

  if (!convertor[convention]) {
    resultElement.textContent = 'Error!';
    return;
  }

  resultElement.textContent = convertor[convention](text);
}
