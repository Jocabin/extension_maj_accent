let tab_btn = document.querySelectorAll('div>button');

for (let i = 0; i < tab_btn.length; i++) {
    tab_btn[i].addEventListener('click', () => {
        navigator.clipboard.writeText(tab_btn[i].innerHTML);
    });
}