<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
    $(document).ready(function(){
	if(document.location.pathname.includes("categoria")){
		$(".shopengine-ele-nav-search-select").change(function(){
		var index = $(".shopengine-ele-nav-search-select")[0].selectedIndex;
		$(".shopengine-advanced-search-input").val( document.querySelector('.shopengine-ele-nav-search-select')[parseInt(index)].text);
	});
	}
});
</script>
