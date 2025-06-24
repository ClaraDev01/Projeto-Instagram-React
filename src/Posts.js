import React from "react";

export default function Posts() {
  const post = [
    {
      usuario: "meowed",
      imagemUser: "assets/img/meowed.svg",
      imagemPost: "assets/img/gato-telefone.svg",
      curtidasUser: "respondeai",
      perfilUser: "assets/img/respondeai.svg",
      numeroCurtidas: "101.523",
    },
    {
      usuario: "barked",
      imagemUser: "assets/img/barked.svg",
      imagemPost: "assets/img/dog.svg",
      curtidasUser: "adorable_animals",
      perfilUser: "assets/img/adorable_animals.svg",
      numeroCurtidas: "99.159",
    },
    {
      usuario: "meowed",
      imagemUser: "assets/img/meowed.svg",
      imagemPost: "assets/img/gato-telefone.svg",
      curtidasUser: "respondeai",
      perfilUser: "assets/img/respondeai.svg",
      numeroCurtidas: "101.523",
    },
  ];

  return (
    <div className="posts">
      {post.map((item, index) => (
        <Post
          key={index}
          usuario={item.usuario}
          imagemUser={item.imagemUser}
          imagemPost={item.imagemPost}
          curtidasUser={item.curtidasUser}
          perfilUser={item.perfilUser}
          numeroCurtidas={item.numeroCurtidas}
        />
      ))}
    </div>
  );
}

function Post(props) {
  const {
    usuario,
    imagemUser,
    imagemPost,
    curtidasUser,
    perfilUser,
    numeroCurtidas,
  } = props;

  const [salvo, setSalvo] = React.useState(false);

  function salvarPosts() {
    setSalvo(!salvo);
  }

  const [like, setLike] = React.useState(false);

  function darLike() {
    setLike(!like);
    if (!like) {
      setCurtidas(curtidas + 1);
    } else {
      setCurtidas(curtidas - 1);
    }
  }

  function likePost() {
    if (!like) {
      setLike(true);
      setCurtidas(curtidas + 1);
    }
  }

  const [curtidas, setCurtidas] = React.useState(Number(numeroCurtidas.replace(".", "").replace(",", ".")));

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={imagemUser} alt={usuario} />
          meowed
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={imagemPost} onClick={likePost} alt="gato-telefone" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name={like ? "heart" : "heart-outline"} onClick={darLike} className="heart" style={{ color: like ? "red" : "" }}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name={salvo ? "bookmark" : "bookmark-outline"} onClick={salvarPosts} className="bookmark"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={perfilUser} alt={curtidasUser} />
          <div className="texto">
            Curtido por <strong>{curtidasUser}</strong> e{" "}
            <strong>outras {curtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}


