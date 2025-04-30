// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{ slug: 'home/home' },
				{
					label: 'Python',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
						{ label: 'SSH to gcp', slug: 'guides/ssh-to-gcp' },
					],
				},
				{
					label: 'Dev Ops',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'SSL cert', slug: 'devops/sslcert' },
						{ label: 'SSH to GCP', slug: 'devops/ssh-to-gcp' },
						{ label: 'Multiple node js Versions', slug: 'devops/multiple-nodejs-versions' },
						{ label: 'Subdomain in nginx', slug: 'devops/subdomain-in-nginx' },
					],
				},
			],
		}),
	],
});
