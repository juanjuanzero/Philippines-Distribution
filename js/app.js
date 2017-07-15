// load in some project content when an image is clicked
// project images are laid out in the original html
// click on a button to load the project properties into the page

// this place would be updated every now and then for projects we would want to highlight.

// select where we would be adding the element and the button
// const ProjectDesc = document.querySelector(".projectdesc");
const PrjDescButton1 = document.querySelector(".proj_btn1");
const PrjDescButton2 = document.querySelector(".proj_btn2");
// const ProjectHide = document.querySelector(".projhide");
// click a button and add html to the document while replacing the button with the text like in articles

$(PrjDescButton1).click(function(){
    // alert("hello world");
    if (PrjDescButton1.value === "Hide") {
        // hide the content of the sibling
        PrjDescButton1.previousElementSibling.innerHTML ="AWS Distribution Phils., Corp. was established in March 1997";
        PrjDescButton1.value = "Learn More";
    } else {
        // select the previousSibling of the button 
        PrjDescButton1.previousElementSibling.innerHTML = "Project description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis pretium ante eget consectetur. Etiam feugiat, nunc sed dictum consequat, odio tortor eleifend est, in suscipit neque ligula eget lectus. Donec luctus dolor justo, rhoncus auctor quam iaculis sit amet. In hac habitasse platea dictumst. Nam convallis velit nulla, et porta eros congue vel. Nunc eleifend in elit ac sodales. Pellentesque ac orci nec odio ultrices finibus pharetra non quam. Praesent luctus mattis ullamcorper. Pellentesque sagittis felis nunc, et sagittis leo maximus in. Duis volutpat mattis est non cursus. Donec rhoncus ante et sapien efficitur, id egestas tellus finibus. Vestibulum.";
        // change the button's value to HIDE
        PrjDescButton1.value = "Hide";
    }
});

$(PrjDescButton2).click(function(){
    // alert("hello world");
    if (PrjDescButton2.value === "Hide") {
        // hide the content of the sibling
        PrjDescButton2.previousElementSibling.innerHTML ="AWS Distribution Phils., Corp. was established in March 1997";
        PrjDescButton2.value = "Learn More";
    } else {
        // select the previousSibling of the button 
        PrjDescButton2.previousElementSibling.innerHTML = "Project description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis pretium ante eget consectetur. Etiam feugiat, nunc sed dictum consequat, odio tortor eleifend est, in suscipit neque ligula eget lectus. Donec luctus dolor justo, rhoncus auctor quam iaculis sit amet. In hac habitasse platea dictumst. Nam convallis velit nulla, et porta eros congue vel. Nunc eleifend in elit ac sodales. Pellentesque ac orci nec odio ultrices finibus pharetra non quam. Praesent luctus mattis ullamcorper. Pellentesque sagittis felis nunc, et sagittis leo maximus in. Duis volutpat mattis est non cursus. Donec rhoncus ante et sapien efficitur, id egestas tellus finibus. Vestibulum.";
        // change the button's value to HIDE
        PrjDescButton2.value = "Hide";
    }
});

// click a button and replace the projectdesc div with content
// change the value to "hide"" and class name of the button (we are doing this so it gets selected in the first part)

// add hide button
