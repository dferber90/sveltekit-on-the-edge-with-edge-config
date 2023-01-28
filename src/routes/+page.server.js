import { dev } from '$app/environment';
import { createClient } from '@vercel/edge-config';
import { EDGE_CONFIG } from '$env/static/private';

export const csr = dev;

/** @type {import('@sveltejs/kit').Load} */
export async function load() {
	if (!EDGE_CONFIG) return { greeting: null };

	const edgeConfig = createClient(EDGE_CONFIG);
	const greeting = await edgeConfig.get('svelte_greeting');
	return { greeting };
}
