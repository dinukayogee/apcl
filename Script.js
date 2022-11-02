// ---------------------------------------disclouser--------------------------------------------------
function toggleDisclosure(btnID) {
    // Get the button that triggered this
    var theButton = document.getElementById(btnID);
    // If the button is not expanded...
    if (theButton.getAttribute("aria-expanded") == "false") {
      // Now set the button to expanded
      theButton.setAttribute("aria-expanded", "true");
    // Otherwise button is not expanded...
    } else {
      // Now set the button to collapsed
      theButton.setAttribute("aria-expanded", "false");
    }
  }

  //----------------------------------modal--------------------------------------------------------

