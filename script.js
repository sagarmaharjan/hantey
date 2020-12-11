// Inspire from https://codepen.io/guilima/pen/RpjbvP hahaha;
(function() {
    "use strict";
    
    var tabButtons = document.querySelectorAll("[role='tab']"),
        target,
        navSiblings,
        tabPanelSiblings,
        tabPanelShow;
 
    [].forEach.call(tabButtons, function(tabBtn) {
       tabBtn.addEventListener('click', function(e) {
          e.preventDefault();
          
          //$(this)
          target = e.target;
          
          //$(this).attr("aria-selected", "true");
          target.setAttribute("aria-selected", true);
          
          //$(this).parent().siblings().children().attr("aria-selected", "false");
          navSiblings = getSiblings(target.parentNode.parentNode.firstElementChild, target.parentNode);
          [].forEach.call(navSiblings, function(navSibling) {
             navSibling.firstElementChild.setAttribute("aria-selected", false);
          });
          
          //var tabpanelShow = $(this).attr("href");
          //$(tabpanelShow).attr("aria-hidden", "false");
          if(target.tagName.toLowerCase() === 'a') {
              tabPanelShow = target.getAttribute("href").substring(1);
          } else {
            tabPanelShow = target.closest('a').getAttribute("href").substring(1);
          }
          tabPanelShow = document.getElementById(tabPanelShow);
          tabPanelShow.setAttribute("aria-hidden", false);
          
          //$(tabpanelShow).siblings().attr("aria-hidden", "true");
          tabPanelSiblings = getSiblings(tabPanelShow.parentNode.firstElementChild, tabPanelShow);
          [].forEach.call(tabPanelSiblings, function(tabPanelSibling) {
             tabPanelSibling.setAttribute("aria-hidden", true);
          });
       });
    });
 }());
 
 //Jquery function siblings()
 function getSiblings( n, elem ) {
    var r = [];
    for ( ; n; n = n.nextSibling ) {
       if ( n.nodeType === 1 && n !== elem ) {
          r.push( n );
       }
    }
    return r;
 }

