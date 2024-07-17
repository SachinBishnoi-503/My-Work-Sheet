document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');

            // Hide all tab contents
            contents.forEach(content => content.classList.remove('active'));
            // Show the content corresponding to the clicked button
            const month = this.getAttribute('data-month');
            document.getElementById(month).classList.add('active');
        });
    });
});
