<script lang="ts">
	import { marked } from 'marked';
	import { writable } from 'svelte/store';
	import enContent from './content/en.md?raw';
	import esContent from './content/es.md?raw';

	const language = writable<'en' | 'es'>('en');
	const content = {
		en: enContent,
		es: esContent
	};

	$: currentContent = $language === 'en' ? content.en : content.es;
</script>

<svelte:head>
	<title>Project Info</title>
</svelte:head>

<div class="flex flex-col h-[calc(100vh-64px)] mt-16">
	<!-- Fixed header with language buttons -->
	<div class="fixed top-16 left-0 right-0 bg-white z-10 py-4 shadow-sm">
		<div class="flex justify-center gap-4">
			<button
				class="px-4 py-2 rounded transition-all hover:scale-105 {$language === 'en'
					? 'bg-blue-200 text-blue-800'
					: 'bg-gray-100 text-gray-600'}"
				on:click={() => language.set('en')}
			>
				English
			</button>
			<button
				class="px-4 py-2 rounded transition-all hover:scale-105 {$language === 'es'
					? 'bg-blue-200 text-blue-800'
					: 'bg-gray-100 text-gray-600'}"
				on:click={() => language.set('es')}
			>
				Español
			</button>
		</div>
	</div>

	<!-- Scrollable content -->
	<div class="flex-1 overflow-y-auto pt-20 px-4 pb-8" style="background-color: #fafafa;">
		<div class="container mx-auto">
			<article class="prose prose-slate max-w-none bg-white p-8 rounded-lg shadow-sm">
				{@html marked(currentContent)}
			</article>
		</div>
	</div>
</div>

<style>
	:global(.prose h1) {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
		color: #9b5de5;
		background-color: #f3e8ff;
		padding: 1rem;
		border-radius: 0.5rem;
	}
	:global(.prose h2) {
		font-size: 1.8rem;
		font-weight: 600;
		margin-top: 2rem;
		margin-bottom: 1rem;
		color: #00b4d8;
		background-color: #e0f7fa;
		padding: 0.75rem;
		border-radius: 0.5rem;
	}
	:global(.prose h3) {
		font-size: 1.4rem;
		font-weight: 500;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
		color: #06d6a0;
		background-color: #e0fff7;
		padding: 0.5rem;
		border-radius: 0.5rem;
	}
	:global(.prose ul) {
		list-style-type: disc;
		padding-left: 1.5rem;
		margin-bottom: 1rem;
		background-color: #fff9f9;
		padding: 1rem 2rem;
		border-radius: 0.5rem;
	}
	:global(.prose li) {
		margin-bottom: 0.5rem;
		color: #4a5568;
	}
	:global(.prose p) {
		margin-bottom: 1rem;
		color: #4a5568;
		line-height: 1.7;
	}
</style>
