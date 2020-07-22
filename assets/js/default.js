  function showInfo(){
    var info = document.getElementsByClassName("toggle");
    var body = document.getElementsByTagName("body")[0];
    console.log(info);
    for(let i=0; i < info.length; i++){
      if (info[i].className == "toggle info-hidden") {
        info[i].className = "toggle info";
        body.style = "padding-bottom:4.5rem;";
      } else {
        info[i].className = "toggle info-hidden";
        body.style = "padding-bottom:2.95rem;";
      }
    }
  }

  let content = document.getElementById("myContent");
  function getOffsetTop() {
    let items = document.getElementsByClassName("menuItem");
    let offsets = [];
    
    for(let i=0; i < items.length; i++) {
      offsets.push(items[i].offsetTop);
    }
    let maxOffset = Math.max.apply( Math, offsets );
      if(maxOffset > 64){
        content.className = "content tripleMenu";
      } else if (maxOffset > 0) {
        content.className = "content doubleMenu";
      } else {
        content.className = "content";
      }
    }

  window.onload = function() {
    getOffsetTop();
  }
  
  window.addEventListener('resize',() => {
    getOffsetTop();
  });
