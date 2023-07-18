<script lang="ts">
	import IconLocation from '~icons/carbon/location-filled';
	import IconEmail from '~icons/ic/round-email';
	import IconPhone from '~icons/clarity/mobile-solid';
	import IconLinkedIn from '~icons/mdi/linkedin';
	import IconGithub from '~icons/mdi/github';

	import IconDot from '~icons/mdi/dot';

	import { contact, links, skills, certs } from '$lib/data';
</script>

<div class="flex items-center justify-center py-8">
	<button class=" bg-emerald-500 text-white px-3 py-1 rounded-md" id="print">Print</button>
</div>

<main
	class="w-full max-w-7xl aspect-[1/1.41421] bg-white font-merri mx-auto shadow text-text text-sm py-20"
	id="cv"
>
	<section>
		<h1 class="text-center font-bold text-2xl pb-10">{contact.fullName}</h1>
		<div class="flex flex-wrap w-7/12 mx-auto justify-center pb-4">
			<span class="flex items-center px-2 py-1 gap-0">
				<IconLocation />{contact.location}
			</span>
			<span class="flex items-center px-2 py-1 gap-1">
				<IconEmail />{contact.email}
			</span>
			<span class="flex items-center px-2 py-1 gap-0">
				<IconPhone />{contact.phone}
			</span>
			<a href={links.linkedIn}>
				<span class="flex items-center px-2 py-1 gap-1">
					<IconLinkedIn />{contact.linkedIn}
				</span>
			</a>
			<a href={links.github}>
				<span class="flex items-center px-2 py-1 gap-1">
					<IconGithub />{contact.github}
				</span>
			</a>
		</div>
	</section>

	<div class="w-11/12 mx-auto">
		<hr class="my-4" />

		<section class="">
			<h2 class="font-semibold text-xl">EXPERIENCE</h2>
			<div class="w-full h-[2px] bg-black mb-2" />
		</section>

		<hr class="my-4" />

		<section class="">
			<h2 class="font-semibold text-xl">PROJECTS</h2>
			<div class="w-full h-[2px] bg-black mb-2" />
		</section>

		<hr class="my-4" />

		<section class="">
			<h2 class="font-semibold text-xl">EDUCATION</h2>
			<div class="w-full h-[2px] bg-black mb-2" />
		</section>

		<hr class="my-4" />

		<section class="">
			<h2 class="font-semibold text-xl uppercase">Certifications</h2>
			<div class="w-full h-[2px] bg-black mb-2" />

			{#each certs as cert}
				<div class="">
					<p class="font-bold leading-none">
						{cert.name}
					</p>
					<div class="flex items-center">
						{cert.by}
						<IconDot />
						{cert.year}
					</div>
				</div>
			{/each}
		</section>

		<hr class="my-4" />

		<section class="">
			<h2 class="font-semibold text-xl uppercase">SKILLS</h2>
			<div class="w-full h-[2px] bg-black mb-2" />

			{#each skills as sk}
				<p class="font-bold">
					{sk}
				</p>
			{/each}
		</section>
	</div>
</main>
