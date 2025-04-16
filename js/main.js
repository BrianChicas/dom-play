//alert("test");

// Update validation links dynamically
document.getElementById("html-checker").setAttribute(
    "href",
    "https://validator.w3.org/nu/?doc=" + location.href
  );
  
  document.getElementById("css-checker").setAttribute(
    "href",
    "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href
  );
  
  // Manages responsive mobile nav
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
