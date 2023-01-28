import { dev } from '$app/environment';
import { createClient } from '@vercel/edge-config';
import { EDGE_CONFIG } from '$env/static/private';

export const csr = dev;

const edgeConfig = createClient(EDGE_CONFIG);

/** @type {import('@sveltejs/kit').Load} */
export async function load() {
	const greeting = await edgeConfig.get('svelte_greeting');
	return { greeting };
}
