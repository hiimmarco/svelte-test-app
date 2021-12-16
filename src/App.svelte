<script>
import FeedbackList from './components/FeedbackList.svelte'
let feedback = [
	{id: 1, rating: 2, text:'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'},
	{id: 2, rating: 5, text:'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'},
	{id: 3, rating: 7, text:'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'},
	{id: 4, rating: 9, text:'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'}];

</script>

<main class="container">
	<FeedbackList feedback={feedback}/>
</main>