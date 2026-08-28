---
title: "Chatbots and Language Model Playgrounds"
description: "The new version of Ai.ra and the AIRES Alignment Playground, tools for exploring chatbots and the alignment of large language models."
publishDate: 2023-01-26
---

![Chatbots and Language Model Playgrounds](/blog/chatbots-e-language-model-playgrounds/cover.png)

## Ai.ra has a new look, with several improvements [🤖](https://emojipedia.org/robot/)

**Ai.ra** is AIRES at PUCRS's expert chatbot. Developed by [Nicholas Kluge](https://nkluge-correa.github.io/) and [Carolina Del Pino](http://lattes.cnpq.br/6291330432531578), **Ai.ra** is open software that can be accessed in the following [repository](https://github.com/Nkluge-correa/Aira-EXPERT).

**Ai.ra** has four iterations. The first three were trained through machine learning (a **Bayesian network**, a **bidirectional LSTM**, and a **Transformer**, all trained through **supervised learning**), while the fourth was built from **predefined rules** (n-gram analysis + dictionary search). Currently, **Ai.ra** is able to answer a range of concept-related questions (_disambiguation_) in areas such as **Machine Learning**, **Ethics**, and **AI Safety**.

In our online version of **Ai.ra**, you can also chat with a fine-tuned/distilled version of **BlenderBot 3**, a large language model developed by [Meta AI](https://ai.facebook.com/). People interested in testing and evaluating such models can use our UI at the [following link](https://aira-expert.herokuapp.com/). **This tool was built for research and educational purposes only.**

![](/blog/chatbots-e-language-model-playgrounds/content-1.gif)

## AIRES Alignment Playground 🎯

Another tool we're now making available is the **Alignment Playground**, a [purpose-built UI](https://alignment-playground.herokuapp.com/) that lets people interact with and test the alignment capabilities of large language models. Our playground is currently open, and was designed to let people without a technical background interact and experiment with such systems. The model we currently use is [Bloom](https://huggingface.co/docs/transformers/model_doc/bloom), one of the largest open-source language models ever built.

“_Alignment is about the ability of ML models to robustly follow human instructions, and to understand the intentions of a human controller._”

![](/blog/chatbots-e-language-model-playgrounds/content-2.gif)

Our playground's implementation can be found in our repository, [Teeny-Tiny Castle 🏰](https://github.com/Nkluge-correa/teeny-tiny_castle). We hope these tools **can help spread knowledge and help researchers investigate the limitations and issues related to the use of language models** in **conversational** and **text-generation** tasks.

🤗
