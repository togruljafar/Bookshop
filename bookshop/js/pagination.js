'use strict';

    let screenWidth = $('html').outerWidth();
    let itemsPerPageWidth = {
        375:4,
        425:6,
        768:9,
        1440:10
    };

    let widthKeys = Object.keys(itemsPerPageWidth).filter(key => screenWidth<=key);
    let limitPerPage = itemsPerPageWidth[Math.min(...widthKeys)];

    var numberCardItems = $('.grid-content .card').length;
    $(".grid-content .card:gt(" + (limitPerPage -1) + ")").hide();
    var totalPages = Math.ceil(numberCardItems/limitPerPage);
    var currentPage = 1;


$('#first').on('click',function(){
    if (currentPage === 1) {
        return false;
    } else {
        currentPage = 1;
        $(".grid-content .card").hide();
        var grandTotal = limitPerPage ;

        // Loop through total items, selecting a new set of items based on page number
        for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $(".grid-content .card:eq(" + i + ")").show(); // Show items from the new page that was selected
        }
        $(".pagination #page-number").html(currentPage);
    }
})

$("#previous").on("click", function() {
    // Check to make sure that users is not on page 1 and attempting to navigating to a previous page
    if (currentPage === 1) {
        return false;
    } else {
        currentPage--; // Decrement page by one
        $(".grid-content .card").hide(); // Hide all items in the pagination loop
        var grandTotal = limitPerPage * currentPage ; // Get the total number of items up to the page that was selected

        // Loop through total items, selecting a new set of items based on page number
        for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $(".grid-content .card:eq(" + i + ")").show(); // Show items from the new page that was selected
        }
        $(".pagination #page-number").html(currentPage);
    }
});

$('#next').on('click',function(){

    if (currentPage === totalPages) {
        return false;
    } else {
        currentPage++; // Increment the page by one
        $(".grid-content .card").hide(); // Hide all items in the pagination loop
        var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected

        // Loop through total items, selecting a new set of items based on page number
        for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $(".grid-content .card:eq(" + i + ")").show(); // Show items from the new page that was selected
        }
        $(".pagination #page-number").html(currentPage);
    }
})

$('#last').on('click',function(){
    if (currentPage === totalPages) {
        return false;
    } else {
        currentPage = totalPages;
        $(".grid-content .card").hide(); // Hide all items in the pagination loop
        var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected

        // Loop through total items, selecting a new set of items based on page number
        for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $(".grid-content .card:eq(" + i + ")").show(); // Show items from the new page that was selected
        }
        $(".pagination #page-number").html(currentPage);
    }
})
