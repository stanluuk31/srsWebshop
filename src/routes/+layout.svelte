<script>
	import Featured from './Featured.svelte';
	import './styles.css';
	import Drawer from 'svelte-drawer-component';
	let open = false;

</script>

<div class="app">
	<nav>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<span class="material-icons menu" on:click={ () => open = true }>menu</span>
		<h1 class="rainbow">Super Retro Store</h1>
		<span class="material-icons search">info</span>
	</nav>

	<main>
		<div class="drawer">
			<Drawer { open } size='300px'>
			  <!-- svelte-ignore a11y-click-events-have-key-events -->
			  <!-- svelte-ignore a11y-no-static-element-interactions -->
			  <span class="material-icons menu close" on:click={ () => open = false }>close</span>
			</Drawer>
		  </div>
		  <Featured />
	</main>
	<div class="bottom-card">
		<div class="bottom-left">
		  <h3>Contact:</h3>
		  <div class="contact-icons">
			<span class="material-icons">shop</span>
			<span class="material-icons">delete</span>
			<span class="material-icons">edit</span>
		  </div>
		</div>
		<div class="bottom-right">
		  <p>FAQ</p>
		  <p>Do you like this website?</p>
		</div>
	  </div>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	/* Nav bar */
	nav {
		position: fixed;
		top: 0;
		z-index: 1;
		height: auto;
		width: 100%;
		padding: 10px 0;
		box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
		background-color: black;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	nav > .material-icons, .menu {
		font-size: 48px;
		color: #ffffff;
		padding: 0 10px;
		cursor: pointer;
	}
	  /* drawer */
	.drawer :global(.drawer .panel) {
		background: black;
	}

	.drawer :global(.drawer .overlay) {
        background: rgba(100, 100, 100, 0.5);
	}

	.drawer :global(.close) {
		padding: 10px;
	}

	.bottom-card {
		position:relative;
		bottom: 0px;
		width: 100%;
		height: auto;
		background-color: rgb(0, 0, 0);
		display: flex;
		justify-content: space-around;
		font-weight: 700;
	}
  .bottom-left {
		height: 100px;
		margin: 10px 10px;
  }
  .contact-icons >.material-icons {
		font-size: 24px;
		padding: 0 10px;
  }

  .bottom-right > p {
		padding: 10px 10px;
		display: flex;
		flex-direction: row;
  }

</style>
