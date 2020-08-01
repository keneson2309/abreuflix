import React from 'react';
import Menu from '../components/Menu';
import dadosIniciais from '../data/dados_iniciais.json';
import BannerMain from '../components/BannerMain';
import Carrossel from '../components/Carousel';
import Rodapé from '../components/Footer';

function Home() {
  return (
    <div style ={{ background :"#141414"}}>

      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área de termos HTML, CSS e JavaScript fazem parte da rotina dos desenvolvedores e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

< Carrossel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      < Carrossel
        category={dadosIniciais.categorias[1]}
      />

      < Carrossel
        category={dadosIniciais.categorias[2]}
      />      

      < Carrossel
        category={dadosIniciais.categorias[3]}
      />      

      < Carrossel
        category={dadosIniciais.categorias[4]}
      />      

      < Carrossel
        category={dadosIniciais.categorias[5]}
      />      

      < Rodapé />

    


    </div>
  );
}

export default Home;
