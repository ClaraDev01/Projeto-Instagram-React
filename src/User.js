import React from "react";
export default function User() {

  const imagemPerfil = "assets/img/catanacomics.svg";
  const [nome, setNome] = React.useState("");
  const [imagem, setImagem] = React.useState(imagemPerfil);

  function mudarNome() {
    const nomeDigitado = prompt("Digite o seu nome:");
    setNome(nomeDigitado);
  }

  function mudarImagem() {
    const linkDigitado = prompt("Digite o link da sua imagem:");
    if (linkDigitado && linkDigitado.trim() !== "") {
      setImagem(linkDigitado);
    } else {
      setImagem(imagemPerfil);
    }
  }
  return (
    <div className="usuario">
      <img onClick={mudarImagem} src={imagem} />
      <div className="texto">
        <span>
          <strong>{!nome ? "catanacomics" : `${nome}`}</strong>
          <ion-icon name="pencil" onClick={mudarNome}></ion-icon>
        </span>
      </div>
    </div>
  )
}
