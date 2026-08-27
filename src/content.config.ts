import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const collection = (name: string) =>
	defineCollection({
		loader: glob({ pattern: "**/*.{md,mdx}", base: `./src/content/${name}` }),
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				description: z.string(),
				publishDate: z.coerce.date(),
				updatedDate: z.coerce.date().optional(),
				coverImage: image().optional(),
				draft: z.boolean().default(false),
			}),
	});

const projects = collection("projects");
const technicalNotes = collection("technical-notes");
const research = collection("research");
const about = collection("about");
const aires = collection("aires");

export const collections = {
	projects,
	"technical-notes": technicalNotes,
	research,
	about,
	aires,
};
