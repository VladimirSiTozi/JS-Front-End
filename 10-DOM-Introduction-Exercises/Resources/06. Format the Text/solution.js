function solve() {
  const textareaElement = document.getElementById('input');
  const outputElement = document.getElementById('output')
  const text = textareaElement.value;

  //Convert to paragraph
  const result = text
    .split('.')
    .reduce((result, sentence, i) => {
        const resultIndex = Math.floor(i/3)
        if (!result[resultIndex]){
          result[resultIndex] = []
        }

        result[resultIndex].push(sentence.trim())

        return result
      },[])
      .map(element => `<p>${element.join('. ')}</p>`)
      .join('\n')

  // Append to output element
  outputElement.innerHTML = result

  console.log(result)
}