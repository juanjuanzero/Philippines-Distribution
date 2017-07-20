// this place would be updated every now and then for projects the project would want to highlight.

// Select the buttons using jquery
const PrjDescButton1 = document.querySelector(".proj_btn1");
const PrjDescButton2 = document.querySelector(".proj_btn2");

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
