<script>
	import { spring } from 'svelte/motion';
	export let count = 0;
	export let styles;

	const displayed_count = spring();
	$: displayed_count.set(count);
	$: offset = modulo($displayed_count, 1);
  
	function modulo(n, m) {
	  // handle negative numbers
	  return ((n % m) + m) % m;
	}
	console.log(styles?.value?.data?.color);

  </script>
  
  <div class="counter">
	<h4 style="color: {styles?.value?.data?.color}">{styles?.value?.data?.mode}</h4>
	<button on:click={() => (count -= 1)} aria-label="Decrease the counter by one">
		+
	</button>
  
	<div class="counter-viewport">
	  <div class="counter-digits" style="transform: translate(0, {100 * offset}%); color: {styles?.value?.data?.color}; background-color: {styles?.value?.data?.background}">
		<strong class="hidden" aria-hidden="true">{Math.floor($displayed_count + 1)}</strong>
		<strong>{Math.floor($displayed_count)}</strong>
	  </div>
	</div>
  
	<button on:click={() => (count += 1)} aria-label="Increase the counter by one">
		-
	</button>
  </div>
  
  <style>
	.counter {
	  display: flex;
	  border-top: 1px solid rgba(0, 0, 0, 0.1);
	  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	  margin: 1rem 0;
	}
  
	.counter button {
	  width: 2em;
	  padding: 0;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  border: 0;
	  background-color: transparent;
	  touch-action: manipulation;
	  color: var(--text-color);
	  font-size: 2rem;
	}
  
	.counter button:hover {
	  background-color: var(--secondary-color);
	}
  

	.counter-viewport {
	  width: 8em;
	  height: 4em;
	  overflow: hidden;
	  text-align: center;
	  position: relative;
	}
  
	.counter-viewport strong {
	  position: absolute;
	  display: flex;
	  width: 100%;
	  height: 100%;
	  font-weight: 400;
	  color: var(--accent-color);
	  font-size: 4rem;
	  align-items: center;
	  justify-content: center;
	}
  
	.counter-digits {
	  position: absolute;
	  width: 100%;
	  height: 100%;
	}
  
	.hidden {
	  top: -100%;
	  user-select: none;
	}
  </style>