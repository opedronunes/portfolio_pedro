import Link from "next/link";

export default function Faturamento() {
    return (
        <div className="container px-2 mx-auto text-gray-400">
            <div className="divide-x-[1px] divide-gray-400 flex justify-end my-4">
                <Link className="p-1 text-gray-300 font-medium hover:text-green-600 transition-colors" title="Ir para" href={"/"}>Home</Link>
                <Link className="p-1 text-gray-300 font-medium hover:text-green-600 transition-colors" title="Ir para" href={"/projects"}>Projetos</Link>
                <Link className="p-1 text-gray-300 font-medium hover:text-green-600 transition-colors" title="Ir para" href={"/contacts"}>Contato</Link>
            </div>
            <div>
                <h2 className="text-3xl font-semibold text-gray-200">Sistema de Faturamento</h2>
            </div>
            <div className="flex flex-col-reverse md:flex-row-reverse gap-2 w-full my-6 items-center">
                <div className="md:w-1/2">
                    <p>Desenvolvido para atender uma empresa de locações de equipamentos e prestações
                        de serviços, mas que pode ser adaptado a qualquer negócio que necessite de uma visão
                        ampla do produto/serviço.</p>
                    <p>O questionamento é sobre quanto um equipamento está faturando, dando lucro ou prejuízo.
                        Depois da análise feita em cima dos gráficos gerados poderá tomar as melhores decisões
                        e entender o que pode ser feito para melhorar seu faturamento.
                    </p>
                    <div className="my-4">
                        <p className="font-semibold">
                            Os gráficos na tela de Dashboard:
                        </p>
                        <div className="flex flex-col gap-2">
                            <p>- Geral: Mostra a quantidade total de cada entidade.</p>
                            <p>- Faturmento por equipamento: Mostra as métricas da soma total faturado, valor total de despesas e quantidade de O.S gerada, no ano vigente.</p>
                            <p>- Faturamento por mês: Métrica para saber a soma total por mês do ano vigente.</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img src="/images/faturamento.png" alt="" className="rounded-md" />
                </div>
                {/* <div className="grid grid-cols-2 gap-1 w-2/3">
                            <img src="/images/faturamento.png" alt="" className="rounded-md" />
                            <img src="/images/grafico2.png" alt="" className="rounded-md" />
                            <img src="/images/grafico3.png" alt="" className="rounded-md" />
                        </div> */}
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-2 w-full my-4 items-center">
                <div className="md:w-1/2">
                    <img src="/images/equipamentos.png" alt="" className="rounded-md" />
                </div>
                <div className="md:w-1/2">
                    <p>Tela dos equipamentos, com listagem, paginação, pesquisa e 2 modais. Um para
                        o cadastro de novos equipamentos, e outro para visualizar e atualizar os dados,
                        conta também com registro de imagens para a galeria e perfil do equipamento.</p>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row-reverse gap-2 w-full my-4 items-center">
                <div className="md:w-1/2">
                    <p>Lançamento de despesas e referenciando o equipamento, dessa forma podemos calcular o fator lucro no final abatendo
                        da soma do valor do faturamento. Registro de de categorias para as depesas, atualização e exclusão de alguma despesa lançada de forma errada.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <img src="/images/despesas.png" alt="" className="rounded-md" />
                </div>
            </div>
            <div className="flex items-center flex-col justify-center gap-4 text-gray-400">
                Em produção...
            </div>
        </div>
    )
}