// load in some project content when an image is clicked
// project images are laid out in the original html
// click on a button to load the project properties into the page

// this place would be updated every now and then for projects we would want to highlight.

// select where we would be adding the element and the button
const ProjectDesc = document.querySelector("proj1");
const PrjDescButton = document.querySelector(".proj_btn");
// click a button and add html to the document while replacing the button with the text like in articles

$(PrjDescButton).click(function(){
    // alert("hello world");
    $(this).replaceWith("Project Information text")
});
