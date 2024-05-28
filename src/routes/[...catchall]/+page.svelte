<script>
  import Counter from "../Counter.svelte";
  import Tabs from "../Tabs.svelte";
  import DocumentList from "../DocumentList.svelte";
  import HeroImage from "../HeroImage.svelte";

  import { isPreviewing, Content } from "@builder.io/sdk-svelte";
  import { BUILDER_PUBLIC_API_KEY } from "../../apiKey";

  // Create an array of your custom components and their properties
  const CUSTOM_COMPONENTS = [
    {
      component: Counter,
      name: "Counter",
      inputs: [
        {
          name: "name",
          type: "string",
          defaultValue: "hello",
        },
        {
          name: "count",
          type: "number",
          defaultValue: 0,
        },
        {
          name: "styles",
          type: "reference",
          model: 'theme',
        },
      ],
    },
    {
      component: Tabs,
      name: "TabFields",
      canHaveChildren: true,
      inputs: [
        {
          name: "tabList",
          type: "list",
          broadcast: true,
          subFields: [
            {
              name: "tabName",
              type: "string",
            },
            {
              name: "children",
              type: "blocks",
              defaultValue: [
                {
                  "@type": "@builder.io/sdk:Element",
                  component: {
                    name: "Text",
                    options: {
                      text: "this is editable within builder ",
                    },
                  },
                  responsiveStyles: {
                    large: {
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      flexShrink: "0",
                      boxSizing: "border-box",
                      marginTop: "8px",
                      lineHeight: "normal",
                      height: "200px",
                      textAlign: "left",
                      minHeight: "200px",
                    },
                    small: {
                      height: "200px",
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      component: DocumentList,
      name: "Documents",
      inputs: [
        {
          name: "title",
          type: "string",
          defaultValue: "hello",
        },
        {
          name: "documents",
          type: "reference",
          model: 'model',
        },
      ],
    },
    {
        component: HeroImage,
        name: "Hero Banner",
        inputs: [
          {
            name: "HeroImage",
            type: "file"
          }
        ],
    },
  ];

  // this data comes from the function in `+page.server.js`, which runs on the server only
  export let data;

  // we want to show unpublished content when in preview mode.
  const canShowContent = data.content || isPreviewing();
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<main>
  <h1>Welcome to SvelteKit</h1>

  <div>Below is your Builder Content:</div>
  {#if canShowContent}
    <div>page Title: {data.content?.data?.title || "Unpublished"}</div>
    <Content
      model="page"
      content={data.content}
      apiKey={BUILDER_PUBLIC_API_KEY}
      customComponents={CUSTOM_COMPONENTS}
      enrich={true}
    />
  {:else}
    Content Not Found
  {/if}
</main>

<footer>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>
</footer>

<style>
  h1 {
    width: 100%;
    font-size: 2rem;
    text-align: center;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }

  @media (min-width: 480px) {
    footer {
      padding: 40px 0;
    }
  }
</style>
