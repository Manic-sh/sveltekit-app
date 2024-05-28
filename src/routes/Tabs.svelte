<script>
    import * as BuilderSDK from "@builder.io/sdk-svelte";
  
    export let tabList;
    export let builderBlock;
    export let builderContext;


    let activeTab = 0;
  
    function selectTab(tab) {
      activeTab = tab;
    }
    $: {
        console.log("builderContext", builderContext);
    }

</script>
  
<style>
    .section-header {
        margin-left: 130px; /* lg:mx-[130px] */
        overflow: hidden;
    }
    
    .section-header h2 {
        margin-left: 4px; /* mx-4 */
        margin-bottom: 5px; /* mb-5 */
        font-size: 1.875rem; /* text-3xl */
        font-weight: bold; /* bold */
    }
    
    .tabs-wrap {
        display: flex;
        flex-wrap: wrap;
    }
    
    .tabs button {
        padding-top: .5rem; /* py-6 */
        padding-right: 1rem; /* px-4 */
        padding-bottom: .5rem; /* py-6 */
        padding-left: 1rem; /* px-4 */
        border: 0.25rem; /* border-b-4 */
        border-style: solid; /* border-solid */
        cursor: pointer;
        font-weight: bold;
        font-size: 1rem; /* text-xl */
        line-height: 1; /* leading-normal */
        white-space: nowrap; /* whitespace-nowrap */
        color: #333; /* text-[#333] */
        border-color: #fff; /* border-[#fff] */
    }
    
    .tabs button.active {
        border-color: #00c853; /* border-green-500 */
    }
</style>
  
<div class="section-header">
    <h2>Svelte Tabs Component</h2>
    <div class="tabs-wrap">
        <div class="tabs flex">
            {#if tabList}
                {#each tabList as tab, index}
                    <button
                        class:active="{activeTab === index}"
                        on:click={() => selectTab(index)}
                    >
                        {tab.tabName}
                    </button>
                {/each}
            {/if}
        </div>
        {#if tabList && tabList?.length != 0}
            <slot />
        {/if}
    </div>
    {#if tabList && tabList?.length != 0}
        <BuilderSDK.Blocks
            parent={builderBlock.id}
            path={`component.options.tabList.${activeTab}.children`}
            blocks={tabList[activeTab].children}
            builderContext={builderContext}
        />
    {/if}
</div>
