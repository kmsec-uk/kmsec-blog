<script lang="ts">
    import { fade } from 'svelte/transition'
    import { isSearchVisible } from '../store/search'
    import Search from './Search.svelte'

    const dismissModal = () => isSearchVisible.set(false);
    
    function handleKeydown(keyEvent){
        if (keyEvent.key === "Escape"){
            isSearchVisible.set(false)
        }
    }
    export function handleKeydown1(keyEvent){
        if (keyEvent.key === "Escape"){
            isSearchVisible.set(false)
        }
    }

</script>
{#if $isSearchVisible}
    <div class="absolute inset-0 h-screen w-screen opacity-50 bg-gradient-to-tr from-slate-600 to-slate-900 z-0" tabIndex="-1" on:keydown={(keyEvent) => {handleKeydown(keyEvent)}} on:click={dismissModal} transition:fade="{{ duration: 100 }}"></div>
    <div class="absolute inset-0 grid justify-center content-center pointer-events-none">
        <div class="w-full z-10 pointer-events-auto" tabIndex="-1" on:keydown={(keyEvent) => {handleKeydown(keyEvent)}} transition:fade="{{ duration: 100 }}">
            <Search />
        </div>
    </div>
{/if}
