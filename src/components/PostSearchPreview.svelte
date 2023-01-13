<script lang="ts">
    type Props = {
        slug: string
        title: string
        description: string
        category: string,
        tags: Array<string>
    }
    export let post: Props
    export let isLast: boolean = false
</script>
<div class="flex gap-6 text-left hover:bg-theme-primary">
    <div class="flex-1">
        <h4 class="text-lg leading-tight font-semibold text-white mb-2">
            <a href={`/${post.category}/${post.slug}`} title={post.title}>{post.title} &rarr;</a>
        </h4>
        <p class="text-base text-theme-dark-primary leading-5 line-clamp-2">
            {post.description}
        </p>
        <ul class="list-none py-2 flex flex-wrap gap-2">
            {#each post.tags as tag}
                <a class="inline-block text-xs px-4 py-1 rounded-full text-theme-primary bg-theme-dark-primary hover:border-theme-dark-primary hover:bg-theme-primary hover:text-theme-dark-primary" href={`/tags/${tag}`} title={tag}>{tag}</a>
            {/each}
        </ul>
    </div>
</div>
{#if !isLast}
    <hr class="my-4 text-theme-dark-secondary"/>
{/if}