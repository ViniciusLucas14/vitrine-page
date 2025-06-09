const cardShop = [
  {
    img: "./assets/img1.png",
    title: "Personalize sua Loja",
    subtitle: "Esse é o visual da sua loja. Você pode personalizar a cor do cabeçalho e adicionar a logomarca própria.",
  },
  {
    img: "./assets/img2.png",
    title: "Categorias",
    subtitle: "Organize seus produtos por categorias e facilite a busca dos clientes.",
  },
  {
    img: "./assets/img3.png",
    title: "Produto detalhado",
    subtitle: "Ao selecionar um produto, o cliente pode visualizar todos os detalhes antes de comprar."
  },
  {
    img: "./assets/img8.png",
    title: "Produto com variação",
    subtitle: "Agrupe produtos com variações de cor ou tamanho informando a mesma referência."
  },
  {
    img: "./assets/img4.png",
    title: "Histórico de pedidos",
    subtitle: "Seus clientes poderão consultar todos os pedidos feitos em sua loja.",
  },
  {
    img: "./assets/img5.png",
    title: "Cadastro de cliente",
    subtitle: "Falando em clientes, temos um cadastro simples para que eles possam fazer seus pedidos com mais agilidade.",
  },
  {
    img: "./assets/img6.png",
    title: "Carrinho",
    subtitle: "Todos os produtos que o cliente adicionar serão armazenados em um carrinho moderno e fácil de usar.",
  },
  {
    img: "./assets/img7.png",
    title: "Adaptável",
    subtitle: "Tudo foi pensado para funcionar perfeitamente em computadores e celulares. Sua loja sempre vai se ajustar ao tamanho da tela.",
  },
];
const cardAdm = [
  {
    img: "./assets/adm1.png",
    title: "Dashboard",
    subtitle: "Tudo o que você precisa saber sobre sua loja, em um só lugar e de forma intuitiva",
  },
  {
    img: "./assets/adm2.png",
    title: "Opções",
    subtitle: "Dashboard: acompanhe relátorios da loja" +
      "\n Produtos: Cadastre, edite e exclua produtos " +
      "\n Clientes: Saiba quem é o seu cliente" +
      "\n Pedidos: acesso a pedidos e alteração" +
      "\n Conta: Altere sua loja à qualquer momento",
  },
  {
    img: "./assets/adm3.png",
    title: "Produtos",
    subtitle: "Cadastro de produto básico, fácil e rápido. Com a opção de criar variações de Cor e Tamanho",
  },
  {
    img: "./assets/adm4.png",
    title: "Clientes",
    subtitle: "Visualize as informações fornecidas pelo seu cliente cadastrado e realizar o pedido na sua loja",
  },
  {
    img: "./assets/adm5.png",
    title: "Pedidos",
    subtitle: "Altere o status dos pedidos, envie mensagens para os clientes e acesse informações completas do pedido",
  },
  {
    img: "./assets/adm6.png",
    title: "Whatsapp",
    subtitle: "Esse é o formato da mensagem enviada ao cliente. E o melhor: você pode automatizar esse processo 😉— já já te mostro como!",
  },
  {
    img: "./assets/adm7.png",
    title: "Estilo",
    subtitle: "Customize a cor e logotipo para deixar a loja com a sua identidade",
  },
  {
    img: "./assets/adm8.png",
    title: "Envio de Mensagens para o Whatsapp",
    subtitle: "Automatize o envio da mensagem para o cliente, conecte com o seu Whatsapp.\n" +
      "O intuito é agilizar o processo para a finalização da venda",
  },
  {
    img: "./assets/adm9.png",
    title: "Adaptável",
    subtitle: "Tudo foi pensado para funcionar perfeitamente em computadores e celulares. Ajustado ao tamanho do dispositivo, tudo pode ser feito de qualquer aparelho.",
  },
];

function widthScreen() {
  return window.innerWidth < 720;
}

function createCardContent(imgLink, title, subtitle) {
  const cardContent = document.createElement("div");
  cardContent.className = "custom-card";
  const ImgContainer = document.createElement("div");
  ImgContainer.className = "image-container"
  ImgContainer.appendChild(createImgTag(imgLink))
  cardContent.appendChild(ImgContainer);
  cardContent.appendChild(createDescriptionTag(title, subtitle));
  return cardContent;
}

function createImgTag(linkImg) {
  const image = document.createElement("img");
  image.className = "card-img-top";
  image.src = linkImg;
  return image;
}

function createDescriptionTag(title, subtitle) {
  const card = document.createElement("div");
  card.className = "card-body d-flex flex-column justify-content-end";

  const h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.textContent = title;

  const p = document.createElement("p");
  p.className = "card-text";
  p.textContent = subtitle;

  card.appendChild(h5);
  card.appendChild(p);
  return card;
}

function buildCarousel(array, name) {
  const carrousels = [{ name: "adm", array: cardAdm }, { name: "shop", array: cardShop }];
  carrousels.forEach(c => {
    const isMobile = widthScreen();
    const carouselInner = document.querySelector(".carousel-inner-" + c.name);
    carouselInner.innerHTML = "";

    carouselInner.classList = "height-default";

    const items = isMobile
      ? sliceBy(c.array, 1)
      : sliceBy(c.array, 3);

    items.forEach((group, index) => {
      const carouselItem = document.createElement("div");
      carouselItem.className = `carousel-item${index === 0 ? " active" : ""}`;

      const itemsWrapper = document.createElement("div");
      itemsWrapper.className = "items d-flex justify-content-evenly";

      group.forEach((card) => {
        itemsWrapper.appendChild(createCardContent(card.img, card.title, card.subtitle));
      });

      carouselItem.appendChild(itemsWrapper);
      carouselInner.appendChild(carouselItem);
    });
  })
}

function sliceBy(arr, n) {
  const result = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
  }
  return result;
}

buildCarousel();
// window.addEventListener("resize", buildCarousel);