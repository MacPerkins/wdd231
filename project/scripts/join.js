document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const dialog = document.createElement('dialog');
    dialog.innerHTML = `
        <p>Thanks for joining our newsletter!</p>
        <button id="closeDialog">Close</button>
    `;
    document.body.appendChild(dialog);

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        localStorage.setItem('formSubmitted', 'true');

        dialog.showModal();

        document.getElementById('closeDialog').addEventListener('click', () => {
            dialog.close();
            form.reset();
        });
    });
});