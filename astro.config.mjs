// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/lazarelvis',
			},
			sidebar: [
				{ slug: 'home/home' },
				{
					label: 'Python',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Dev Ops',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Swappfile setup', slug: 'devops/swapfile-linux' },
						{ label: 'Setup Nginx', slug: 'devops/install-nginx' },
						{ label: 'Setup NodeJS', slug: 'devops/install-nodejs' },
						{ label: 'Nginx SSL', slug: 'devops/sslcert' },
						{ label: 'SSH to GCP', slug: 'devops/ssh-to-gcp' },
						{ label: 'Multiple node js Versions', slug: 'devops/multiple-nodejs-versions' },
						{ label: 'Subdomain in nginx', slug: 'devops/subdomain-in-nginx' },
						{ label: 'Redirect Public IP to domain', slug: 'devops/redirect-public-ip' },

					],
				},
			],
		}),
	],
});
