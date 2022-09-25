(function (){

  // Variáveis

  const nav = document.querySelector('nav')
  const menu = nav.querySelector('div[name="menu"]')
  const botaoMenu = nav.querySelector('button[name="abrirMenu"]')

  // Coloca classe no navbar quando ele é scrollado

  function adicionarClasse () {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY
      if (alturaPagina < 10) nav.classList.remove('scroll')
      else nav.classList.add('scroll')
    })
  }

  // Abre o navbar clicando no botão de menu MOBILE

  function abrirMenu () {
    nav.addEventListener('click', (elemento) => {
      const abrirMenu = 'button[name="abrirMenu"]'
      if (!elemento.target.matches(abrirMenu)) return
      
      const menuAberto = menu.classList.contains('mostrar')
      if (menuAberto) menu.classList.remove('mostrar'), botaoMenu.classList.remove('ativo')
      else menu.classList.add('mostrar'), botaoMenu.classList.add('ativo')
    })
  }

  // Ativar tudo
  adicionarClasse()
  abrirMenu()

}())

