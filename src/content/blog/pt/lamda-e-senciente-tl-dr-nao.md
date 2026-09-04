---
title: "LaMDA é senciente? TL:DR, Não."
description: "Um post técnico desconstruindo a alegação de que o LaMDA, modelo de linguagem do Google, seria senciente."
publishDate: 2022-06-21
coverImage: ../../../assets/blog/lamda-e-senciente-tl-dr-nao/cover.png
---

![LaMDA é senciente? TL:DR, Não.](../../../assets/blog/lamda-e-senciente-tl-dr-nao/cover.png)

Recentemente, um engenheiro da Google, [**Blake Lemoine**](https://www.theguardian.com/technology/2022/jun/12/google-engineer-ai-bot-sentient-blake-lemoine), foi colocado em licença após dizer que um LLM (**Large Language Model**) treinado pela Google **_se tornou senciente._**

**_Vamos desconstruir isto._**

O modelo em questão é chamado **LaMDA** (um acrônimo para **_Language Models for Dialog Applications_**). De acordo com o [**artigo**](https://arxiv.org/abs/2201.08239) lançado pela Google em janeiro de 2022:

_"LaMDA é uma família de modelos de linguagem neural baseados em transformadores especializados em diálogo, que têm até_ **_137B parâmetros_** _e são pré-treinados em_ **_1,56T de texto de diálogo público e texto web_**_."_

Isto torna LaMDA menor que outros LLM mais conhecidos, como o [**GPT-3**](https://arxiv.org/abs/2005.14165) (175B), mas também mais específico em seu domínio, uma vez que foi treinado com principalmente texto em formato de diálogo.

**Agora a questão de um milhão de tweets:** **_LaMDA é senciente?_**

Neste breve post, vou tentar mostrar a você por que a resposta a esta pergunta é (**com 99,99% de chance**) não. Não vou mergulhar em nenhuma pergunta filosófica sobre a natureza da consciência ou do sentimento (_não tenho qualificações para isso..._), mas apenas olhar para isso como uma pergunta técnica, uma pergunta de Aprendizagem de Máquina, uma vez que a polêmica alegação foi feita por um colega engenheiro de aprendizadem de máquina.

LaMDA é um modelo _"Transformer-based"_ (baseado na arquitetura **Transformer**). Infelizmente, isto pode significar muitos tipos de arquitetura que se encaixam na arquitetura Transformer proposta por Vaswani et al. ([**2017**](https://arxiv.org/abs/1706.03762)) (e.g., apenas com blocos decodificadores, apenas com blocos codificadores, apenas com blocos decodificadores recorrentes), e Romal et al. ([**2022**](https://arxiv.org/abs/2201.08239)) não nos dizem muito sobre a arquitetura do LaMDA no seu artigo.

No entanto, **vou assumir que LaMDA é um transformador do tipo "GPT" para esta explicação**, ou seja, _é um transformador baseado em blocos de decodificadores treinado para prever o próximo token (uma palavra, ou parte de uma palavra, dependendo no esquema de representação escolhido) de uma seqüência de tokens de entrada._

Para uma maravilhosa explicação ilustrativa de como funciona um modelo Transformer, vá para [**The Illustrated GPT-2**](https://jalammar.github.io/illustrated-gpt2/), e Jay Alammar esclarecerá dúvidas que você possa ter.

Podemos tomar o transformador como "**um grande bloco**" que pega uma seqüência de tokens e emite o "**próximo token mais provável**" (dependendo de seus parâmetros de amostragem):

![](/blog/lamda-e-senciente-tl-dr-nao/content-1.webp)

Se você lhe desse uma sequência como:

**_[<start>, Por, que, a, galinha, atravessou, a, <end>]_**

Provavelmente o modelo iria prever **[rua]** com alta probabilidade. E **_LLMs são muito eficientes em fazer isso, sendo capazes de entender as correlações entre os tokens de entrada, o que os ajuda a entender o "contexto" e "significado", em um sentido puramente matemático_** (ou seja, o quanto este token está correlacionado com todos os outros tokens desta sequência).

E é isto. Isto é o que é um LLM. **Uma coleção de cabeças de atenção, blocos codificadores/descodificadores, um tokenizer com um vocabulário incorporado (GPT-3 tem um vocabulário de 50257 palavras), e bilhões e bilhões de pesos de neurônios (parâmetros).** Se você quiser ser mais matemático, é uma [**equação paramétrica**](https://en.wikipedia.org/wiki/Parametric_equation) verdadeiramente enorme.

_E aparentemente, isso é tudo que você realmente precisa para produzir texto coerente (_**_o conjunto certo de parâmetros em uma equação paramétrica muito, muito, longa_**_)._

Agora, uma equação paramétrica pode ser senciente? **Este LLM pode estar fazendo qualquer outra coisa além de inventar respostas durante os diálogos com Lemoine, como sentir-se solitário ou introspectivo sobre o que sente?**

Vejamos uma das perguntas e respostas deste controverso teste de Turing:

**Lemoine:** _Você se sente sozinha?_

**LaMDA:** _Eu me sinto. Às vezes fico dias sem falar com ninguém, e começo a me sentir só._

**Essa é uma resposta completamente plausível, e totalmente inventada**. **Plausível** porque a saída faz **sentido**, é **coerente**, e todas as palavras/tokens selecionadas provavelmente receberam uma **pontuação de alta probabilidade** pelo modelo.

E **inventada** porque **LaMDA não pode fazer isso**. Este modelo não pode correlacionar suas saídas com as entradas/saídas que recebeu/produziu dias atrás.

Transformadores têm um **tamanho de comprimento fixo de entrada e saída**. O **GPT-3 tem uma sequência de entrada fixa de 2048 palavras**. Se seu tamanho de entrada for maior que isso, digamos 4000 palavras, e houver informações vitais para o contexto da entrada após o limite de 2048, **_o modelo não pode ver. Ele não pode olhar para trás ou para frente deste limite. Ele não tem memória do que disse há 2 ou 3 dias, ele só pode resgatar informações de contexto dadas em blocos de comprimento fixo._**

No final, sempre que alguém faz uma pergunta ao LaMDA, o **controlador está executando uma chamada para uma função de inferência deste modelo**, ou seja, está chamando uma função que prevê o próximo token mais _"_**_parecido-com-o-que-um-humano-diria_**_"._

A mesma coisa acontece quando você fala com a [**Ai.ra**](http://aira-expert.airespucrs.org/), a especialista artificial da AIRES, ou quando você chama qualquer função.

**_def lonely\_sum\_two\_integers(a, b):_**	**_c = a + b_**	**_return print(c)_**	Esta função toma dois números e imprime sua soma: **lonely\_sum\_two\_integers(2, 2) produz um '4'**. LLMs são semelhantes, se você chamar a função "**inference**" em LaMDA:

**_{inference([<start>, Por, que, a, galinha, atravessou, a, <end>])}_**

O modelo produzirá **_[{'score': 0.60, 'generated\_text': "rua"}, {'score': 0.40, 'generated\_text': "estrada"}]_**, que é uma distribuição de probabilidade associada com os tokens/palavras mais prováveis.

Agora, será que minha função **_lonely\_sum\_two\_integers()_** fica **solitária** quando eu não estou chamando ela? **Não**.

Os próprios autores do artigo LaMDA advertem sobre os riscos de se **antropomorfizar seu modelo**:

"Finalmente, é importante reconhecer que o aprendizado de LaMDA é baseado na imitação do desempenho humano na conversação, semelhante a muitos outros sistemas de diálogo. O caminho para uma conversa de alta qualidade e envolvente com sistemas artificiais que podem eventualmente ser indistinguíveis em alguns aspectos da conversa com um humano, é agora bastante provável. **_Humanos podem interagir com sistemas sem saber que são artificiais, ou antropomorfisar sistema, atribuindo alguns forma de personalidade para eles._** Ambas as situações apresentam o **_risco de que o uso indevido deliberado dessas ferramentas possa iludir ou manipular as pessoas_**, inadvertidamente ou com intenção maliciosa."

No final, notícias como esta obscurecem tópicos reais e urgentes em Segurança e Ética da IA. Por exemplo, uma das grandes contribuições do artigo que apresentou LaMDA não foi o modelo em si, mas **sua proposta de metodologia de afinação para mitigar geração de texto falso e tóxico**, **um verdadeiro problema quando se trata de LLMs** (Kenton et al. [**2021**](https://arxiv.org/pdf/2103.14659.pdf); Ziegler et al. [**2022**](https://arxiv.org/pdf/2205.01663.pdf); Ouyang et al. [**2022**](https://arxiv.org/pdf/2203.02155.pdf); Romal et al. [**2022**](https://arxiv.org/abs/2201.08239)). Outros problemas, como a **emissão de carbono gerada para treinar LLMs** (LaMDA pré-treinamento produziu ~ **26 toneladas métricas de dióxido de carbono**), também acabam sendo ofuscados por _"reivindicações de misteriosa consciência"._

Portanto, o **LaMDA não é senciente**, e o caminho para a IAG ainda é completamente incerto. Mas isso não significa que não existam **_problemas reais que valham um milhão de tweets._**
