// YOUR SCRIPTS

//grid view
$('#grid').click( function() {
    //remove only "list"
    $('.cd-gallery').removeClass('list');
    //add only "grid"
    $('.cd-gallery').addClass('grid');
 
});

// list view
$('#list').click( function() {
    //remove only "list"
    $('.cd-gallery').removeClass('grid');
    //add only "grid"
    $('.cd-gallery').addClass('list');
    
});