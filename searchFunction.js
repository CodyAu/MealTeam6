var availableStoreTags = [];
var availableLocationTags = [];

function setupStoreTags()
{
	for(rest of restList)
	{
		availableStoreTags.push(rest.getName());
	}
}
setupStoreTags();

function setupLocationTags()
{
	for(rest of restList)
	{
		availableLocationTags.push(rest.getLoc());
	}
}
setupLocationTags();

$( function() {
    $( "#searchStore" ).autocomplete({
      source: availableStoreTags
    });
  } );

$( function() {
  $( "#searchLocation" ).autocomplete({
    source: availableLocationTags
  });
} );