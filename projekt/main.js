    function kubekKlik(evt) {
        let poziom = Number(this.getAttribute('poziom'));
        poziom += 16;
        if (poziom <= 99) {
            this.style.backgroundPosition = "0 " + poziom + "%";
            this.setAttribute('poziom', poziom);
        } else {
            this.style.cursor = "not-allowed";
        }
        
    }
    let kubki = document.querySelectorAll('.kubek');
    kubki.forEach(kubek => {
        kubek.addEventListener('click', kubekKlik)
    });