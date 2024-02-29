<script>
// @ts-nocheck

    import { closeModal } from "./Modal.svelte";
    import { api } from "../utils";
    import Item from "./Item.svelte";
    import AddItem from "./AddItem.svelte";
    export let master;
    let items = [];

</script>
<div class="dashboard">
    <div class="dashboard-top">
        <h1>Dashboard - Hello {master}!</h1>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <span class="material-icons" on:click={closeModal}>close</span>
    </div>
    <div class="items">
        <h2>Items:</h2>
        
    </div>
    <div class="item-row">
       <AddItem/>
        <div class="overview">
            <Item edit_item=true/>
        </div>
    </div>
</div>

<style>
    .dashboard {
        width: 100vw;
        height: 100vh;
        background-color: black;
    }
    .dashboard-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }
    .items {
        padding: 20px;
    }
    .material-icons {
        font-size: 40px;
    }
    h1, h2 {
        font-family: 'Press Start 2P';
    }
    .overview {
        background-color: rgb(28,28,28);
        width: 100%;
        height: auto;
        color: black;
        padding: 20px;
    }

    .item-row {
        display: flex;
    }
</style>
