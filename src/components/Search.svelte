<script lang="ts">
    import { onMount } from 'svelte'
    import SearchIcon from './SearchIcon.svelte'
    import PostSearchPreview from './PostSearchPreview.svelte'
    let searchInput
    let searchableDocs
    let searchIndex

    let searchQuery = ''
    let searchResults = []


    onMount(async() => {
        const lunr = (await import('lunr')).default
        const resp = await fetch('/search-index.json')
        searchableDocs = await resp.json()
            // Initialize indexing
        searchIndex = lunr(function(){
            // the match key...
            this.ref('slug')

            // indexable properties
            this.field('title')
            this.field('description')
            this.field('tags')

            // Omit, if you don't want to search on `body`
            this.field('body')

            // Index every document
            searchableDocs.forEach(doc => {
                this.add(doc)
            }, this)
        })
        searchInput.focus()
    })

    $: {
        if(searchQuery && searchQuery.length >= 3) {
           const matches = searchIndex.search(searchQuery)
           searchResults = []
           matches.map(match => {
               searchableDocs.filter(doc => {
                    if(match.ref === doc.slug) {
                        searchResults.push(doc)
                    }
               })
           })
        }
    }
</script>
<div class="w-full relative bg-theme-primary  p-8  rounded-md shadow-lg">
    <div class="pb-4 relative">
        <label class="text-theme-primary absolute top-2 left-2" for="search"><SearchIcon found={searchResults.length > 0} /></label>
        <input class="w-full px-4 py-2 pl-10 text-xl font-semibold text-gray-600 border-0 shadow-inner rounded-md bg-gray-100" type="text" name="search" bind:this={searchInput} placeholder="intel" bind:value={searchQuery}/>
    </div>
    <div class="w-96 h-64 py-4 overflow-y-auto" >
        {#if searchResults.length}
            {#each searchResults as post, i }
                <PostSearchPreview post={post} isLast={ i === searchResults.length - 1 } />
            {/each}
        {:else}
            <div class="text-center text-theme-dark-primary">
                {#if searchQuery.length}
                    No matching items found.
                {:else}
                    Search the kmsec braindump
                {/if}
            </div>
        {/if}
    </div>
    <div class="w-full text-center text-white"><small>click anywhere outside, or press <kbd>Esc</kbd> to close</small></div>
</div>
