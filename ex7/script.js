function wordCounter(str) {
    return str.replace(/[\W_]+/g, ' ').trim().split(' ').length;
}

const textArea = document.getElementById('textArea');
const countButton = document.getElementById('countButton');
const output = document.getElementById('output');

countButton.addEventListener('click', () => {
    const wordCount = wordCounter(textArea.value);
    output.textContent = `palavras: ${wordCount}`;
});