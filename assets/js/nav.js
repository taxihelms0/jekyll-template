let nav = document.getElementById("myTopnav");
let brandName = document.getElementById("brand").innerHTML;
let inits;
function init() {
      let initials = [];
      initials[0] = (brandName[0]);
      /* convert title to initials on resize */
      for(let i=0; i<brandName.length; i++){
        if(brandName[i] == " " && brandName[i+1]){
          initials.push(brandName[i+1])
        }
      }
      initials.push(".");
      return initials;
    }
    
function reportWindowSize() {
      // console.log(brandName);
      if (window.location.pathname != "/"){
        // show hamburger
        document.getElementById("hamburger").className = "icon";
        if (matchMedia('only screen and (max-width: 600px)').matches) {
          document.getElementById("brand").innerHTML = inits.join("");
        } else {
          document.getElementById("brand").innerHTML = brandName;
        }
      } else {
        // hide hamburger
        document.getElementById("hamburger").className = "icon-hidden";
      }
      
    }
    
function onLoad() {
      
      inits = init();
      reportWindowSize();

    }
    // document.onload = onLoad();
    window.onload = onLoad();
    
    window.addEventListener('resize',() => {
      reportWindowSize();
    });
  
    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    /* toggle between initials and full site name */
function dropDown() {
      reportWindowSize();
      if (nav.className === "topnav") {
        nav.className += " responsive";
        document.getElementById("myContent").className += " mobileMenu";
        // document.getElementById("brand").innerHTML = brandName;
      } else {
        nav.className = "topnav";
        document.getElementById("myContent").className = "content";
        // document.getElementById("brand").innerHTML = inits.join("");
      }
}