<script lang="ts">
	import Resume from './../resume.svelte';
</script>

<div class="flex items-center justify-center py-8">
	<a href="/print">
		<button class=" bg-emerald-500 text-white px-3 py-1 rounded-md" id="print">Print</button>
	</a>
</div>

<div class="max-w-7xl mx-auto shadow">
	<Resume />
</div>
