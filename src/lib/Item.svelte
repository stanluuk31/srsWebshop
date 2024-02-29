<script>
    export let edit_item = false;
</script>
<div class="card">
    <h2>Gameboy Pocket Red</h2>
    <img class="item-img" src="images/gbRed.jpg" alt="Nintendo Gameboy Red">
    <div class="pricing">
        <h3>&euro; 45,-</h3>
        {#if edit_item === false}
        <button> Buy now </button>
        {:else}
        <button> Edit </button>
        {/if}
    </div>
</div>

<style>
    .card {
        margin: 0 10px;
        background: black;
        height: auto;
        width: 300px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .item-img {
        box-shadow: 8px 8px 0 rgb(77, 77, 77);
        width: auto;
        height: auto;
    }
    h2, .card {
        font-family: 'Press Start 2P';
        color: white;
    }
    .pricing {
        /* padding: 20px 0; */
        display: flex;
        justify-content: space-between;
    }
</style>