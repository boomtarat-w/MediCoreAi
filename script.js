document.querySelectorAll('.grid button').forEach(button => {
    button.addEventListener('click', () => {
        alert(`${button.innerText} clicked!`);
    });
});