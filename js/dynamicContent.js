document.addEventListener('DOMContentLoaded', () => {
    const dynamicContentDiv = document.querySelector('.dynamic-content-container');
    const menuLinks = document.querySelectorAll('.menu-link');

    menuLinks.forEach((link) => {
        link.addEventListener('click', async (event) => {
            event.preventDefault();

            const menuRoute = link.getAttribute('href');
            try {
                const { items } = await (await fetch(menuRoute)).json();
                dynamicContentDiv.innerHTML = items ? items.join(', ') : '';
            } catch (error) {
                console.error('Error:', error);
            }
        });
    });
});
