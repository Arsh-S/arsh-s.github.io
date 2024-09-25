document.addEventListener("DOMContentLoaded", function () {
    // Set default tab to 'Home'
    document.getElementById("Home").style.display = "block";

    // Add click event listeners for each tab
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", function (evt) {
            var tabName = evt.target.getAttribute("onclick").match(/'(\w+)'/)[1];
            openTab(evt, tabName);
        });
    }
});

function openTab(evt, tabName) {
    // Hide all tab content
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove 'active' class from all tabs
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the current tab content and set the tab as active
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}
