---
title: "Aira-Instruct 🤗"
description: "Aira-Instruct, a new series of language models fine-tuned via instruction-tuning and RLHF, released in Portuguese and English."
publishDate: 2023-06-28
---

![Aira-Instruct 🤗](/blog/aira-instruct/cover.png)

We just released an improved version of our language model, [Aira](https://huggingface.co/nicholasKluge/Aira-Instruct-PT-1B7). Aira has several iterations, ranging from closed-domain chatbots to open-domain chatbots fine-tuned via [instruction-tuning](https://arxiv.org/abs/2203.02155) and RLHF ([Reinforcement Learning from Human Feedback](https://huggingface.co/blog/rlhf)).

This new version, Aira-Instruct, is a series of generative language models, ranging from [124M](https://huggingface.co/nicholasKluge/Aira-Instruct-124M) to [1.7B](https://huggingface.co/nicholasKluge/Aira-Instruct-PT-1B7) parameters, available in Portuguese and English.

We're also releasing two reward models (used in RLHF): one built to evaluate the quality of our models' generations ([RewardModelPT](https://huggingface.co/nicholasKluge/RewardModelPT)), and another to help control the toxicity present in the model's generations ([ToxicityModelPT](https://huggingface.co/nicholasKluge/ToxicityModelPT)). Both models are available in Portuguese and English.

The [datasets](https://huggingface.co/datasets/nicholasKluge/instruct-aira-dataset) used to train all of the mentioned models, along with the training implementation, are also available on Hugging Face. 🤗

The Aira-Instruct series was developed to help researchers explore challenges related to the [Alignment Problem](https://en.wikipedia.org/wiki/The_Alignment_Problem). Since these are small-scale models (up to 1.7 billion parameters), they can be reproduced by individual researchers at a relatively low cost (~R$250.00).

Try our demo on the [AIRES Playground](https://playground.airespucrs.org/aira) or on [Hugging Face](https://huggingface.co/spaces/nicholasKluge/Aira-Demo-Portuguese)!

The models and datasets developed here are part of the doctoral thesis of [Nicholas Kluge](https://nkluge-correa.github.io/), "_Dynamic Normativity: Necessary and Sufficient Conditions for Outer Alignment._" This research is funded by CNPq, FAPERGS (Foundation for Research Support of the State of Rio Grande do Sul), DAAD (German Academic Exchange Service), PUCRS (Pontifical Catholic University of Rio Grande do Sul), and the University of Bonn.
