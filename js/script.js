window.addEventListener('load', function () {

    // let slider1 = new Slider('.gallery-1');


    let slider1 = new NiceSlider('.gallery-1')


    let slider2 = new NiceSlider('.gallery-2', 1550);

});

class Slider {
    constructor(selector) {
        this.rootElem = document.querySelector(selector);
        this.images = this.rootElem.querySelectorAll('.photos img');
        this.i = 0;
        this.initControls();
    }

    initControls() {
        let btnPrev = this.rootElem.querySelector('.buttons .prev');
        let btnNext = this.rootElem.querySelector('.buttons .next');
        btnPrev.addEventListener('click', () => this.prev());
        btnNext.addEventListener('click', () => this.next());
    }

    prev() {
        this.images[this.i].classList.remove('showed');
        this.i = (this.i < 1) ? this.images.length - 1 : this.i - 1;
        this.images[this.i].classList.add('showed');
    }

    next() {
        this.images[this.i].classList.remove('showed');
        this.i = (this.i >= this.images.length - 1) ? 0 : this.i + 1;
        this.images[this.i].classList.add('showed');
    }

}

class NiceSlider extends Slider {
    constructor(selector, duration) {
        super(selector);
        this.next = super.next;
        this.swapImg(duration)
    }

    swapImg(duration = 3000) {
        setInterval(() => {
            this.next()
        }, duration);

    }

}
