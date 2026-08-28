---
title: "Auditability and Black-Box Models: Brazil and Electronic Voting"
description: "How redundancy, randomness, and auditing guarantee the robustness and transparency of the Brazilian electronic voting system."
publishDate: 2022-11-14
---

![Auditability and Black-Box Models: Brazil and Electronic Voting](/blog/auditabilidade-e-modelos-black-box-o-brasil-e-a-votacao-eletronica/cover.jpg)

## What's the problem with electronic voting? 🗳️

Electronic voting, or [e-voting](https://en.wikipedia.org/wiki/Electronic_voting), is "_voting by electronic means to assist or handle the casting and counting of votes._"

With many modern aspects of life, like banking and finance, already automated through technology (_and no ordinary citizen seems to be questioning whether Visa or Mastercard are "really" safe when buying goods online_), we already rely on security measures such as "[_air gap networking_](https://en.wikipedia.org/wiki/Air_gap_(networking))" and "[_cryptography_](https://en.wikipedia.org/wiki/Cryptography)."

However, **elections in democratic states** are (_definitely_) a **high-stakes scenario**. The system has to work even under the malicious intentions of external attackers. This raises the question of whether "_electronic voting_" is safe and whether we should be using it.

As a first note, cybersecurity is a dense and intricate subject. And, understandably, questions of trust are not uncommon, given that the general public doesn't master the subject. Still, **it's interesting to see that people's distrust is selective**. Many modern applications use the very same security measures as electronic voting systems, but (_almost_) nobody notices them.

You hand over your credit card information to Amazon's servers every time you make a purchase. And you're fine with that, because it's safe to do so. But if an election doesn't go the way the losing party expected, **people become ready to "****_doubt_****" the very same security infrastructure they use every day**.

A full lecture on the "_robustness_" of electronic voting in Brazil would become overly specific and dull for a general audience. Still, **I'll try to show in this post why electronic voting (****_in Brazil_****) can be considered safe and robust.**

We'll also take this opportunity to talk about **transparency** and **auditing**, two fundamental principles when debating the ethical use of technologies (_like AI_).

Recently, during Brazil's last presidential election, **many people dissatisfied with the results have been questioning and doubting the robustness and "legitimacy" of our electronic voting system**. Some even think our current result is "_fraud_."

So, as someone versed in cybersecurity and information systems technology, I'd like to show the reader how someone "_could_" (_if they wanted to_) try to rig an election in Brazil. But let me **remind the reader that possibility, feasibility, and probability are very different concepts**.

But first, let's try to lay out **the advantages of, and the doubts about, electronic voting**.

## The advantages of electronic voting 👍

Let's present a few points in favor of electronic voting:

- **_Better user experience_**: In general, voting via electronic ballot machines is more efficient (_in terms of speed_) for several reasons. **If there's one thing computers are good at, it's counting**. And in a country like Brazil, with [approximately 156 million voters](https://sig.tse.jus.br/ords/dwapr/seai/r/sig-eleitor-eleitorado-mensal/), counting votes "_by hand_" would be extremely slow and inefficient (_how many times have you botched an arithmetic calculation done by hand?_). In the [1989](https://en.wikipedia.org/wiki/1989_Brazilian_presidential_election) presidential election between **Fernando Collor de Mello** and **Luiz Inácio Lula da Silva**, counting the votes took nine days. Nowadays, however, we can finish an election and get the official result on the same day. Again, **computers are good at counting**.

- **_Paper ballots aren't safe_**: As you probably know, paper isn't a very robust material. Paper ballots can be lost, misplaced, tampered with, misused, stolen, and anything else you can do with paper. For example, the [2000 US presidential election](https://en.wikipedia.org/wiki/Chad_(paper)) used [Votomatic-style](https://en.wikipedia.org/wiki/Voting_machine#Punched_card_voting) machines (_which are nothing more than a mechanical device that punches holes in a paper ballot_). However, in Florida, due to some machine malfunction (_maybe the punch got dull_), many ballots had "_incomplete holes_," and the tabulating machines didn't count those ballots (the holes just weren't there to begin with). In other words, **some votes weren't taken into account**.

- **_It's cheaper_**: Electronic voting lets the government cut costs. **Every day you have to "count ballots" carries an associated cost. You need people to oversee it, people to oversee the supervisors, security, food, logistics, etc.** Electronic voting can reduce all of that to a single day of work.

- **_No vote is left behind_**: Electronic voting is one of the most reliable ways of ensuring votes aren't lost. Electronic information can be stored, protected, and counted robustly. Imagine using paper (instead of an electronic card) for your **public transit pass**. Which one turns into "_mush_" first after a heavy rain?

- **_Brazil is a model for electronic voting worldwide_**: Brazil is currently among the few countries, alongside [India](https://www.evotingindia.com/), where electronic voting is the standard. Many scholars cite Brazil as "[_ahead of its time_](https://cs.stanford.edu/people/eroberts/cs201/projects/2006-07/electronic-voting/index_files/page0006.html)" and "[_a model to follow_](https://cs.stanford.edu/people/eroberts/cs201/projects/2006-07/electronic-voting/index_files/page0006.html)," standing at the forefront of the electronic voting movement. Moreover, paper voting is one of the [most criticized](http://www.dcag.com/images/White_Paper_-_The_problems_with_a_paper_based_voting_system.pdf), [easiest to manipulate](https://static.scientificamerican.com/sciam/assets/media/pdf/selker.pdf), and [most vulnerable](https://www.arxiv-vanity.com/papers/1906.07532/) of existing voting systems.

Now, since this is clearly a "_pro electronic-voting post_," let's try to answer some of the common questions raised by people who oppose electronic voting.

- **_How do we guarantee one vote per voter?_** In Brazil, a photo ID is required to vote. Before voting, poll workers verify the voter's identity, and once confirmed, the voter is (_literally_) removed from the list of "_voters yet to vote_." On top of that, **75.52% of voter identification in Brazil involves biometrics**.

- **_How do we guarantee anonymity?_** The Electoral Roll isn't public, and the order in which votes were cast isn't recorded, making **individual voter inference impractical**.

- **_Can we trust a machine that gives us no paper proof?_** Brazilian electronic ballot machines produce paper records called "_zerésima_" and "_boletim de urna_" (ballot bulletin). The _zerésima_ guarantees there were no votes in the machine to begin with ("**_this machine had zero votes at the start_**"). The _boletim de urna_ gives you a **vote count that can be matched against the number of voters present at a given polling station**. Both [documents are published](https://resultados.tse.jus.br/oficial/app/index.html#/eleicao/resultados) on the TSE's website and via the [Boletim na Mão](https://www.tse.jus.br/comunicacao/noticias/2022/Setembro/confira-os-resultados-da-eleicao-baixe-o-aplicativo-boletim-na-mao) app.

- **_But what if poll workers vote for people who didn't show up?_** Poll workers are randomly selected and never work alone. For something like that to happen, an entire team of randomly selected people would have to coordinate the attack, evade the police forces monitoring polling places and voters, and be willing to face the consequences of an electoral crime (**voting in someone else's place is a crime punishable by up to three years in prison** — art. 309 of the [Electoral Code](http://www.planalto.gov.br/ccivil_03/leis/L4737.htm)).

As you can see, I haven't yet addressed the problems related to "**_voting accuracy_**," "**_counting security_**," "**_fraud prevention_**," and "**_rigged voting machines_**." So, how can we guarantee the robustness of this whole "**black-box**" system?

Through **Randomness** and **Auditing**.

## Auditing "_Black-Box_" Systems 🔎

In Brazil, research and development of electronic voting systems is funded and maintained by the Superior Electoral Court (TSE). The code for these machines hasn't been released to the general public, but it is accessible to certain interested parties, such as the **Armed Forces**, **Political Parties**, and the OAB (**Brazilian Bar Association**).

One of the reasons the software isn't "_publicly available_" (_technically it is available to representatives of the Executive, Legislative, and Judiciary branches_) is that this lets us achieve "[Security through Obscurity](https://en.wikipedia.org/wiki/Security_through_obscurity)."

In other words, **"****_it's hard to attack something you don't know how it works_****."**

However, **security through obscurity alone is discouraged and not recommended**. We need more than that (and we have it). So, _how can we be sure the code running on the voting machines is working the way it should_?

Simply put, **we hold a simulated election before the real one and verify the results**. The process works as follows:

1. On the eve of an election, election officials in each state draw **several ballot machines by lottery**, and instead of being used at actual polling stations, these selected machines are kept at the headquarters of each Regional Electoral Court for a "simulated voting session." **This session is carried out for auditing purposes in the presence of representatives appointed by the political parties**.

1. The simulated voting happens on the same date as the actual election (_making it harder for any software update to be slipped in after the audit_). During this simulated voting session, the votes entered into the machines are not secret. They are witnessed by all party representatives present in the auditing process (_everyone knows how many votes went to each candidate_). The political parties decide on a random number of votes to enter into the machine for each candidate. **The entire process is filmed**.

1. The number of votes decided by the parties is decided on the spot (_nobody knows it beforehand_). **The only way for it to be known by others is if there is collusion between rival parties.**

1. The votes are then entered into the machines, and electronic vote counting proceeds. The result produced by the ballot machine's software **has to match the random number of votes decided by all parties**.

1. Since the machines are chosen at random, the reliability of the ones tested is considered representative of the reliability of the rest (_something that has held true in_ **_every election so far_**). If the audit fails to produce a match between the counted votes and the sum decided beforehand, **the entire election in that state would be voided**.

This is a sort of "[_zero-knowledge proof_](https://en.wikipedia.org/wiki/Zero-knowledge_proof)" of the integrity of our voting system. If all the premises and steps outlined above can be accepted (_and they can_), **we can all agree the machines are secure without needing to open up the source code**.

OK. But transparency matters. And we would like to know the source code. Unfortunately, ordinary citizens can't have that information at the moment. But representatives of the three branches of government can. Given the reports delivered by these various organizations (we'll use the [Armed Forces Report](https://static.poder360.com.br/2022/11/Relatorio_EFASEV.pdf) for this blog post), **what can we learn about the robustness of our ballot machines?**

## Looking inside the _Black Box_ ⬛

As far as is known, TSE voting machines run on the [Linux](https://en.wikipedia.org/wiki/Linux) operating system (nicknamed UEnux), and the proprietary software that handles counting and recording is not disclosed (**around 17 million lines of code written in C or C++ -** **_probably_**).

The machines have many redundancy mechanisms to **ensure data isn't lost or tampered with**. For example, as already mentioned, the "_boletim de urna_" leaves a paper record that can be used to verify the votes of a given machine (_also checking whether the vote count matches a given registration area_). All of this information is made publicly available [here](https://resultados.tse.jus.br/oficial/app/index.html#/eleicao/resultados) and [here](https://www.tse.jus.br/comunicacao/noticias/2022/Setembro/confira-os-resultados-da-eleicao-baixe-o-aplicativo-boletim-na-mao).

All the results from the ballot machines are also stored on a hard-disk device called "_mídia de resultado_" (results media), similar to a USB flash drive. These devices run special software and can only communicate with machines that also run the software owned by the TSE. So, you can't plug this drive into a regular machine, **guaranteeing that its contents cannot be altered by third parties** (_unless they have access to the up-to-date TSE software and encryption keys_).

Once the voting session ends, both the "_mídia de resultado_" and the "_boletim de urna_" **are taken to the local electoral registry office**. There, the drive is connected to a computer that has the correct software and keys, is verified and compared against the paper-trail copy, and then the data is transmitted to the Superior Electoral Court (TSE) in Brasília.

In cases where the drive is lost or destroyed, the electronic ballot machines used in Brazil have further safeguards beyond the paper record (_the machines themselves keep a record of votes on internal and external memory cards_). The only way to lose votes is if the entire machine (_before the "Boletim de Urna" is generated_) is **completely destroyed or stolen** (_something that, to this day, has never happened_). **If a machine breaks down, the memory cards can ensure the data (****_the votes_****) is transferred to a new voting machine.**

In terms of cryptography, the TSE software uses the same techniques to guarantee legitimate identities as online banking apps do. All information, from the votes themselves to the data stored on the machines, is signed using digital signatures, meaning **asymmetric encryption methods**.

In short, **digital signatures are used to verify the authenticity of an electronically sent message, such as a vote, or the tally of all votes on a given machine**. Cryptographic algorithms like [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) let us guarantee that a given piece of data can only be modified by the owner of a given key. If you want to learn more about [asymmetric cryptography](https://www.youtube.com/watch?v=GSIDS_lvRv4) and the standard used for any verification step in cybersecurity, check out [these](https://www.youtube.com/watch?v=AQDCe585Lnc) [two](https://en.wikipedia.org/wiki/Public-key_cryptography) links.

Just like all digital messages, credit card transactions, and online purchases, votes are also **verified using public-key cryptography techniques**. Each vote can only be cast by a given key (_associated with a unique voter ID number_), each machine is tied to its own key, and the only way to "_obtain these keys_" is to break an encryption key (_via brute force_) within an extremely short window of time (_these keys aren't static — they're generated dynamically_). If you want to understand just how _practically impossible_ it is for computers to break encryption keys of a given size, check out [this video](https://www.youtube.com/watch?v=S9JGmA5_unY).

In short, all the data held on an electronic ballot machine, as well as all the results it produces, are **protected by digital signature**. It isn't possible to modify candidate or voter data present on these machines. This information depends on a combination of keys that (_literally_) no one has access to, having been generated during the **Signing and Sealing Ceremony of the Electoral Systems**.

**But couldn't the keys be hacked?** Again, breaking an encryption key via brute force [takes (much) longer than the voting period itself](https://www.youtube.com/watch?v=S9JGmA5_unY). Furthermore, voting machines use [air gaps](https://en.wikipedia.org/wiki/Air_gap_(networking)) to defend against attacks. This means the machines don't even have the hardware needed to connect to something like the internet. **They're just boxes that count votes.** They **don't have a radio or wifi antenna**. The Linux operating system on the machines is configured by the TSE to **include no software mechanism that allows network connections or remote access**.

By the time votes are transmitted to the TSE's supercomputer in Brasília, **everything is already encrypted**. And as far as we know, **there are no viable attacks that could be carried out against public-key cryptography techniques within the time window that would be needed to tamper with the encrypted data/votes**. Moreover, the data received must match the paper record, which is a physical record of the votes.

Additionally, you can't alter the source code of a single voting machine. The TSE **uses modern version-control tools to check whether the electronic ballot machine's source code has been tampered with**. Only a restricted group of TSE staff and collaborators have access to the source-code repository and are authorized to make changes to the software. The software used in the elections is the same across all of Brazil and is under strict TSE control, overseen by all three branches of government.

**But what if the TSE has rigged machines with different source code?** If they control the source code, couldn't they make the machines do whatever they want?

No, they can't, and **that's exactly why we have our simulated voting session before the elections**.

Yes, the TSE controls the software, but the software itself is audited by representatives of every political party, the OAB, and the Armed Forces. **Since the machines used in the simulated voting session are chosen at random, the TSE could not know in advance which voting machines to safely alter without anyone noticing**.

At the same time, **it's not as though a small group of developers has total power over the ballot machines' source code**. All of the TSE's work in this area is compartmentalized. In other words, **the team responsible for the machine's software isn't the same one responsible for the counting system**. The **team that commits the source code isn't the same one that reviews and tracks that commit**.

From an attacker's point of view, the number of electoral systems involved in running an election is so large that **it's impractical for an insider to have a level of knowledge of the whole system that would allow them to carry out any kind of attack.**

Regardless, _what would it actually take to pull off such an anti-democratic act?_

## What would it take to rig an election in Brazil? 🐱‍💻

Let's list all the systems used to ensure a _black-box_ system (_like the electronic ballot machines_) is applicable in a high-stakes situation such as Brazilian elections:

- **_Multiple Redundancy_**: the entire vote-counting system has **redundant verification mechanisms** to ensure that (1) all information matches; and (2) information cannot be lost.

- **_Code Auditing_**: political parties, the Public Prosecutor's Office, the Armed Forces, and the OAB can **follow the software's development by inspecting the source code**.

- **_Functional Auditing_**: The function of the ballot machines can be **audited and tested before the election**. A kind of "zero-knowledge proof" lets stakeholders and regional electoral courts test the integrity of the machines by randomly choosing which ones to test.

- **_Cryptography_**: Public-key cryptography ensures that **information recorded/transmitted by the ballot machines cannot be altered**.

- **_Air Gap Security_**: Voting machines **lack the hardware needed to allow them to communicate with other unauthorized machines**.

- **_Security through Obscurity_**: Since outside agents don't know how the ballot machines work internally, **real-time attacks become extremely difficult** during the short window in which the machines operate online.

- **_System Incompatibility_**: election officials cannot bypass the _software_ and _hardware_ that make up the machines. **Only specific machines (****_with specific software_****) can be used to retrieve the information stored inside them**.

Now, let's imagine for a minute **how one could rig an election in Brazil.**

First, we'd need to alter some (_or all_) of the electronic ballot machines (_software and hardware_). Since the development of the machines is compartmentalized, this isn't a "_one-man_" job. **It's a team effort that would require espionage and infiltration**.

Many people, working toward the same goal, **would have to infiltrate many different (****_highly secure and monitored_****) government offices**, staying in contact with one another without getting caught. And let's imagine this highly motivated team managed (_by some miracle_) to control the final "_commit_" of the source code and the final build of the machines.

But this team still needs to pass a voting test (**"****_the simulated election_****"**). If, for example, the generated code and machines had some kind of configuration able to detect whether they were being "_monitored for auditing purposes_" or used for "_real elections_" (_as in the_ [_Volkswagen emissions scandal_](https://en.wikipedia.org/wiki/Volkswagen_emissions_scandal)), they might be able to fool the auditing procedure.

Something like this could only fool the simulated voting session if every single machine had been tampered with (_which would be extremely difficult to pull off_). **If only some of the machines were tampered with, getting only the untampered machines selected for the simulated vote would come down to luck.**

But let's suppose our team is wealthy and managed to bribe every state in Brazil. All the regional electoral courts are in their pocket. And they were able to ensure only untampered machines got selected. Or **let's suppose our team of spy hackers infiltrated every single organization that safeguards the development of the TSE's proprietary software and hardware, turning every machine into a rigged one.**

But now we (_somehow_) have to hide all of our work. These changes could still be detected during the source-code audit (_carried out by political parties, the Public Prosecutor's Office, the Armed Forces, and the OAB_). So, **we'd have to have representatives of all of these organizations in our pocket too**. How much bribery, threats, and espionage would that take? A lot.

By now, the reader probably has enough information to understand **the herculean task involved in rigging an election in Brazil**. The whole system is designed to have as many fail-safe points as possible. "_Hacking_" the election isn't a one-person job (_not even a 100-person job_). **It would require a level of intelligence, espionage, and corruption that is nearly impossible to hide**. Operations like this could collapse if even a few insiders came forward.

In the end, as an attacker, once you look at all these security measures and redundancies, the first thing that comes to mind is: **"****_it's not worth it…_****"**

If you want to tamper with or interfere with an election, the "_easy way_" (_as almost every political party does_) is to invest all that money that would go into a "_doomed spy-hacker mission_" into **disinformation and marketing** instead.

In trustworthy applications, where encryption and end-to-end protection are guaranteed, you don't attack the servers or the machines. You attack the endpoints. **We attack people.** That's why more than [90% of all cyberattacks are "](https://www.ptsecurity.com/ww-en/analytics/cybersecurity-threatscape-2021-q2/)[_social engineering attacks_](https://www.ptsecurity.com/ww-en/analytics/cybersecurity-threatscape-2021-q2/)[”](https://www.ptsecurity.com/ww-en/analytics/cybersecurity-threatscape-2021-q2/).

So, **could someone actually hack the elections in Brazil?** Not really. **Not in the sense of it being likely.** The amount of effort required to tamper with elections undetected would have to rival (_and exceed_) events like the [Stuxnet exploit](https://en.wikipedia.org/wiki/Stuxnet) (_a nearly 10-year project orchestrated by foreign countries against Iran's nuclear program_).

But what about the **vulnerabilities presented in the report** delivered by the "[Armed Forces Team for Oversight and Auditing of the Electronic Voting System (EFASEV)](https://static.poder360.com.br/2022/11/Relat%C3%B3rio_EFASEV.pdf)"?

**_What vulnerabilities?_**

Let's look at the **main points raised** in this report:

1. The EFASEV report has many complaints about not being able to test the source code. And to be fair, the STF only allowed a _static_ analysis of the code, not a dynamic one. Honestly, it's hard to find vulnerabilities without some amount of tinkering. However, **that isn't the same as saying vulnerabilities exist in the code**. If they do, they weren't detected by the EFASEV report.

1. Questions were raised about whether the source-code version could be changed after the audit (_a commit being run later or reverted_). However, it was verified that the digital signatures on the commits matched those signed at the Sealing Ceremony. In other words, **the audited code was the code that was used**.

1. EFASEV concluded that the security test regarding the Biometric Pilot Project was inconclusive, since voter adherence to biometrics wasn't in the 75%–82% range. Biometrics is still being rolled out, but **an inconclusive result doesn't mean there are irregularities**. It means **it wasn't possible to certify the machines' security based on a small sample** (_not representative of Brazil's voting population_).

1. During "Compilation, Digital Signing, and Sealing of the Electoral Systems," the whole system is brought "online" to allow every machine to be updated with the same software. **According to EFASEV, this is the only moment where there could (****_hypothetically_****) be a security breach** (_when the machines are online, updating the source code to be used_).

1. All other components, such as the generation of the "_Result Media_," "_Boletim de Urna_," and the "_Zerésima_," **were found to be secure** (_no vulnerabilities were found_).

To be fair, I agree with the part of the EFASEV report that says "_without dynamic testing, a complete security analysis cannot be carried out._" However, **that doesn't mean the TSE doesn't run dynamic tests** (_it does_). Would making the source code available outside of controlled environments to third parties pose risks to the source code's integrity? **Probably.** Is that risk small enough to justify "_fully opening up_" the source code used by the ballot machines? **Unknown.**

Transparency and reliability are sometimes at odds. **Finding the gray areas where these principles don't communicate very well is part of the whole debate around ethics and security in information systems.**

Still, is this "_possible vulnerability_" presented in the EFASEV report enough to make us doubt the Brazilian electronic voting system? **No.**

Again, the amount of hacking, engineering, espionage, and corruption that would be needed to "_modify the source code_" in the brief window in which it's being uploaded/downloaded to the machines is "_excessively large_." Several [zero-day exploits](https://en.wikipedia.org/wiki/Zero-day_(computing)) would have to be used and abused by attackers (_in a way that wouldn't raise suspicion_). Even as an inside or outside job, **it's not feasible**.

As mentioned above, nowadays, if you want to attack these kinds of systems, you don't go after the system. You go after the endpoints (_the voters_). The **spread of disinformation and vote-buying is a far more serious threat to our democracy** than "_hacking_."

A multi-billion-dollar conspiracy with several infiltrated agents would still face an (_impossible_) task in tampering with the election. **But with a few million, a political party could automate the spread of disinformation and targeted marketing to distort voter perception and gain support**, as has been done [once](https://en.wikipedia.org/wiki/Facebook%E2%80%93Cambridge_Analytica_data_scandal), [twice](https://www.gatescambridge.org/our-scholars/blog/how-cambridge-analytica-influenced-nigerias-elections/), [three times](https://periodicos.ufjf.br/index.php/TeoriaeCultura/article/view/12427), and who knows how many more times to come.

If you don't know which side to take in this debate, **let philosophy help you** with [_a priori_](https://plato.stanford.edu/entries/simplicity/) [simplicity](https://plato.stanford.edu/entries/simplicity/).

> "**The simplest solution is almost always the best.**" − _William of Ockham_

What's more likely (_the simpler explanation_)? A multi-billion-dollar conspiracy with several infiltrated agents breaking robust public-key cryptography? Or that in a polarized country like Brazil, **a candidate won by 1%**? 🤔

_What do you think?_
