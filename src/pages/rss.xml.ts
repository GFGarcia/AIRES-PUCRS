import type { APIRoute } from "astro";

import { buildFeed } from "@/lib/feed";

export const GET: APIRoute = ({ site }) => buildFeed("pt", site);
