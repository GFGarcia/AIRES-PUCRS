---
title: "Chatbots e Language Model Playgrounds"
description: "A nova versão da Ai.ra e o AIRES Alignment Playground, ferramentas para explorar chatbots e o alinhamento de grandes modelos de linguagem."
publishDate: 2023-01-26
---

![Chatbots e Language Model Playgrounds](/blog/chatbots-e-language-model-playgrounds/cover.png)

## Ai.ra está de cara nova, e com várias melhorias [🤖](https://emojipedia.org/robot/)

**Ai.ra** é o chatbot especialista dá AIRES na PUCRS. Desenvolvida por [Nicholas Kluge](https://nkluge-correa.github.io/) e [Carolina Del Pino](http://lattes.cnpq.br/6291330432531578), **Ai.ra** trata-se de um software aberto que pode ser acessado no seguinte [repositório](https://github.com/Nkluge-correa/Aira-EXPERT).

**Ai.ra** possui quatro iterações, as primeiras três tendo sido treinadas através de aprendizagem de máquina (uma **rede Bayesiana**, uma **LSTM bidirecional** e um **Transformer** foram treinados através de **aprendizado supervisionado**), enquanto a quarta iteração foi criada a partir de **regras pré-estabelecidas** (análise de n-grama + pesquisa de dicionário). Atualmente, **Ai.ra** é capaz de responder diversas perguntas relacionadas a conceitos (_desambiguação_) em áreas como **Machine Learning**, **Ética** e **Segurança da IA**.

Em nossa versão online da **Ai.ra**, você também pode conversar com uma versão afinada/destilada de **BlenderBot 3**, um grande modelo de linguagem desenvolvido pela [Meta AI](https://ai.facebook.com/). Pessoas interessadas em testar e avaliar tais modelos podem utilizar nossa UI no [seguinte link](https://aira-expert.herokuapp.com/). **Essa ferramenta foi criada apenas para fins de pesquisa e educação.**

![](/blog/chatbots-e-language-model-playgrounds/content-1.gif)

## AIRES Alignment Playground 🎯

Outra ferramenta que estamos disponibilizando agora é o **Alignment Playground**, uma [UI criada](https://alignment-playground.herokuapp.com/) para que pessoas possam interagir e testar as capacidades de alinhamento de grandes modelos de linguagem. Atualmente, nosso playground é aberto, e foi criado para permitir que pessoas sem conhecimento técnico possam interagir e experimentar com tais sistemas. O modelo que atualmente utilizamos é o [Bloom](https://huggingface.co/docs/transformers/model_doc/bloom), um dos maiores modelos de linguagem open-source já criados.

“_Alinhamento é sobre a capacidade de modelos de ML de seguir instruções humanas de forma robusta, e entender as intenções de um controlador humano_.”

![](/blog/chatbots-e-language-model-playgrounds/content-2.gif)

A implementação de nosso playground pode ser acessada no nosso repositório, o [Teeny-Tiny Castle 🏰](https://github.com/Nkluge-correa/teeny-tiny_castle). Esperamos que tais ferramentas **possam auxiliar a disseminar conhecimentos, e auxiliar pesquisadores a investigar as limitações e problemas relacionados a utilização de modelos de linguagem** em tarefas de **conversação** e **geração de texto**.

🤗
