const subMenu = document.querySelector(".has-sub-menu");
subMenu.addEventListener("mouseover",function(e){
    document.querySelector(".header-sub-menu").classList.add("is-show");
});
document.querySelector(".header-main").addEventListener("mouseleave", function(){
    if(document.querySelector(".header-sub-menu").classList.contains("is-show")){
        document.querySelector(".header-sub-menu").classList.remove("is-show");
    }
});
function menuFixedTop(){
    if(window.scrollY > 0 && !document.querySelector(".header-main").classList.contains("main-menu-fixed")){
        document.querySelector(".header-main").classList.add("main-menu-fixed");
    }else if(window.scrollY == 0){
        document.querySelector(".header-main").classList.remove("main-menu-fixed");
    }
}
