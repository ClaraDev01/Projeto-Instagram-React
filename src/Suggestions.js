export default function Suggestions() {
  const sugestao = [
    {
      imagem: "assets/img/bad.vibes.memes.svg",
      nome: "bad.vibes.memes",
      razao: "Segue você",
    },
    {
      imagem: "assets/img/chibirdart.svg",
      nome: "chibirdart",
      razao: "Segue você",
    },
    {
      imagem: "assets/img/razoesparaacreditar.svg",
      nome: "razoesparaacreditar",
      razao: "Novo no Instagram",
    },
    {
      imagem: "assets/img/adorable_animals.svg",
      nome: "adorable_animals",
      razao: "Segue você",
    },
    {
      imagem: "assets/img/smallcutecats.svg",
      nome: "smallcutecats",
      razao: "Segue você",
    },
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestao.map((item, index) => <Render key={index} imagem={item.imagem} nome={item.nome} razao={item.razao} />)}
    </div>
  );
}

function Render(props) {
  const { imagem, nome, razao } = props;
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={imagem} alt={nome} />
        <div className="texto">
          <div className="nome">{nome}</div>
          <div className="razao">{razao}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}
