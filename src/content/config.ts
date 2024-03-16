import { z, defineCollection } from "astro:content";

const testCollection = defineCollection({
	schema: () =>
		z.object({
			test_id: z.string().max(80),
			title: z.string(),
			description: z.string(),
			author: z.string(),
			pubDate: z
				.string()
				.or(z.date())
				.transform((val: string | Date) => new Date(val)),
			
			//category: z.enum(CATEGORIES),
			tags: z.array(z.string()),
			last_valid_store_version: z.string().max(80),
			last_valid_platform_version: z.string().max(80)
		}).passthrough(),
})

export const collections = {
	'tests': testCollection,
  };