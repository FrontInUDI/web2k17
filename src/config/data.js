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
    { text: 'Inscreva-se', link: false, href: 'https://www.meetup.com/FrontInUDI/events/246328872', target: '_blank', small: true }
  ],
  talkCards: [
    {
      title: 'Abertura',
      color: '#03b3e4',
      text: 'Welcome, FrontInUDI!',
      author: { name: 'Eduardo G. Costa', contact: 'https://www.linkedin.com/in/geceduardo/' }
    },
    {
      title: 'UI',
      color: '#02cabe',
      text: 'Como não ser um frontend',
      author: { name: 'Bruno Carneiro', contact: 'https://www.linkedin.com/in/carneirobruno/' }
    },
    {
      title: 'UX',
      color: '#a660df',
      text: 'Programação funcional e frontend',
      author: { name: 'Washington Soares (Xitão)', contact: 'https://www.linkedin.com/in/washington-soares-braga-7a05a340/' }
    },
    {
      title: 'UI',
      color: '#a6a6a6',
      text: 'Persistência de dados com Redux',
      author: { name: 'Washington Pires (Wash) ', contact: 'https://www.linkedin.com/in/washingtonpires/' }
    },
    {
      title: 'Encerramento',
      color: '#fcc129',
      text: 'Thank you! See you soon.',
      author: { name: 'Eduardo G. Costa', contact: 'https://www.linkedin.com/in/geceduardo/' }
    },
    {
      title: '',
      color: '#ed3e7b',
      text: '',
      author: { name: '', contact: 'http://frontinudi.com.br' }
    }
  ],
  organization: [
    { name: 'Eduardo Gonçalves', profession: 'Front-End Engineer na Zup', picture: 'static/img/eduardo.jpg' },
    { name: 'Fernando Garcia', profession: 'UX/UI Design e Front-End Developer na Martins', picture: 'static/img/fernando.png' },
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
    h1: { id: 'objetivo', text: 'Aprender, compartilhar e, claro, se divertir' },
    p: { text: 'FrontInUDI foi criado com o propósito de reunir interessados em desenvolvimento Frontend e outras tecnologias relacionadas, desde entusiastas aos mais experientes para realizarmos discussões, palestras e workshops com o intuito de compartilhar conhecimento e experiências.' }
  },
  whoWeAreContainer: {
    h1: { id: 'quem-somos', text: 'Quem somos' },
    p: { text: '' }
  },
  frontTalkContainer: {
    h1: { id: 'front-talk', text: 'Front-Talk' },
    // p0: { id: 'front-talk text', text: 'Como primeiro meetup em Uberlândia, gostaríamos de introduzir o FrontInUDI para toda comunidade disposta a participar e compartilhar conhecimento. Neste primeiro meetup teremos três palestras, sendo uma de apresentação do FrontInUDI e quais são nossos planos com essa comunidade. As outras duas são relacionadas com UX e UI, para começarmos com o pé direito nessa incrivel jornada de conhecimento e comunidade.' },
    p0: { id: 'front-talk text', text: 'Neste segundo meetup em Uberlândia, gostaríamos de intensificar o FrontInUDI para toda comunidade disposta a participar e compartilhar conhecimento.' },
    p: { text: 'Dia 14/12/2017 das 19 às 22' }
  },
  sponsorsContainer: {
    h1: { id: 'sponsors', text: 'Apoiadores' },
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
  },
  miner: {
    token: 'AfArNLjM3lGyTUUJ1tKXKRNAPrV14eqv'
  }
}
