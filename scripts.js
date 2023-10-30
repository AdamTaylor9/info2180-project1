/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const input = document.getElementById('email');
    const message_res = document.querySelector('.message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = input.value.trim();

        if (email === '') {
        message_res.textContent = 'Please enter a valid email address.';
        } else {
        message_res.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        }
    });
});

