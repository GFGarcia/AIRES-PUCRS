export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export const ui = {
	pt: {
		"nav.home": "Home",
		"nav.projects": "Projetos",
		"nav.technicalNotes": "Notas Técnicas",
		"nav.announcements": "Comunicados",
		"nav.research": "Pesquisa",
		"nav.blog": "Blog",
		"nav.about": "Sobre",
		"nav.contact": "Contato",
		"nav.aboutBoard": "Diretoria",
		"nav.aboutMission": "Missão AIRES",
		"nav.ariaMain": "Navegação principal",
		"nav.ariaFooter": "Navegação do rodapé",
		"nav.comingSoon": "Em breve",
		"nav.openMenu": "Abrir menu",

		"logo.homeAriaLabel": "AIRES PUCRS — página inicial",

		"footer.social": "Social",
		"footer.copyright": "©{year} by the {fullName}",

		"site.description": "Criando Inteligência Artificial (IA) de forma ética e responsável.",
		"feed.title": "Blog e comunicados",

		"hero.welcome": "Bem-vindo à",
		"hero.tagline": "Criando Inteligência Artificial (IA) de forma ética e responsável",
		"hero.p1": "A AI Robotics Ethics Society (AIRES) se dedica na educação dos líderes da IA de amanhã em princípios éticos, de modo a assegurar que a IA seja criada de forma ética e responsável.",
		"hero.p2": "Somos o primeiro capítulo internacional da AIRES, localizado na Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS), Brasil.",
		"hero.cta": "Junte-se à AIRES PUCRS",
		"hero.illustrationAlt":
			"Ilustração de uma mão humana e uma mão robótica equilibrando uma balança, simbolizando a ética na Inteligência Artificial",

		"contact.pageTitle": "Contato",
		"contact.metaDescription": "Entre em contato com a AIRES na PUCRS.",
		"contact.heading": "AIRES na PUCRS",
		"contact.locationIntro": "Nossa sede física se localiza na",
		"contact.locationLinkText": "Escola de Humanidades",
		"contact.locationSuffix": "da PUCRS.",
		"contact.joinHeading": "Junte-se à AIRES na PUCRS",
		"contact.joinP1": "A AIRES na PUCRS gostaria de convidar todos(as) interessados em se juntar ao nosso capítulo a se tornarem membros da AIRES.",
		"contact.joinP2": "Nossa meta é tornar a AIRES na PUCRS uma local de encontro para todas as pessoas (alunos da PUCRS, ex-alunos/Alumni, alunos de outras Instituições de Ensino, programadores, entusiastas, Professores, independentemente de seu nível de formação ou experiência) interessadas em juntar esforços para avançarmos o debate ético a respeito do desenvolvimento da IA.",
		"contact.joinP3": "Todos que quiserem fazer parte da AIRES PUCRS, serão bem-vindos!",
		"contact.imageAlt": "Uma imagem de uma mão humana colocando uma balança sobre mãos robóticas.",
		"contact.contactHeading": "Contato",

		"form.contact.namePlaceholder": "Nome",
		"form.contact.emailPlaceholder": "Email",
		"form.contact.subjectPlaceholder": "Assunto",
		"form.contact.messagePlaceholder": "Insira a sua mensagem aqui",
		"form.contact.submit": "Enviar",
		"form.contact.submitting": "Enviando...",
		"form.contact.genericError": "Não foi possível enviar sua mensagem. Tente novamente mais tarde.",
		"form.contact.success": "Mensagem enviada! Entraremos em contato em breve.",

		"form.signup.heading": "Assine a nossa Carta Aberta!",
		"form.signup.namePlaceholder": "Nome Completo",
		"form.signup.affiliationPlaceholder": "Afiliação/Instituição",
		"form.signup.emailPlaceholder": "Email",
		"form.signup.submit": "Assine",
		"form.signup.submitting": "Enviando...",
		"form.signup.duplicateError": "Este nome ou email já assinou esta carta.",
		"form.signup.genericError": "Não foi possível registrar sua assinatura. Tente novamente mais tarde.",
		"form.signup.success": "Obrigado por assinar! Sua assinatura foi registrada.",

		"collections.blog.title": "Blog de Pesquisa",
		"collections.blog.description": "Fique por dentro dos conteúdos produzidos e gerenciados pelo AIRES.",
		"collections.blog.empty": "Nenhum conteúdo publicado no momento.",

		"collections.projects.title": "Projetos",
		"collections.projects.description": "Conheça os projetos desenvolvidos pela AIRES PUCRS.",
		"collections.projects.empty": "Nenhum projeto publicado no momento.",

		"collections.technicalNotes.title": "Notas Técnicas e Comunicados",
		"collections.technicalNotes.description": "Acompanhe as notas técnicas e comunicados oficiais da AIRES PUCRS.",
		"collections.technicalNotes.empty": "Nenhuma nota técnica publicada no momento.",

		"collections.announcements.title": "Comunicados",
		"collections.announcements.description": "Confira os comunicados e cartas abertas publicados pela AIRES PUCRS.",
		"collections.announcements.empty": "Nenhum comunicado publicado no momento.",

		"diretoria.lattesLink": "Lattes",

		"notFound.pageTitle": "Página não encontrada",
		"notFound.metaDescription": "A página que você procura não foi encontrada.",
		"notFound.code": "404",
		"notFound.heading": "Página não encontrada",
		"notFound.description": "A página que você está procurando não existe ou foi movida.",
		"notFound.cta": "Voltar para a página inicial",
	},
	en: {
		"nav.home": "Home",
		"nav.projects": "Projects",
		"nav.technicalNotes": "Technical Notes",
		"nav.announcements": "Announcements",
		"nav.research": "Research",
		"nav.blog": "Blog",
		"nav.about": "About",
		"nav.contact": "Contact",
		"nav.aboutBoard": "Board",
		"nav.aboutMission": "AIRES Mission",
		"nav.ariaMain": "Main navigation",
		"nav.ariaFooter": "Footer navigation",
		"nav.comingSoon": "Coming soon",
		"nav.openMenu": "Open menu",

		"logo.homeAriaLabel": "AIRES PUCRS — homepage",

		"footer.social": "Social",
		"footer.copyright": "©{year} by the {fullName}",

		"site.description": "Creating ethical and responsible Artificial Intelligence (AI).",
		"feed.title": "Blog and announcements",

		"hero.welcome": "Welcome to",
		"hero.tagline": "Creating ethical and responsible Artificial Intelligence (AI)",
		"hero.p1": "The AI Robotics Ethics Society (AIRES) is dedicated to educating tomorrow's AI leaders in ethical principles, to help ensure that AI is created ethically and responsibly.",
		"hero.p2": "We are the first international chapter of AIRES, based at the Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS), Brazil.",
		"hero.cta": "Join AIRES PUCRS",
		"hero.illustrationAlt":
			"Illustration of a human hand and a robotic hand balancing a scale, symbolizing ethics in Artificial Intelligence",

		"contact.pageTitle": "Contact",
		"contact.metaDescription": "Get in touch with AIRES at PUCRS.",
		"contact.heading": "AIRES at PUCRS",
		"contact.locationIntro": "Our physical headquarters is located at the",
		"contact.locationLinkText": "School of Humanities",
		"contact.locationSuffix": "at PUCRS.",
		"contact.joinHeading": "Join AIRES at PUCRS",
		"contact.joinP1": "AIRES at PUCRS would like to invite everyone interested in joining our chapter to become AIRES members.",
		"contact.joinP2": "Our goal is to make AIRES at PUCRS a meeting place for everyone (PUCRS students, alumni, students from other institutions, developers, enthusiasts, professors, regardless of their level of education or experience) interested in joining forces to advance the ethical debate around the development of AI.",
		"contact.joinP3": "Everyone who wants to be part of AIRES PUCRS is welcome!",
		"contact.imageAlt": "An image of a human hand placing a scale over robotic hands.",
		"contact.contactHeading": "Contact",

		"form.contact.namePlaceholder": "Name",
		"form.contact.emailPlaceholder": "Email",
		"form.contact.subjectPlaceholder": "Subject",
		"form.contact.messagePlaceholder": "Enter your message here",
		"form.contact.submit": "Send",
		"form.contact.submitting": "Sending...",
		"form.contact.genericError": "We couldn't send your message. Please try again later.",
		"form.contact.success": "Message sent! We'll get back to you soon.",

		"form.signup.heading": "Sign our Open Letter!",
		"form.signup.namePlaceholder": "Full Name",
		"form.signup.affiliationPlaceholder": "Affiliation/Institution",
		"form.signup.emailPlaceholder": "Email",
		"form.signup.submit": "Sign",
		"form.signup.submitting": "Signing...",
		"form.signup.duplicateError": "This name or email has already signed this letter.",
		"form.signup.genericError": "We couldn't record your signature. Please try again later.",
		"form.signup.success": "Thank you for signing! Your signature has been recorded.",

		"collections.blog.title": "Research Blog",
		"collections.blog.description": "Stay up to date with content produced and managed by AIRES.",
		"collections.blog.empty": "No content published at the moment.",

		"collections.projects.title": "Projects",
		"collections.projects.description": "Learn about the projects developed by AIRES PUCRS.",
		"collections.projects.empty": "No projects published at the moment.",

		"collections.technicalNotes.title": "Technical Notes & Announcements",
		"collections.technicalNotes.description": "Follow the official technical notes and announcements from AIRES PUCRS.",
		"collections.technicalNotes.empty": "No technical notes published at the moment.",

		"collections.announcements.title": "Announcements",
		"collections.announcements.description": "Check out the announcements and open letters published by AIRES PUCRS.",
		"collections.announcements.empty": "No announcements published at the moment.",

		"diretoria.lattesLink": "Lattes",

		"notFound.pageTitle": "Page Not Found",
		"notFound.metaDescription": "The page you are looking for was not found.",
		"notFound.code": "404",
		"notFound.heading": "Page not found",
		"notFound.description": "The page you're looking for doesn't exist or has been moved.",
		"notFound.cta": "Back to homepage",
	},
} as const;

export type UiKey = keyof (typeof ui)["pt"];
