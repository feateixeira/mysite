  class MobileNavbar {
    constructor(mobileMenu, navList, navLinks, navLinks2) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.navLinks2 = document.querySelectorAll(navLinks2);
      this.activeClass = "active";
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
      this.navLinks2.forEach((item) => {
        item.addEventListener("click", this.handleClick);
      });
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
    ".nav-list li a"
  );
  mobileNavbar.init();
  
  function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = " ";
    textoArray.forEach(function (letra, i) {
      setTimeout(function () {
        elemento.innerHTML += letra;
      }, 100 * i);
    });
  }
  const titulo = document.querySelector(".typewriter");
  typeWrite(titulo);
  
  const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2000,
  });
  
  sr.reveal(".delaySmallReveal", { delay: 200 });
  sr.reveal(".delayMediumReveal", { delay: 300 });
  sr.reveal(".delayLargeReveal", { delay: 400 });
  sr.reveal(".delayExtraBigReveal", { delay: 600 });
  
  sr.reveal(".intervalCardReveal", { interval: 400 });
  
  var texto1 = document.querySelector(".mudarTextoDescricao");
  
  document.querySelector(".html").addEventListener("mouseover", function () {
    texto1.innerHTML =
      "HTML abreviação para a expressão inglesa HyperText Markup Language, que significa: 'Linguagem de Marcação de Hipertexto' é uma linguagem de marcação utilizada na construção de páginas na Web.";
  });
  
  document.querySelector(".css").addEventListener("mouseover", function () {
    texto1.innerHTML =
      "Cascading Style Sheets ou CSS, é um mecanismo para adicionar estilo a um documento web criado com o propósito de estilizar as páginas HTML.";
  });

  document.querySelector(".js").addEventListener("mouseover", function () {
    texto1.innerHTML =
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da web.";
  });

  document.querySelector(".react").addEventListener("mouseover", function () {
    texto1.innerHTML =
      "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.";
  });
  
  document.querySelector(".next").addEventListener("mouseover", function () {
    texto1.innerHTML =
      "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React.";
  });
  
  document.querySelector(".node").addEventListener("mouseover", function () {
    texto1.innerHTML =
      "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.";
  });
  
  document.querySelector(".bootstrap").addEventListener("mouseover", function () {
    texto1.innerHTML =
      "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.";
  });
  
 
  
  
  document
    .querySelector(".styled")
    .addEventListener("mouseover", function mudarTexto8() {
      texto1.innerHTML =
        "Styled Components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript.";
    });
  
  var sairCaixa = document.getElementsByClassName("sairCaixa");
  
  for (i = 0; i < sairCaixa.length; i++) {
    sairCaixa[i].addEventListener("mouseout", function mudarTextoNormal() {
      texto1.innerHTML = `*passe o cursor no card para ler*`;
    });
  }