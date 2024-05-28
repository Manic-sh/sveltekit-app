<script>
    export let title;
    export let documents;

</script>

<style>
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    li {
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
        color: #333;
        font-size: 16px;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
<div>
    <h5>{title}</h5>

    <ul>
        {#if documents && documents.value && documents.value.data && documents.value.data.document}
            {#each documents.value.data.document as document}
                <li>
                    {#if documents.value.data.title}
                        <h5>{documents.value.data.title}</h5>
                    {/if}
                    {#if document.docRef && document.docRef.value && document.docRef.value.data}
                        <a href={document.docRef.value.data.docLink} target="_blank">{document.docRef.value.data.docTitle}</a>
                    {:else}
                        <p>Document data is missing.</p>
                    {/if}
                </li>
            {/each}
        {:else}
            <p>No documents available.</p>
        {/if}
    </ul>
</div>

