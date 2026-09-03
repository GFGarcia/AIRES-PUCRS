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
				signupForm: z.boolean().default(false),
			}),
	});

const about = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/about" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			coverImage: image().optional(),
			draft: z.boolean().default(false),
			signupForm: z.boolean().default(false),
			directors: z
				.array(
					z.object({
						name: z.string(),
						role: z.string().optional(),
						summary: z.string(),
						lattes: z.string().url().optional(),
						photo: image(),
					}),
				)
				.optional(),
			membersSection: z
				.object({
					title: z.string(),
					body: z.string(),
				})
				.optional(),
		}),
});

const projects = collection("projects");
const technicalNotes = collection("technical-notes");
const announcements = collection("announcements");
const blog = collection("blog");

export const collections = {
	projects,
	"technical-notes": technicalNotes,
	about,
	announcements,
	blog,
};
