import { faturamento } from "@/data/faturamento";
import Link from "next/link";

export default function Faturamento() {
    return (
        <section className="container px-2 mx-auto text-gray-400">
            <div className="divide-x-[1px] divide-gray-400 flex justify-end my-4">
                <Link className="p-1 text-gray-300 font-medium hover:text-green-600 transition-colors" title="Ir para" href={"/"}>Home</Link>
                <Link className="p-1 text-gray-300 font-medium hover:text-green-600 transition-colors" title="Ir para" href={"/projects"}>Projetos</Link>
                <Link className="p-1 text-gray-300 font-medium hover:text-green-600 transition-colors" title="Ir para" href={"/contacts"}>Contato</Link>
            </div>
            <div>
                <h2 className="text-3xl font-semibold text-gray-200">Sistema de Faturamento</h2>
            </div>
            {faturamento.map((item) => (
                <div key={item.id} className="w-full my-6 items-center">
                    <div className="flex gap-2 flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <h3 className="font-semibold text-2xl text-gray-400 my-3">{item.title}</h3>
                            <div>{item.text}</div>
                        </div>
                        <div className="md:w-1/2">
                            <img src={item.image} alt="" className="rounded-md" />
                        </div>
                    </div>
                </div>

            ))}
        </section>
        // <div className="container px-2 mx-auto text-gray-400">


        //     <div className="flex flex-col-reverse md:flex-row-reverse gap-2 w-full my-6 items-center">
        //         <div className="md:w-1/2">
        //             <h3 className="font-semibold text-2xl text-gray-400 my-3">Dashboard</h3>
        //             <p>Desenvolvido para atender uma empresa de locações de equipamentos e prestações
        //                 de serviços, mas que pode ser adaptado a qualquer negócio que necessite de uma visão
        //                 ampla do produto/serviço.</p>
        //             <p>O questionamento é sobre quanto um equipamento está faturando, dando lucro ou prejuízo.
        //                 Depois da análise feita em cima dos gráficos gerados poderá tomar decisões acertivas
        //                 e entender o que pode ser feito para melhorar o faturamento.
        //             </p>
        //             <div className="my-4">
        //                 <p className="font-semibold">
        //                     Os gráficos na tela de Dashboard:
        //                 </p>
        //                 <div className="flex flex-col gap-2">
        //                     <p>- Geral: Mostra a quantidade total de cada área.</p>
        //                     <p>- Faturamento por equipamento: Mostra as métricas da soma total faturado, valor total de despesas e quantidade de O.S gerada, no ano vigente.</p>
        //                     <p>- Faturamento por mês: Métrica para saber a soma total por mês do ano vigente.</p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="md:w-1/2">
        //             <img src="/images/faturamento.png" alt="" className="rounded-md" />
        //         </div>
        //     </div>
        //     <div className="flex flex-col md:flex-row-reverse gap-2 w-full my-4 items-center">
        //         <div className="md:w-1/2">
        //             <img src="/images/equipamentos.png" alt="" className="rounded-md" />
        //         </div>
        //         <div className="md:w-1/2">
        //             <h3 className="font-semibold text-2xl text-gray-400 my-3">Equipamentos</h3>
        //             <p>Tela dos equipamentos, com listagem, paginação, pesquisa e 2 modais. Um para
        //                 o cadastro de novos equipamentos, e outro para visualizar e atualizar os dados,
        //                 conta também com registro de imagens para a galeria e perfil do equipamento.</p>
        //         </div>
        //     </div>
        //     <div className="flex flex-col-reverse md:flex-row-reverse gap-2 w-full my-4 items-center">
        //         <div className="md:w-1/2">
        //             <h3 className="font-semibold text-2xl text-gray-400 my-3">Despesas</h3>
        //             <p>Lançamento de despesas referenciando o equipamento, dessa forma podemos calcular o fator lucro no final, abatendo
        //                 da soma do valor do faturamento individual. Registro de categorias para as depesas, atualização e exclusão de alguma despesa lançada de forma incorreta.
        //             </p>
        //         </div>
        //         <div className="md:w-1/2">
        //             <img src="/images/despesas.png" alt="" className="rounded-md" />
        //         </div>
        //     </div>
        //     <div className="flex flex-col md:flex-row-reverse gap-2 w-full my-4 items-center">
        //         <div className="md:w-1/2">
        //             <img src="/images/colaborador.png" alt="" className="rounded-md" />
        //         </div>
        //         <div className="md:w-1/2">
        //             <h3 className="font-semibold text-2xl text-gray-400 my-3">Colaboradores</h3>
        //             <p>Listagem de colaboradores contratados com data de admissão e dados pessoais, cadastro do CBO do cargo para categorizar os colaboradores. Incluso todos os outros métodos:
        //                 Atualização, exclusão e caso seja excluído terá a opção de restaurar o colaborador, reativando-o.
        //             </p>
        //         </div>
        //     </div>
        //     <div className="flex flex-col-reverse md:flex-row-reverse gap-2 w-full my-4 items-center">
        //         <div className="md:w-1/2">
        //             <h3 className="font-semibold text-2xl text-gray-400 my-3">Clientes</h3>
        //             <p>Layout semelhante ao dos colaboradores, cadastro de novos clientes, atualização dos dados, exclusão. API de endereço para buscar o endereço do cliente, 
        //                 com isso podemos identificar na fatura de locação o endereço de cobrança.
        //             </p>
        //         </div>
        //         <div className="md:w-1/2">
        //             <img src="/images/cliente.png" alt="" className="rounded-md" />
        //         </div>
        //     </div>
        //     <div className="flex flex-col md:flex-row-reverse gap-2 w-full my-4 items-center">
        //         <div className="md:w-1/2">
        //             <img src="/images/os.png" alt="" className="rounded-md" />
        //         </div>
        //         <div className="md:w-1/2">
        //             <h3 className="font-semibold text-2xl text-gray-400 my-3">Ordem de serviço - O.S</h3>
        //             <p>Um dos fatores promodiais do sistema, através da Ordem de serviço podemos analisar os lucros dos equimentos, nela é incluso os colaboradores, 
        //                 clientes, equipamentos e colaboradores. É o ponto de partida para ser gerado uma fatura ao cliente em que foi prestado o serviço ou locação de equipamento. 
        //             </p>
        //             <p>Podemos indentificar no seu cadastro que existe muitos campos para detalhar ao máximo o que foi feito na contratação do serviço. 
        //                 Após cadastro da O.S, é listado e identificado automatimente como <strong>Aberta</strong> na página de situação, aguardando para ser gerado a fatura.</p>
        //         </div>
        //     </div>
        //     <div className="flex flex-col-reverse md:flex-row-reverse gap-2 w-full my-4 items-center">
        //         <div className="md:w-1/2">
        //             <h3 className="font-semibold text-2xl text-gray-400 my-3">Situação</h3>
        //             <p>Ao ser adicionado no sistema a O.S,o usuário é redirecionado para a tela de situação, identificada com a cor laranja que significa <strong>"Aberta"</strong>, nesta situação aparece um botão no lado esquedo que abre um modal para gerar a fatura, após gerar, 
        //                 automaticamente o sistema a identifica como <strong>"Faturada"</strong> caracterizada pela cor azul. Neste mesmo modal de fatura podemos adicionar mais de uma O.S, ou seja, dependendo do serviço que foi feito, poderá incluir mais O.S para identicar a quantidade de 
        //                 equipamentos utilizado ou serviços feito.
        //             </p>
        //         </div>
        //         <div className="md:w-1/2">
        //             <img src="/images/situacao.png" alt="" className="rounded-md" />
        //         </div>
        //     </div>
        //     <div className="flex flex-col md:flex-row-reverse gap-2 w-full my-4 items-center">
        //         <div className="md:w-1/2">
        //             <img src="/images/fatura.png" alt="" className="rounded-md" />
        //         </div>
        //         <div className="md:w-1/2">
        //             <h3 className="font-semibold text-2xl text-gray-400 my-3">Faturas</h3>
        //             <p>Outro fator promordial do sistema, a fatura é o documento que será entregue ao cliente para conhecimento dos valores cobrado pelo serviço, data de vencimento do pagamento e dados bancário. 
        //                 Dependendo do cliente é necessário gerar um boleto como o valor da fatura, mas isso é feito no banco de preferência da empresa.
        //             </p>
        //             <p>
        //                 Conta com todos os métodos utilizados no sistema (atualização e exclusão), além da opção de visualizar a fatura e gerar o PDF. Outro detalhe importante é quando for excluído uma fatura, a O.S 
        //                 registrada nela volta a ter o status como <strong>"Aberta"</strong>, podendo assim ser feita uma nova fatura para ela.
        //             </p>
        //         </div>
        //     </div>
        // </div>
    )
}