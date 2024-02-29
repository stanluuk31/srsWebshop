<script>
    import Dashboard from "./Dashboard.svelte";
    import {closeModal, openModal} from "./Modal.svelte";
    import { api } from "../utils";
    let username;
    let password;
    let showError = false;
    
    async function onLogin() {
        if (username === undefined  || password === undefined) return
        let res = await api("GET","http://localhost:42511/api/users/1",{});
        if (res.username === username && res.pwd === password) {
            showError = false;
            closeModal();
            openModal(Dashboard, {master:username})
        }
        else{
            showError = true;
        }
    }
</script>
<div class="login-card">
    <div class="login-row">
        <h1>Login</h1>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <span class="material-icons" on:click={closeModal}>close</span>
    </div>
    <div class="login-input">
        {#if username !== undefined}
            <h2>username: {username}</h2>
        {:else}
            <h2>username:</h2>
        {/if}
         
        <input type="text" bind:value={username}>
        <h2>Password:</h2>
        <input type="password" bind:value={password}>
        {#if showError}
            <h4>Error. Invalid password and/or username</h4>
        {/if}
    </div>
    <div class="login-bottom">
        <button on:click={onLogin} >Login</button>
        <button on:click={closeModal}>Cancel</button>
    </div>
</div>

<style>
    .login-card {
        background-color: black;
        align-self: center;
        width: 500px;
        padding: 20px;
        font-family: 'Press Start 2P';
    }
    .login-row, .login-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .login-bottom {
        margin-top: 20px;
    }
    input {
        width: 90%;
        height: 40px;
        border-color: white;
        background-color: black;
        font-size: larger;
    }
    .material-icons {
        font-size: 40px;
        cursor: pointer;
    }
    h4 {
        color: red;
    }

</style>