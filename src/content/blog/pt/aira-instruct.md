---
title: "Aira-Instruct 🤗"
description: "Aira-Instruct, uma nova série de modelos de linguagem afinados via instruction-tuning e RLHF, disponibilizada em português e inglês."
publishDate: 2023-06-28
---

![Aira-Instruct 🤗](/blog/aira-instruct/cover.png)

Acabamos de tornar disponível uma versão aprimorada do nosso modelo de linguagem, [Aira](https://huggingface.co/nicholasKluge/Aira-Instruct-PT-1B7). Aira possui diversas iterações, de chatbots de domínio fechado à chatbots de domínio aberto afinados via [instruction-tuning](https://arxiv.org/abs/2203.02155) e RLHF ([Reinforcement Learning from Human Feedback](https://huggingface.co/blog/rlhf)).

Esta nova versão, Aira-Instruct, trata-se de uma série de modelos de linguagem generativos, de [124M](https://huggingface.co/nicholasKluge/Aira-Instruct-124M) à [1.7B](https://huggingface.co/nicholasKluge/Aira-Instruct-PT-1B7) de parâmetros, disponíveis em português e inglês.

Também disponibilizamos dois modelos de recompensa (utilizados em RLHF): um criado para avaliar a qualidade das gerações de nossos modelos ([RewardModelPT](https://huggingface.co/nicholasKluge/RewardModelPT)), e outro modelo para auxiliar a controlar a toxicidade presente nas gerações do modelo ([ToxicityModelPT](https://huggingface.co/nicholasKluge/ToxicityModelPT)). Ambos os modelos são disponibilizados em português e inglês.

Os [datasets](https://huggingface.co/datasets/nicholasKluge/instruct-aira-dataset) utilizados para o treinamento de todos os modelos mencionados, mais a implementação do treinamento dos modelos, também se encontram disponíveis no Hugging Face. 🤗

A série Aira-Instruct foi desenvolvida para auxiliar pesquisadores a explorar os desafios relacionados ao [problema de Alinhamento](https://en.wikipedia.org/wiki/The_Alignment_Problem). Por se tratar de modelos de pequeno porte (até 1.7 bilhões de parâmetros), os modelos podem ser reproduzidos por pesquisadores individuais com um custo de investimento relativamente baixo (~R$250,00).

Teste nossa demo no [AIRES Playground](https://playground.airespucrs.org/aira) ou no [Hugging Face](https://huggingface.co/spaces/nicholasKluge/Aira-Demo-Portuguese)!

Os modelos e datasets desenvolvidos fazem parte do desenvolvimento da tese de doutorado de [Nicholas Kluge](https://nkluge-correa.github.io/), "_Dynamic Normativity: Necessary and Sufficient Conditions for Outer Alignment._" Esta pesquisa é financiada pelo CNPq (Fundação de Amparo à Pesquisa do Estado do Rio Grande do Sul), FAPERGS (Fundação de Amparo à Pesquisa do Estado do Rio Grande do Sul), DAAD (Deutscher Akademischer Austauschdienst), PUCRS (Pontifícia Universidade Católica do Rio Grande do Sul) e Universidade de Bonn.
