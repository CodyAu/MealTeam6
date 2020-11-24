var availableTags = [];
function setupTags()
{
	for(rest of restList)
	{
		availableTags.push(rest.getName());
	}
}
setupTags();

$( function() {
    $( "#searchStore" ).autocomplete({
      source: availableTags
    });
  } );