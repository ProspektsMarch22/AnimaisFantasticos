// JavaScript checker
const hasJs = document.body.classList.add('js');

// Animais-Lista (Navegação por Tab)

function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabContent.length && tabMenu.length){

        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((section) => section.classList.remove('ativo'))
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => activeTab(index))
        })

    } else {
        console.log('ERRO: Verifique a seleção feita no tabMenu ou tabContent')
    }
}

initTabNav();

// Accordion List

function initAccordionList() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    if(accordionList.length) {
        accordionList[0].classList.add('ativo');
        accordionList[0].nextElementSibling.classList.add('ativo');

        function activeAccordion() {
            this.classList.toggle('ativo');
            this.nextElementSibling.classList.toggle('ativo');
        }

        accordionList.forEach((item) => item.addEventListener('click', activeAccordion));
    }
}

initAccordionList();

// Smooth Scrolling

function scrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    if(linksInternos.length){
        function scrollToSection(event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href);
    
            // Forma 1
            // const topo = section.offsetTop;
            // window.scrollTo({
            //     top: topo,
            //     behavior: 'smooth',
            // });
    
            //Forma 2
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        linksInternos.forEach((link) => link.addEventListener('click', scrollToSection));
    }
}

scrollSuave();


//Animacao ao passar com scroll

function initAnimeScroll() {
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length){

        const metade = window.innerHeight * 0.6;

        function animeScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionVisible = (sectionTop - metade) < 0;
                if(sectionVisible) {
                    section.classList.add('ativo')
                }
            })
        }

        animeScroll();

        window.addEventListener('scroll', animeScroll);
    }
}

initAnimeScroll();

