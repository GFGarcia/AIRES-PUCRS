---
title: "Auditabilidade e Modelos Black-Box: O Brasil e a Votação Eletrônica"
description: "Como redundância, aleatoriedade e auditoria garantem a robustez e a transparência do sistema brasileiro de votação eletrônica."
publishDate: 2022-11-14
---

![Auditabilidade e Modelos Black-Box: O Brasil e a Votação Eletrônica](/blog/auditabilidade-e-modelos-black-box-o-brasil-e-a-votacao-eletronica/cover.jpg)

## Qual é o problema do voto eletrônico? 🗳️

O voto eletrônico, ou [e-voto](https://en.wikipedia.org/wiki/Electronic_voting), é “_votação por meios eletrônicos para ajudar ou cuidar da votação e contagem dos votos._”

Com muitos aspectos modernos da vida, como bancos e finanças, já sendo automatizados pela tecnologia (_e nenhum cidadão comum parece estar questionando se o Visa ou o Mastercard são “realmente” seguros ao comprar mercadorias online_), o uso de medidas de segurança, como “[_air gap networking_](https://en.wikipedia.org/wiki/Air_gap_(networking))” e “[_criptografia_](https://en.wikipedia.org/wiki/Cryptography)”.

Entretanto, **eleições em estados democráticos** são (_definidamente_) um **cenário de alto risco**. O sistema tem que funcionar mesmo sob as intenções maliciosas de atacantes externos. Isto coloca em dúvida se o “_voto eletrônico_” é seguro e se deveríamos estar usando-o.

Como primeiro aviso, a cibersegurança é um assunto denso e intrincado. E, compreensivelmente, questões de confiança não são incomuns, considerando que o público em geral não domina o assunto. Entretanto, **é interessante ver que a desconfiança das pessoas é seletiva**. Muitas aplicações modernas utilizam as mesmas medidas de segurança que os sistemas de votação eletrônica, mas (_quase_) ninguém repara nelas.

Você entrega suas informações de cartão de crédito para o servidor da Amazon toda vez que faz uma compra. E você está bem com isso, pois é seguro fazer isso. Mas se uma eleição não correr como o partido perdedor espera, **as pessoas ficam prontas para “****_duvidar_****” da infra-estrutura de segurança que usam todos os dias**.

Uma palestra completa sobre a “_robustez_” do voto eletrônico no Brasil se tornaria excessivamente específica e chata para o público em geral. No entanto, **tentarei mostrar neste post por que o voto eletrônico (****_no Brasil_****) pode ser considerado seguro e robusto.**

Também aproveitaremos esta oportunidade para falar sobre **transparência** e **auditoria**, dois princípios fundamentais ao debater o uso de tecnologias (_como IA_) de forma ética.

Recentemente, durante as últimas eleições presidenciais no Brasil, **muitas pessoas insatisfeitas com os resultados vêm questionando e duvidando da robustez e “legitimidade” do nosso sistema de votação eletrônica**. Muitos até pensam que nosso resultado atual é uma “_fraude_”.

Assim, como alguém versado em cibersegurança e tecnologia de sistemas de informação, gostaria de apresentar ao leitor como alguém “_poderia_” (_se quisesse_), tentar fraudar uma eleição no Brasil. Mas deixe-me **lembrar ao leitor que possibilidade, viabilidade e probabilidade são conceitos muito diferentes**.

Mas antes, vamos tentar apresentar **as vantagens e as dúvidas sobre o voto eletrônico**.

## As vantagens do voto eletrônico👍

Vamos apresentar alguns pontos a favor do voto eletrônico:

- **_Melhor experiência para o usuário_**: Em geral, a votação por urnas eletrônicas é mais eficiente (_em termos de velocidade_) por vários motivos. **Se há uma coisa em que os computadores são bons é contar**. E em um país como o Brasil, com [aproximadamente 156 milhões de eleitores](https://sig.tse.jus.br/ords/dwapr/seai/r/sig-eleitor-eleitorado-mensal/), contar votos "_à mão_ " seria muito demorado e ineficiente (_quantas vezes você já estragou um cálculo aritmético feito à mão?_). Na eleição presidencial de [1989](https://en.wikipedia.org/wiki/1989_Brazilian_presidential_election) entre **Fernando Collor de Mello** e **Luiz Inácio Lula da Silva** a contagem de votos precisou de nove dias. No entanto, hoje em dia podemos terminar uma eleição e obter o resultado oficial no mesmo dia. Novamente, **computadores são bons em contar**.

- **_Cédulas de papel não são seguras_**: Como você deve saber, o papel não é um material muito robusto. As cédulas de papel podem ser perdidas, extraviadas, alteradas, usadas incorretamente, roubadas e tudo mais que você pode fazer com papel. Por exemplo, nas [eleições presidenciais de 2000 nos Estados Unidos](https://en.wikipedia.org/wiki/Chad_(paper)) foram usadas urnas [Votomatic-style](https://en.wikipedia.org/wiki/Voting_machine#Punched_card_voting) para a eleição, (_que nada mais é do que um dispositivo mecânico que fura uma cédula de papel_). No entanto, na Flórida, devido a algum mau funcionamento das máquinas (_talvez a lâmina tenha ficado cega_) muitas cédulas tinham “_buracos incompletos_”, e as máquinas de tabulação não contavam essas cédulas (os buracos não estavam lá, para começar). Ou seja, **alguns votos não foram levados em consideração**.

- **_É mais barato_**: O voto eletrônico permite ao governo reduzir custos. **Cada dia que você tem que “contar cédulas” tem um custo associado. Tem gente para fiscalizar, gente para fiscalizar os supervisores, segurança, alimentação, logística, etc**. A votação eletrônica pode reduzir tudo isso a um dia de trabalho.

- **_Nenhum voto é deixado para trás_**: O voto eletrônico é uma das formas mais confiáveis ​​de garantir que os votos não sejam perdidos. As informações eletrônicas podem ser armazenadas, protegidas e contadas de forma robusta. Imagine usar papel (em vez de um cartão eletrônico) no seu **vale de transporte público**. Qual deles se tornará “_gosma_” primeiro depois de uma chuva forte?

- **_Brasil é um modelo de votação eletrônica para o mundo_**: o Brasil está atualmente entre os poucos países, como a [Índia](https://www.evotingindia.com/), em que a votação eletrônica é o padrão. Muitos estudiosos citam o Brasil como “[_à frente de seu tempo_](https://cs.stanford.edu/people/eroberts/cs201/projects/2006-07/electronic-voting/index_files/page0006.html)” e “[_um modelo a ser seguido_](https://cs.stanford.edu/people/eroberts/cs201/projects/2006-07/electronic-voting/index_files/page0006.html)”, estando na vanguarda da o movimento de votação eletrônica. Além disso, a votação em papel é uma das [mais criticadas](http://www.dcag.com/images/White_Paper_-_The_problems_with_a_paper_based_voting_system.pdf), [fácéis de manipular](https://static.scientificamerican.com/sciam/assets/media/pdf/selker.pdf), e [vulneráveis](https://www.arxiv-vanity.com/papers/1906.07532/) dos sistemas de voto existentes.

Agora, já que este é claramente um “_post a fávor da votação eletrônica_”, vamos tentar responder a algumas das perguntas comuns levantadas por pessoas que se posicionam contra o voto eletrônico.

- **_Como garantimos um voto por eleitor?_** No Brasil, é necessário um documento com foto para votar. Antes de votar, os mesários verificarão a identidade do eleitor e se a identidade for confirmada, o eleitor será (_literalmente_) removido da lista de “_votantes a serem_.” Além disso, **o Brasil tem 75,52% da identificação biométrica do eleitor ocorrendo**.

- **_Como podemos garantir o anonimato?_** A lista do Cadastro Eleitoral não é pública e a ordem dos votos não é registrada, tornando a **inferência individual do eleitor impraticável**.

- **_Podemos confiar em uma máquina que não nos dá nenhum comprovante de papel?_** As urnas eletrônicas brasileiras deixam comprovantes de papel chamados “_zerésima_” e “_boletim de urna_”. A _zerésima_ garante que não havia votos na máquina, para começar (“**_esta máquina tinha zero votos no início_**”). O _boletim de urna_ dá a você uma **contagem dos votos que pode ser correspondida com o número de eleitores presentes em uma determinada seção**. Ambos [documentos são divulgados](https://resultados.tse.jus.br/oficial/app/index.html#/eleicao/resultados) pelo site do TSE e o [Boletim na Mão](https://www.tse.jus.br/comunicacao/noticias/2022/Setembro/confira-os-resultados-da-eleicao-baixe-o-aplicativo-boletim-na-mao).

- **_Mas e se os mesários votarem para algumas pessoas que não compareceram?_** Os mesários são selecionados aleatoriamente e não trabalham sozinhos. Para que algo assim acontecesse, uma equipe inteira de pessoas selecionadas aleatoriamente teria que coordenar esse ataque, fugindo da força policial que monitora os locais de votação, e os eleitores, e estar disposta a sofrer as consequências de um crime eleitoral (**votar no lugar de outrem é crime punível com pena de prisão até três anos** - art. 309 do [Código Eleitoral](http://www.planalto.gov.br/ccivil_03/leis/L4737.htm)).

Como você pode ver, não abordei os problemas relacionados a “**_precisão de voto_**”, “**_segurança de contagem_**”, “**_prevenção de fraude_**” e “**_máquinas de votação fraudulentas_**.” Assim, como podemos garantir a robustez de todo esse sistema “**black-box**”?

Por meio de **Aleatoriedade** e **Auditoria**.

## Auditoria de Sistemas “_Black-Box_” 🔎

No Brasil, a pesquisa e o desenvolvimento de sistemas de votação eletrônica são financiados e mantidos pelo Tribunal Superior Eleitoral (TSE). O código dessas máquinas não foi divulgado ao público em geral, mas está acessível para determinadas partes interessados, como as **Forças Armadas**, os **Partidos Políticos** e a OAB (**Ordem dos Advogados do Brasil**).

Uma das razões para tornar o software não “_publicamente disponível_” (_tecnicamente é disponível para representantes dos poderes Executivo, Legislativo e Judiciário_) é porque podemos alcançar “[Segurança através da Obscuridade](https://en.wikipedia.org/wiki/Security_through_obscurity)”.

Ou seja, **"****_é difícil atacar algo que você não sabe como funciona_****."**

No entanto, **segurança apenas por obscuridade é desencorajada e não recomendada**. Precisamos de mais do que isso (e temos). Assim, _como podemos ter certeza de que o código que executado pelas urnas está funcionando da maneira que deveria_?

Simplificando, **fazemos uma eleição simulada antes das eleições reais e verificamos os resultados**. O processo ocorre da seguinte forma:

1. Na véspera de uma eleição, as autoridades eleitorais de cada Estado selecionam **várias urnas por sorteio**, e essas máquinas assim selecionadas, em vez de serem usadas nas mesas de voto reais, são mantidas na sede de cada Tribunal Regional Eleitoral para uma “sessão de votação simulada”. **Esta sessão é realizada para fins de auditoria na presença de representantes designados pelos partidos políticos**.

1. A votação simulada ocorre na mesma data da eleição (_dificultando que qualquer atualização de software seja feita após a auditoria_). Nesta sessão de votação simulada, os votos inseridos nas urnas não são secretos. Eles são testemunhados por todos os representantes dos partidos presentes no processo de auditoria (_todos sabem quantos votos foram para cada candidato_). Os partidos políticos determinaram uma quantidade aleatória de votos a serem inseridos na máquina para cada candidato. **Todo o processo é filmado**.

1. O número de votos decidido pelas partes é decidido na hora (_ninguém sabe de antemão_). **A única maneira de serem conhecidos por outras pessoas é se houver conluio entre partes rivais.**

1. Em seguida, são inseridos os votos nas máquinas, procedendo-se à contagem electrónica dos votos. O resultado indicado pelo software das urnas **tem que corresponder ao número aleatório de votos decidido por todas as partes**.

1. Dado que as máquinas são escolhidas ao acaso, considera-se que a confiabilidade das escolhidas representa a confiabilidade das demais (_algo que ocorreu em_ **_todas as eleições até agora_**). Se a auditoria não produzir a correspondência dos votos contados com a soma das instruções, **toda a eleição no Estado em questão seria nula**.

Esta é uma espécie de “[_prova de conhecimento zero_](https://en.wikipedia.org/wiki/Zero-knowledge_proof)” da integridade do nosso sistema de votação. Se todas as premissas e etapas esclarecidas acima puderem ser aceitas (_e são_), **todos podemos concordar que as máquinas são seguras sem precisar abrir o código-fonte**.

OK. Mas a transparência é importante. E gostaríamos de saber o código fonte. Infelizmente, os cidadãos comuns não podem ter essa informação no momento atual. Mas os representantes dos três poderes podem. Dados os relatórios entregues por essas distintas organizações (vamos usar o [Relatório das Forças Armadas](https://static.poder360.com.br/2022/11/Relatorio_EFASEV.pdf) neste blog post) **o que podemos aprender sobre a robustez de nossas urnas?**

## Olhando dentro da _Black-Box_ ⬛

Até onde se sabe, as máquinas de votação TSE rodam no sistema operacional [Linux](https://en.wikipedia.org/wiki/Linux) (apelidado de UEnux), e o software proprietário que faz a contagem e o registro é desconhecido (**cerca de 17 milhões de linhas de código escrito em C ou C++ -** **_provavelmente_**).

As máquinas têm muitos mecanismos de redundância para **garantir que os dados não serão perdidos ou adulterados**. Por exemplo, como já mencionado o “_boletim de urna_” deixa um comprovante de papel que pode ser usado para verificar os votos de uma determinada máquina (_também se o número de votos coincidir com uma determinada área de registro_). Todas essas informações são disponibilizadas publicamente [aqui](https://resultados.tse.jus.br/oficial/app/index.html#/eleicao/resultados) e [aqui](https://www.tse.jus.br/comunicacao/noticias/2022/Setembro/confira-os-resultados-da-eleicao-baixe-o-aplicativo-boletim-na-mao).

Todos os resultados das urnas também são armazenados em um dispositivo de disco rígido chamado “_mídia de resultado_”, semelhante a um pendrive. Esses dispositivos possuem software especial e só podem se comunicar com máquinas que também possuam o software do qual o TSE é proprietário. Assim, você não pode colocar este pendrive em uma máquina normal, **garantindo que o conteúdo deste pendrive não pode ser alterado por terceiros** (_a menos que tenham acesso ao software TSE atualizado e chaves de criptografia_).

Terminada a sessão de votação, tanto o “_mídia de resultado_” quanto o “_boletim de urna_” **são conduzidos ao cartório eleitoral local**. Lá, o pendrive é acoplado a um computador que possui o software e as chaves corretos, verificados e comparados com a cópia do rastro em papel e, em seguida, os dados são transmitidos ao Tribunal Superior Eleitoral (TSE) de Brasília.

Nos casos de perda ou destruição do pendrive, as urnas eletrônicas utilizadas no Brasil possuem outras garantias além do comprovante de papel (_as próprias máquinas mantém registro dos votos em cartões de memória internos e externos_). A única maneira de perder votos é se a máquina inteira (_antes do “Boletim de Urna” ser gerado_) for **completamente destruída ou roubada** (_algo que até hoje, nunca aconteceu_). **Se uma máquina quebrar, os cartões de memória podem garantir que os dados (****_os votos_****) sejam transferidos para uma nova máquina de votação.**

Em termos de criptografia, o software TSE usa as mesmas técnicas para garantir identidades legítimas que os aplicativos de Bancos online usam. Todas as informações, desde os votos até os dados armazenados nas urnas, são assinadas por meio de assinaturas digitais, o que significa **métodos de criptografia assimétrica**.

Em poucas palavras, **as assinaturas digitais são usadas para verificar a autenticidade de uma mensagem enviada eletronicamente, como um voto, ou a contagem de todos os votos em uma determinada máquina**. Algoritmos de criptografia como [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) nos permitem garantir que um determinado dado só possa ser modificado pelo proprietário de uma determinada chave. Se você quiser saber mais sobre [criptografia assimétrica](https://www.youtube.com/watch?v=GSIDS_lvRv4) e qual é o padrão usado para qualquer etapa de verificação em segurança cibernética, verifique [estes](https://www.youtube.com/watch?v=AQDCe585Lnc) [dois](https://en.wikipedia.org/wiki/Public-key_cryptography) links.

Assim como todas as mensagens digitais, operações de cartão de crédito e compras online, os votos também são **verificados por técnicas de criptografia de chave pública**. Cada voto só pode ser dado por uma determinada chave (_associada a um número de identificação único/votante_), cada máquina está associada a sua própria chave, e a única maneira de “_obter essas chaves_” é quebrar uma chave de criptografia (_via força bruta_ ) em um período de tempo muito curto (_essas chaves não são estáticas, mas geradas dinamicamente_). Se você quiser entender como é _praticamente impossível_ para computadores quebrar chaves de criptografia de um determinado tamanho, confira [este vídeo](https://www.youtube.com/watch?v=S9JGmA5_unY).

Em suma, todos os dados contidos em uma urna eletrônica, bem como todos os resultados produzidos, são **protegidos por assinatura digital**. Não é possível modificar os dados de candidatos e eleitores presentes nestas máquinas. Esta informação depende da combinação de uma série de chaves que (_literalmente_) ninguém tem acesso, tendo sido geradas durante a **Cerimônia de Assinatura e Selagem dos Sistemas Eleitorais**.

**Mas não seria possível que as chaves fossem hackeadas?** Novamente, quebrar uma chave de criptografia por meio de força bruta [leva (muito) mais tempo do que o próprio período de votação](https://www.youtube.com/watch?v=S9JGmA5_unY). Além disso, as máquinas de votação usam [air gaps](https://en.wikipedia.org/wiki/Air_gap_(networking)) para se defender contra ataques. Isso significa que as urnas não têm nem o hardware adequado para serem conectadas a algo como a internet. **São apenas caixas que contam votos**. Elas **não têm uma antena de rádio ou wifi**. O sistema operacional Linux contido nas urnas é preparado pelo TSE para **não incluir nenhum mecanismo de** **_software_** **que permite conexão a redes ou acesso remoto**.

Quando os votos forem transmitidos ao supercomputador do TSE em Brasília, **tudo já está criptografado**. E até onde sabemos, **não há ataques viáveis ​​que possam ser feitos contra técnicas de criptografia de chave pública dentro do período que seria necessário para adulterar os dados/votos criptografados**. Além disso, os dados recebidos devem corresponder ao comprovante de papel, que é um registro físico dos votos.

Além disso, você não pode alterar o código-fonte de uma única máquina de votação. O TSE **utiliza ferramentas modernas de controle de versão para verificar se o código fonte da urna eletrônica foi adulterado**. Apenas um grupo restrito de servidores e colaboradores do TSE tem acesso ao repositório de código fonte e está autorizado a fazer modificações no _software_. O _software_ utilizado nas eleições é o mesmo em todo o Brasil e está sob estrito controle do TSE, fiscalizado pelos três poderes.

**Mas e se o TSE tiver máquinas fraudulentas com código-fonte diferente?** Se eles controlam o código-fonte, podem fazer com que as máquinas façam o que quiserem.

Não, não podem e **é por isso que temos nossa sessão de votação simulada antes das eleições**.

Sim, o TSE tem o controle do software, mas o próprio software é auditado por representantes de todos os partidos políticos, da OAB e das Forças Armadas. **Como as máquinas utilizadas na sessão de votação simulada são escolhidas aleatoriamente, o TSE não poderia saber quais máquinas de votação alterar com segurança sem que ninguém percebesse**.

Ao mesmo tempo, **não é como se um pequeno grupo de desenvolvedores tivesse poder total sobre o código-fonte das urnas**. Todo o trabalho dessa parte do TSE é compartimentado. Ou seja, **a equipe responsável pelo software da máquina não é a mesma responsável pelo sistema de contagem**. A **equipe que confirma o código-fonte não é a mesma que controla e acompanha essa confirmação**.

Do ponto de vista de um invasor, o número de sistemas eleitorais envolvidos na realização de uma eleição é tão grande que **é impraticável que um agente interno tenha um grau de conhecimento de todo o sistema que lhe permita realizar qualquer tipo de ataque.**

Independentemente disso, _o que seria necessário para realizar esse ato antidemocrático?_

## O que seria necessário para fraudar uma eleição no Brasil? 🐱‍💻

Vamos listar todos os sistemas usados ​​para garantir que um sistema _black-box_ (_como as urnas eletrônicas_) seja aplicável em uma situação de alto risco como as eleições brasileiras:

- **_Redundância Múltipla_**: todo o sistema de contagem de votos possui **mecanismos de verificação redundantes** para garantir que (1) todas as informações correspondam; e (2) a informação não pode ser perdida.

- **_Auditoria de Código_**: partidos políticos, Ministério Público, Forças Armadas e OAB podem **acompanhar o desenvolvimento do software por meio da inspeção do código-fonte**.

- **_Auditoria Funcional_**: A função das urnas pode ser **auditada e testada antes da eleição**. Uma forma de “profissional de conhecimento zero” permite que as partes interessadas e os tribunais eleitorais regionais testem a integridade das urnas escolhendo aleatoriamente as máquinas a serem testadas.

- **_Criptografia_**: A criptografia de chave pública garante que **as informações registradas/transmitidas pelas urnas não possam ser alteradas**.

- **_Air Gap Security_**: Máquinas de votação **não possuem o maquinário necessário para permitir que elas se comuniquem com outras máquinas não autorizadas**.

- **_Segurança por Obscuridade_**: Como os agentes externos não conhecem o funcionamento das urnas eletrônicas, **ataques em tempo real tornam-se extremamente difíceis** durante o curto espaço de tempo em que as urnas operam online.

- **_Incompatibilidade do sistema_**: os funcionários eleitorais não conseguem violar o _software_ e _hardware_ que compõe as urnas. **Somente máquinas específicas (****_com software específico_****) podem ser usadas para recuperar as informações dentro dessas máquinas**.

Agora, vamos imaginar por um minuto **como poderíamos fraudar uma eleição no Brasil.**

Primeiro, precisaremos alterar algumas (_ou todas_) das urnas eletrônicas. (_software e hardware_). Como o desenvolvimento de urnas é compartimentado, este não é um trabalho “_um homem só_”. **É um trabalho em equipe que exigirá espionagem e infiltração**.

Muitas pessoas, trabalhando com o mesmo objetivo, **teriam que se infiltrar em muitos escritórios governamentais diferentes (****_altamente seguros e monitorados_****)**, mantendo contato entre si, sem serem pegos. E imaginemos que essa equipe altamente motivada conseguiu controlar (_por algum milagre_) a última “_confirmação_” do código-fonte e o modelo final das máquinas.

Mas essa equipe precisa passar em um teste de votação (**“****_a eleição simulada_****”**). Se, por exemplo, o código e as máquinas geradas tivessem algum tipo de configuração que pudesse detectar se estavam sendo “_monitorados para fins de auditoria_” ou usados ​​para “_eleições reais_” (_como no_ [_Escândalo de emissões da Volkswagen_](https://en.wikipedia.org/wiki/Volkswagen_emissions_scandal)), eles podem enganar o procedimento de auditoria.

Algo assim poderia enganar a votação simulada apenas se todas as máquinas tivessem sido adulteradas (_e isso seria muito difícil de realizar_). **Se apenas uma parte das máquinas foi adulterada, levar apenas as máquinas não adulteradas para a votação simulada seria uma questão de sorte.**

Mas vamos supor que nossa equipe seja rica, e eles conseguiram subornar todos os estados do Brasil. Todos os tribunais eleitorais regionais estão no bolso. E eles foram capazes de selecionar apenas máquinas não adulteradas. Ou **suponhamos que nossa equipe de hackers espiões se infiltrou em todas as várias organizações que protegem o desenvolvimento do software e hardware proprietário do TSE, tornando todas as máquinas fraudulentas.**

Mas agora temos que (_de alguma forma_) esconder todo o nosso trabalho. Essas alterações puderam ser detectadas na fiscalização do código-fonte (_feita pelos partidos políticos, Ministério Público, Forças Armadas e OAB_). Assim, **teremos que ter os representantes de todas essas organizações em nossos bolsos também**. Quanto suborno, ameaça e espionagem seriam necessários? Muito.

Agora, talvez o leitor já tenha informações suficientes para entender **a tarefa hercúlea que envolve fraudar uma eleição no Brasil**. Todo o sistema é desenvolvido para ter o maior número possível de pontos à prova de falhas. “_Hackear_” as eleições não é um trabalho de uma pessoa (_nem mesmo um trabalho de 100 pessoas_). **Isso exigiria um nível de inteligência, espionagem e corrupção que é quase impossível esconder**. Operações como essas poderiam desmoronar se apenas alguns vira-casacas de dentro saíssem a céu aberto.

No final, como invasor, quando você analisa todas essas medidas de segurança e redundâncias, a primeira coisa que vem à mente é: **"****_não vale a pena_****…"**

Se você quiser adulterar ou interferir em uma eleição, o “_jeito fácil_” (_como quase todos os partidos políticos fazem_) é investir todo esse dinheiro que iria para uma “_missão de hackers espiões condenados ao fracasso_” em **desinformação e marketing**.

Em aplicativos confiáveis, onde a criptografia e a proteção de ponta a ponta são garantidas, você não ataca os servidores ou as máquinas. Atacamos os pontos finais. **Nós atacamos as pessoas**. É por isso que mais de [90% de todos os ataques cibernéticos são “](https://www.ptsecurity.com/ww-en/analytics/cybersecurity-threatscape-2021-q2/)[_ataques de engenharia social_](https://www.ptsecurity.com/ww-en/analytics/cybersecurity-threatscape-2021-q2/)[”](https://www.ptsecurity.com/ww-en/analytics/cybersecurity-threatscape-2021-q2/).

Então, **seria possível alguém hackear as eleições no Brasil?** Na verdade não. **Não no sentido de ser provável**. A quantidade de esforço necessária para adulterar as eleições de maneira insuspeitada teria que espelhar (_e superar_) eventos como o [exploração do Stuxnet](https://en.wikipedia.org/wiki/Stuxnet) (_um quase 10 anos projeto orquestrado por países estrangeiros contra o programa nuclear iraniano_).

Mas e as **vulnerabilidades apresentadas no relatório** entregue pela “[Equipe das Forças Armadas de Fiscalização e Auditoria do Sistema Eletrônico de Votação (EFASEV)](https://static.poder360.com.br/2022/11/Relat%C3%B3rio_EFASEV.pdf)”?

**_Quais vulnerabilidades?_**

Vejamos os **principais pontos levantados** por este relatório:

1. O relatório da EFASEV tem muitas reclamações sobre como eles não puderam testar o código-fonte. E para ser verdade, o STF só permitia a _análise estática_ do código, não a dinâmica. Honestamente, é difícil encontrar vulnerabilidades sem alguns ajustes. No entanto, **isso não é o mesmo que dizer que existem vulnerabilidades no código**. Se houver, não foi detectado pelo relatório da EFASEV.

1. Foram levantadas questões sobre se a versão do código-fonte poderia ser alterada após a auditoria (_uma confirmação sendo executada posteriormente ou revertida_). No entanto, verificou-se que as assinaturas digitais das confirmações eram aquelas assinadas na Cerimônia de Fechamento. Ou seja, **o código auditado foi o código usado**.

1. A EFASEV conclui que o teste de segurança referente ao Projeto Piloto com Biometria foi inconclusivo, pois a adesão ao uso da biometria pelos eleitores não ficou na faixa de 75% a 82%. A biometria ainda está sendo implementada, mas **um resultado inconclusivo não significa que haja irregularidades**. Significa que **não foi possível certificar a segurança das máquinas com base em uma pequena amostra** (_não representativa da população eleitoral brasileira_).

1. Durante a “Compilação, Assinatura Digital e Selagem dos Sistemas Eleitorais”, todo o sistema é colocado “Online” para permitir que todas as máquinas sejam atualizadas com o mesmo software. **De acordo com a EFASEV, este é o único momento em que pode (****_hipoteticamente_****) haver uma violação de segurança** (_quando as máquinas estão online, atualizando o código-fonte a ser usado_).

1. Todos os demais componentes, como a geração do “_Resultado de Mídia_”, “_Boletim de Urna_” e do “_Zerésima_”, **mostraram-se seguros** (_não foram encontradas vulnerabilidades_).

Para ser justo, concordo com a parte do relatório da EFASEV que diz que “_sem testes dinâmicos, uma análise de segurança completa não pode ser realizada_.” No entanto, **isso não quer dizer que o TSE não realiza testes dinâmicos** (_e eles fazem_). A disponibilidade do código-fonte fora de ambientes controlados para terceiros apresentaria riscos à integridade do código-fonte? **Provavelmente**. Esse risco é pequeno o suficiente para justificar a “_completa abertura_” do código-fonte usado pelas urnas? **Não se sabe**.

Transparência e confiabilidade às vezes estão em oposição. **Encontrar as áreas cinzentas onde esses princípios não se comunicam muito bem faz parte de todo o debate sobre ética e segurança dos sistemas de informação**.

No entanto, essa “_possível vulnerabilidade_” apresentada no relatório da EFASEV é suficiente para duvidarmos do sistema de voto eletrônico brasileiro? **Não**.

Novamente, a quantidade de hacking, engenharia, espionagem e corrupção que seria necessária para “_modificar o código-fonte_” no breve momento em que ele está sendo carregado/baixado para as máquinas é “_excessivamente grande_”. Vários [exploits zero-day](https://en.wikipedia.org/wiki/Zero-day_(computing)) teriam que ser usados ​​e abusados ​​por invasores (_de uma maneira que não levantasse suspeitas_). Mesmo que seja um trabalho interno ou externo, **não é possível**.

Como mencionado acima, hoje em dia, se você quer atacar esses tipos de sistemas, você não vai para o sistema. Você vai para os terminais (_os eleitores_). A **disseminação de desinformação e compra de votos é uma ameaça muito mais séria à nossa democracia** do que “_hackeamentos_”.

Uma conspiração de _bilhões de dólares com vários agentes infiltrados_ ainda teria uma (_impossível_) tarefa para adulterar as eleições. **Mas com alguns milhões, um partido político poderia automatizar a disseminação de desinformação e marketing direcionado para distorcer a percepção do eleitor e obter apoio**, como foi feito [uma](https://en.wikipedia.org/wiki/Facebook%E2%80%93Cambridge_Analytica_data_scandal), [duas](https://www.gatescambridge.org/our-scholars/blog/how-cambridge-analytica-influenced-nigerias-elections/), [três vezes](https://periodicos.ufjf.br/index.php/TeoriaeCultura/article/view/12427) e sabe se lá quantas ainda vão ser feitas.

Se você não sabe que lado tomar neste debate, **deixe que a filosofia o ajude** com a [simplicidade](https://plato.stanford.edu/entries/simplicity/) [_a priori_](https://plato.stanford.edu/entries/simplicity/).

> “**A solução mais simples é quase sempre a melhor**.” − _William de Ockham_

O que é mais provável (_a explicação mais simples_)? A conspiração de bilhões de dólares com vários agentes infiltrados invadindo criptografia de chave pública robusta? Ou que em um país polarizado como o Brasil, **um candidato ganhou por 1%**? 🤔

_O que você acha?_
