export default {
  contactLinks: [
    { link: true, href: 'http://www.facebook.com/frontinudi', alt: '#facebook', small: false, icon: '../assets/img/facebook.svg' },
    { link: true, href: 'http://www.twitter.com/frontinudi', alt: '#twitter', small: false, icon: '../assets/img/twitter.svg' },
    { link: true, href: 'http://www.instagram.com/frontinudi', alt: '#instagram', small: false, icon: '../assets/img/instagram.svg' },
    { link: true, href: 'http://frontinudi.slack.com', alt: '#slack', small: false, icon: '../assets/img/slack.svg' }
  ],
  announcement: {
    title: { id: 'announcement-title', text: 'VI FrontInUDI' },
    subtitle: { id: 'announcement-subtitle', text: 'May 24th' }
  },
  toolbarLinks: [
    { text: 'Objetivo', link: true, href: '#objetivo', small: false },
    { text: 'Quem somos', link: true, href: '#quem-somos', small: false },
    { text: 'Front-Talk', link: true, href: '#front-talk', small: false },
    { text: 'Contato', link: true, href: '#contato', small: false },
    { text: 'Inscreva-se', link: false, href: 'https://www.meetup.com/FrontInUDI/events/250337436/', target: '_blank', small: true }
  ],
  talkCards: [
    {
      title: 'Abertura',
      color: 'rgb(3, 179, 228, 0.8)',
      text: 'Welcome, FrontInUDI!',
      picture: 'static/img/pablo.jpg',
      author: { name: 'Pablo Henrique Penha Silva', contact: 'https://www.linkedin.com/in/pablohpsilva/' }
    },
    {
      title: 'UI',
      color: 'rgb(2, 202, 190, 0.8)',
      text: 'Usando Jest para testes unitários em JavaScript',
      picture: 'static/img/speakers/alex.jpeg',
      author: { name: 'Alex Bruno Cáceres', contact: 'https://www.linkedin.com/in/alexbrunocaceres/' }
    },
    {
      title: 'UI',
      color: 'rgb(166, 96, 223, 0.8)',
      text: 'Vue.js: Um framework progressivo',
      picture: 'static/img/speakers/eduardo.jpeg',
      author: { name: 'Eduardo Costa', contact: 'https://www.linkedin.com/in/eduardocspv/' }
    },
    {
      title: 'UX',
      color: 'rgb(252, 193, 41, 0.8)',
      text: 'Heurística de Nielsen e como usar na prática',
      picture: 'static/img/speakers/fernando.jpg',
      author: { name: 'Fernando Garcia', contact: 'https://www.linkedin.com/in/garciafsouza/' }
    },
    {
      title: 'Encerramento',
      color: 'rgb(237, 62, 123, 0.8)',
      text: 'Thank you! See you soon.',
      picture: 'static/img/frontinudi970x500.png',
      author: { name: '', contact: 'http://frontinudi.com.br' }
    }
  ],
  organization: [
    { name: 'Eduardo Gonçalves', profession: 'Front-End Engineer na Zup', picture: 'static/img/eduardo.jpg' },
    { name: 'Fernando Garcia', profession: 'UX/UI Design e Front-End Developer na Martins', picture: 'static/img/fernando.png' },
    { name: 'Lucas Menezes', profession: 'Test Automation na Zup', picture: 'static/img/lucas.jpg' },
    { name: 'Pablo Henrique P. Silva', profession: 'Squad leader/Front-End Developer na Softbox', picture: 'static/img/pablo.jpg' },
    { name: 'João Paulo Ávila', profession: 'Front-End Developer na Zup', picture: 'static/img/joao.jpg' }
  ],
  sponsors: [
    { name: 'UFU - Universidade Federal de Uberlândia', site: 'http://www.ufu.br/', picture: 'static/img/ufu_logo.png', large: false, small: false },
    { name: 'Softbox', site: 'http://www.softbox.com.br/', picture: 'static/img/softbox.png' },
    { name: 'Comunidade Colmeia', site: 'http://colmeia.network/', picture: 'static/img/colmeia.png' },
    { name: 'Zup', site: 'http://www.zup.com.br/', picture: 'static/img/zup.png' },
    { name: 'TQI', site: 'http://www.tqi.com.br/', picture: 'static/img/tqi.png' },
    { name: 'Sankhya', site: 'http://www.sankhya.com.br/', picture: 'static/img/sankhya.png' },
  ],
  welcomeContainer: {
    h1: { id: 'welcome', text: 'FrontInUDI 2018' },
    h2: { text: 'Aprender, compartilhar e se divertir. Venha aprender o melhor do Front-End com a gente!' }
  },
  learnShareContainer: {
    h1: { id: 'objetivo', text: 'Aprender, compartilhar e, claro, se divertir' },
    p: { text: 'A comunidade FrontInUDI foi criada com o propósito de reunir interessados em desenvolvimento Front-End e outras tecnologias relacionadas, desde entusiastas aos mais experientes para realizarmos discussões, palestras e workshops com o intuito de compartilhar conhecimento e experiências.' }
  },
  whoWeAreContainer: {
    h1: { id: 'quem-somos', text: 'Quem somos' },
    p: { text: 'Somos uma comunidade criada em Uberlândia, baseada nas principais iniciativas FrontIn e outros meetups de capitais e cidades fora do país com o objetivo de propagar informações sobre front-end e integrar os melhores profissionais da área, compartilhando conhecimento e networking.' }
  },
  frontTalkContainer: {
    h1: { id: 'front-talk', text: 'Front-Talk' },
    // p0: { id: 'front-talk text', text: 'Como primeiro meetup em Uberlândia, gostaríamos de introduzir o FrontInUDI para toda comunidade disposta a participar e compartilhar conhecimento. Neste primeiro meetup teremos três palestras, sendo uma de apresentação do FrontInUDI e quais são nossos planos com essa comunidade. As outras duas são relacionadas com UX e UI, para começarmos com o pé direito nessa incrivel jornada de conhecimento e comunidade.' },
    p0: { id: 'front-talk text', text: 'Neste sexto meetup em Uberlândia, continuamos a jornada pelas empresas e nosso objetivo de engajar toda a comunidade de Front-End da cidade segue a todo vapor!' },
    p: { text: 'Dia 24/05/2018 das 19 às 22' }
  },
  sponsorsContainer: {
    h1: { id: 'sponsors', text: 'Apoiadores' },
    p: { text: 'UFU • UberHUB • GDG Uberlândia • Developer Circles Uberlândia • Softbox • Comunidade Colmeia • Zup • TQI • Sankhya' }
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
  },
  miner: {
    token: 'AfArNLjM3lGyTUUJ1tKXKRNAPrV14eqv'
  }
}
