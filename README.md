# FutureTube - FrontEnd

## Stack
Esse é um projeto de Frontend Web feito utilizando [ReactJS](https://reactjs.org/) e [Redux](https://redux.js.org/) e como gerenciador de pacotes do NodeJS o [npm](https://www.npmjs.com/).
Sobre a divisão dos arquivos, há dois grandes setores. Os `components` são os componentes em si do meu projeto (Header, Section, Footer e outros). Já o `Containers` são as páginas em si e podem ser pensadas como a união dos componentes para se mostrar na tela.

## Sobre
O FutureTube é um projeto que reproduz basicamente o Youtube, mostrando a tela inicial como landing page, nela é possivel fazer o login ou o signup.
Quando o Usuário está logado aparecem as opções de fazer o upload de um  vídeo: 

Nessa opção é necessario que o usuário acesse a página do vídeo a ser adicionado e copie a URL Embed desse vídeo.

Também é possivel Alterar a Senha do Usuario, Deletar um vídeo e fazer o Logout.

- Integrando com a API externa: [API](https://documenter.getpostman.com/view/10236954/SzezdXbz?version=latest)

- Link para acessar o App: [Site](http://futuretube-yan.s3-website-us-east-1.amazonaws.com/)

## Instruções para rodar
Por ser um projeto com ReactJS, há a necessidade do NodeJS. 
- Clone o Repositório e com ele em sua máquina: `git clone https://github.com/yansabino/futuretube-frontend.git`
- Agora basta abrir o terminal e navegar até o repositório: `cd futuretube-frontend`
- E então instala-lo e rodar-lo:
    1. `npm install` para instalar todas as dependências;
    1. `npm run start` para rodar localmente o projeto
    1. `npm run build` para gerar uma versão estática do projeto (que ficará na pasta `build`)
