<script>
    let title = "";
    let category = "";
</script>

<div class="add-product">
    <h2>Add Item:</h2>
    <select name="category" bind:value={category}>
        <option value="console">Console</option>
        <option value="game">Game</option>
    </select>
    <h3>Item name:</h3>
    <input type="text" bind:value={title}>
    <h3>Image:</h3>
    <input type="file">
    <h3>Description:</h3>

    <textarea rows="4">{title} {category}</textarea>

    <button>Add</button>
</div>

<style>
    .add-product {
        background-color: rgb(28, 28, 28);
        width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    textarea {
        resize: none;
        width: 400px;
    }
    div {
        font-family: 'Press Start 2P';
    }
</style>