<script>
    export let HeroImage; // URL of the image file
  </script>
  
  <style>
    .hero-banner {
      width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }
    .hero-container {
      text-align: center;
      padding: 20px;
    }
  </style>
  
  <div class="hero-container">
    {#if HeroImage}
      <img class="hero-banner" src={HeroImage} alt="Hero Image" />
    {:else}
      <p>No image provided</p>
    {/if}
  </div>
  