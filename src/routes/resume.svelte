<script lang="ts">
	import IconLocation from '~icons/carbon/location-filled';
	import IconEmail from '~icons/ic/round-email';
	import IconPhone from '~icons/clarity/mobile-solid';
	import IconLinkedIn from '~icons/mdi/linkedin';
	import IconGithub from '~icons/mdi/github';

	import IconDot from '~icons/mdi/dot';

	import { contact, links, skills, certs, experiences, projects, educations } from '$lib/data';
</script>

<main class="w-full aspect-[1/1.41421] bg-white font-merri mx-auto text-text text-sm py-20" id="cv">
	<section>
		<h1 class="text-center font-bold text-2xl pb-10 leading-none">
			{contact.fullName}<br />
			<h2 class="leading-none font-normal text-base pt-1">( {contact.nickname} )</h2>
		</h1>
		<!-- w-7/12 -->
		<div class="flex flex-wrap w-[40%] mx-auto justify-center pb-4">
			<span class="flex items-center px-2 py-1 gap-0">
				<IconLocation />{contact.location}
			</span>
			<span class="flex items-center px-2 py-1 gap-1">
				<IconEmail />{contact.email}
			</span>
			<span class="flex items-center px-2 py-1 gap-0">
				<IconPhone />{contact.phone}
			</span>
			{#if links.linkedIn.length != 0}
				<a href={links.linkedIn}>
					<span class="flex items-center px-2 py-1 gap-1">
						<IconLinkedIn />{contact.linkedIn}
					</span>
				</a>
			{/if}
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
			{#each experiences as ex}
				<div class="pt-2">
					<h3 class="font-bold text-[1.05rem]">{ex.role}</h3>
					<div class="flex justify-between font-bold">
						<p>{ex.company}</p>
						<p>{ex.year}, {ex.location}</p>
					</div>
					<ul class="py-1">
						{#each ex.description.split('\n') as dsc}
							<li>{dsc}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</section>

		<hr class="my-4" />

		{#if projects.length != 0}
			<section class="">
				<h2 class="font-semibold text-xl">PROJECTS</h2>
				<div class="w-full h-[2px] bg-black mb-2" />
				{#each projects as pj}
					<div class="pt-2">
						{#if pj.href}
							<a href={pj.href}>
								<h3 class="text-[1.05rem] font-bold">{pj.title}</h3>
							</a>
						{:else}
							<h3 class="text-[1.05rem] font-bold">{pj.title}</h3>
						{/if}
						<div class="flex gap-1">
							<p class="font-semibold">{pj.org}</p>
							<p>-</p>
							<p>{pj.year}</p>
						</div>
						<ul class="py-1">
							{#each pj.description.split('\n') as dsc}
								<li>{dsc}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</section>

			<hr class="my-4" />
		{/if}

		<section class="">
			<h2 class="font-semibold text-xl">EDUCATION</h2>
			<div class="w-full h-[2px] bg-black mb-2" />
			{#each educations as ed}
				<div>
					<h3 class="text-[1.05rem] font-bold">{ed.degree}</h3>
					<div class="flex justify-between">
						<span>{ed.university} - {ed.location}</span>
						<span>{ed.yearEarned}, GPAX: {ed.gpax?.toFixed(2)} </span>
					</div>
				</div>
			{/each}
		</section>

		<hr class="my-4" />

		{#if certs.length != 0}
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
		{/if}

		{#if skills.length != 0}
			<section class="">
				<h2 class="font-semibold text-xl uppercase">SKILLS</h2>
				<div class="w-full h-[2px] bg-black mb-2" />

				{#each skills as sk}
					<p class="font-bold">
						{sk}
					</p>
				{/each}
			</section>
		{/if}
	</div>
</main>
