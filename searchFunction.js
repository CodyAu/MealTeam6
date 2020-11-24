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

//Perform search for requested restaurant by name
var searchStoreButton = document.getElementById("searchStoreBtn");
function searchStore()
{
  var currStore = $("#searchStore").val();
  for(rest of restList)
  { 
    if(rest.getName() === currStore)
    {
      openMenuPage(rest);
    }
  }
}
searchStoreButton.addEventListener('click', searchStore);

//Perform search for requested restaurant by location
var searchLocationButton = document.getElementById("searchLocationBtn");
function searchLocation()
{
  var currLocation = $("#searchLocation").val();
  for(rest of restList)
  { 
    if(rest.getLoc() === currLocation)
    {
      openMenuPage(rest);
    }
  }
}
searchLocationButton.addEventListener('click', searchLocation);

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