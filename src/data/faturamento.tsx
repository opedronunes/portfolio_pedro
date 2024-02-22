export const faturamento = [
    {
        id: 0,
        title: "Dashboard",
        text: "Desenvolvido para atender uma empresa de locações de equipamentos e prestações de serviços, mas que pode ser adaptado a qualquer negócio que necessite de uma visão ampla do produto/serviço. O questionamento é sobre quanto um equipamento está faturando, dando lucro ou prejuízo. Depois da análise feita em cima dos gráficos gerados poderá tomar decisões acertivas e entender o que pode ser feito para melhorar o faturamento.",
        image:  "/images/faturamento.png",
    },
    {
        id: 1,
        title: "Equipamentos",
        text: "Tela dos equipamentos, com listagem, paginação, pesquisa e 2 modais. Um para o cadastro de novos equipamentos, e outro para visualizar e atualizar os dados, conta também com registro de imagens para a galeria e perfil do equipamento.",
        image:  "/images/equipamentos.png",
    },
    {
        id: 2,
        title: "Despesas",
        text: "Lançamento de despesas referenciando o equipamento, dessa forma podemos calcular o fator lucro no final, abatendo da soma do valor do faturamento individual. Registro de categorias para as depesas, atualização e exclusão de alguma despesa lançada de forma incorreta.",
        image:  "/images/despesas.png",
    },
    {
        id: 3,
        title: "Colaboradores",
        text: "Listagem de colaboradores contratados com data de admissão e dados pessoais, cadastro do CBO do cargo para categorizar os colaboradores. Incluso todos os outros métodos: Atualização, exclusão e caso seja excluído terá a opção de restaurar o colaborador, reativando-o.",
        image:  "/images/colaborador.png",
    },
    {
        id: 4,
        title: "Clientes",
        text: "Layout semelhante ao dos colaboradores, cadastro de novos clientes, atualização dos dados, exclusão. API de endereço para buscar o endereço do cliente, com isso podemos identificar na fatura de locação o endereço de cobrança.",
        image:  "/images/cliente.png",
    },
    {
        id: 5,
        title: "Ordem de serviço - OS",
        text: "Um dos fatores primordiais do sistema, através da Ordem de serviço podemos analisar os lucros dos equimentos, nela é incluso os colaboradores, clientes, equipamentos e colaboradores. É o ponto de partida para ser gerado uma fatura ao cliente em que foi prestado o serviço ou locação de equipamento. Podemos indentificar no seu cadastro que existe muitos campos para detalhar ao máximo o que foi feito na contratação do serviço. Após cadastro da O.S, é listado e identificado automatimente como Aberta na página de situação, aguardando para ser gerado a fatura.",
        image:  "/images/os.png",
    },
    {
        id: 6,
        title: "Situações",
        text: "Ao ser adicionado no sistema a O.S,o usuário é redirecionado para a tela de situação, identificada com a cor laranja que significa Aberta, nesta situação aparece um botão no lado esquedo que abre um modal para gerar a fatura, após gerar, automaticamente o sistema a identifica como Faturada caracterizada pela cor azul. Neste mesmo modal de fatura podemos adicionar mais de uma O.S, ou seja, dependendo do serviço que foi feito, poderá incluir mais O.S para identicar a quantidade de equipamentos utilizado ou serviços feito.",
        image:  "/images/situacao.png",
    },
    {
        id: 7,
        title: "Faturas",
        text: "Outro fator promordial do sistema, a fatura é o documento que será entregue ao cliente para conhecimento dos valores cobrado pelo serviço, data de vencimento do pagamento e dados bancário. Dependendo do cliente é necessário gerar um boleto como o valor da fatura, mas isso é feito no banco de preferência da empresa.Conta com todos os métodos utilizados no sistema (atualização e exclusão), além da opção de visualizar a fatura e gerar o PDF. Outro detalhe importante é quando for excluído uma fatura, a O.S registrada nela volta a ter o status como Aberta, podendo assim ser feita uma nova fatura para ela.",
        image:  "/images/fatura.png",
    },
];