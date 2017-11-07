export default {
  contactLinks: [
    { link: true, href: 'http://www.facebook.com/frontinudi', alt: '#facebook', small: false, icon: '../assets/img/facebook.svg' },
    { link: true, href: 'http://www.twitter.com/frontinudi', alt: '#twitter', small: false, icon: '../assets/img/twitter.svg' },
    { link: true, href: 'http://www.instagram.com/frontinudi', alt: '#instagram', small: false, icon: '../assets/img/instagram.svg' },
    { link: true, href: 'http://frontinudi.slack.com', alt: '#slack', small: false, icon: '../assets/img/slack.svg' }
  ],
  toolbarLinks: [
    { text: 'Objetivo', link: true, href: '#objetivo', small: false },
    { text: 'Quem somos', link: true, href: '#quem-somos', small: false },
    { text: 'Front-Talk', link: true, href: '#front-talk', small: false },
    { text: 'Contato', link: true, href: '#contato', small: false },
    { text: 'Inscreva-se', link: true, href: 'https://www.meetup.com/FrontInUDI/?_cookie-check=UVXsWAPRU3l4zVXk', target: '_blank', small: true }
  ],
  talkCards: [
    {
      title: 'Welcome',
      color: '#03b3e4',
      text: 'Hello World, FrontInUDI!',
      author: { name: 'Eduardo G. Costa', contact: 'https://www.linkedin.com/in/geceduardo/' }
    },
    {
      title: 'UX',
      color: '#02cabe',
      text: 'Design System',
      author: { name: 'Fernando Garcia', contact: 'https://www.linkedin.com/in/garciafsouza/' }
    },
    {
      title: 'UI',
      color: '#a660df',
      text: 'Web performance optimization com Webpack',
      author: { name: 'Pablo Henrique P. Silva', contact: 'https://www.linkedin.com/in/pablohpsilva/' }
    },
    {
      title: 'Nome da Talk',
      color: '#a6a6a6',
      text: 'React: o framework onipresente - Hipsters',
      author: { name: 'Fernando Garcia', contact: 'https://google.com' }
    },
    {
      title: 'Nome da Talk',
      color: '#fcc129',
      text: 'React: o framework onipresente - Hipsters',
      author: { name: 'Fernando Garcia', contact: 'https://google.com' }
    },
    {
      title: 'Nome da Talk',
      color: '#ed3e7b',
      text: 'React: o framework onipresente - Hipsters',
      author: { name: 'Fernando Garcia', contact: 'https://google.com' }
    }
  ],
  organization: [
    { name: 'Eduardo Gonçalves', profession: 'Front-End Engineer na Zup', picture: 'static/img/eduardo.jpg' },
    { name: 'Fernando Garcia', profession: 'UX/UI Design e Front-End Developer na Martins', picture: 'static/img/fernando.jpg' },
    { name: 'Lucas Menezes', profession: 'Test Automation na Zup', picture: 'static/img/lucas.jpg' },
    { name: 'Pablo Henrique P. Silva', profession: 'Squad leader/Front-End Developer na Softbox', picture: 'static/img/pablo.jpg' }
  ],
  sponsors: [
    { name: 'UFU - Universidade Federal de Uberlândia', site: 'http://www.ufu.br/', picture: 'static/img/ufu_logo.png', large: false, small: false }
    // { name: 'FACOM - Faculdade de Computação UFU', site: 'http://www.facom.ufu.br/', picture: 'static/img/facom.png' }
  ],
  welcomeContainer: {
    h1: { id: 'welcome', text: 'FrontInUDI 2017' },
    h2: { text: 'Chegamos na melhor cidade mineira' }
  },
  learnShareContainer: {
    h1: { id: 'objetivo', text: 'Aprender, compartilhar e se divertir' },
    p: { text: 'FrontInUDI foi criado com o propósito de reunir interessados em desenvolvimento Frontend e outras tecnologias relacionadas, desde entusiastas aos mais experientes para realizarmos discussões, palestras e workshops com o intuito de compartilhar conhecimento e experiências.' }
  },
  whoWeAreContainer: {
    h1: { id: 'quem-somos', text: 'Quem somos' },
    p: { text: '' }
  },
  frontTalkContainer: {
    h1: { id: 'front-talk', text: 'Front-Talk' },
    p: { text: 'Dia 25/11/2017 das 9AM até 12PM' }
  },
  sponsorsContainer: {
    h1: { id: 'sponsors', text: 'Patrocinadores' },
    p: { text: '' }
  },
  contactContainer: {
    h1: { id: 'contato', text: 'Quer patrocinar? Dúvidas? Sugestões?' },
    h2: { text: 'Escreva pra gente' },
    email: { text: 'frontinudi@gmail.com' },
    span: { text: 'Acompanhe o FrontInUDI:' }
  },
  registerContainer: {
    input: { text: 'Informe seu email e fique atualizado' },
    button: { text: 'Cadastrar email' }
  },
  footerContainer: {
    p: { text: 'com amor para a comunidade', icon: '' }
  }
}
