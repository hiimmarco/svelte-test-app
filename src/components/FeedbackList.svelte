<script>
  import FeedbackItem from './FeedbackItem.svelte'
export let feedback = [];
</script>

<main>
  {#each feedback as item (item.id)}
<FeedbackItem item={item}/>
{/each}
</main>