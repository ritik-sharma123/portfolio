
 // Mobile Menu Toggle
 document.getElementById('menu-btn').addEventListener('click', function () {
    let menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    menu.classList.toggle('flex-col');
    menu.classList.toggle('items-center');
    menu.classList.toggle('w-full');
});
