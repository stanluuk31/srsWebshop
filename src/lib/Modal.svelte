<script context="module">
    import { writable } from "svelte/store";
    const store = writable();
    /**
     * @param {any} component
     */
    export function openModal(component, props={}) {
        store.set({component, props});
    }

    export function closeModal() {
        store.set();
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

{#if $store}
    <!-- The modal window to create a new list item: -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="modalBg" on:click|self={closeModal}>
        <div class="modal">
            <svelte:component this={$store.component} {...$store.props} />
        </div>
    </div>
{/if}

<style>
.modalBg {
    position: fixed;
    z-index: 2;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    background-color: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
}

/* .modal{
    height: 100px;
    width: 200px;
} */ 
</style>