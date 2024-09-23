document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.container-solic').forEach(item => {
        item.addEventListener('click', () => {
            const details = item.querySelector('.solic-details');
            details.classList.toggle('d-none'); // Alterna la clase d-none
        });
    });
});