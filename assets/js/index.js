function setSidebar() {
  var btnMenu = document.getElementById("btn_menu");
  var sidebar = document.getElementById("sidebar");
  if (btnMenu.getAttribute("src") == "assets/img/icons/close-btn.svg") {
    btnMenu.setAttribute("src", "assets/img/icons/menu-btn.svg");
    sidebar.setAttribute("class", "sidebar");
  } else {
    btnMenu.setAttribute("src", "assets/img/icons/close-btn.svg");
    sidebar.setAttribute("class", "sidebar active");
  }
}

function setSidebarPages() {
  var btnMenu = document.getElementById("btn_menu");
  var sidebar = document.getElementById("sidebar");
  if (btnMenu.getAttribute("src") == "../assets/img/icons/close-btn.svg") {
    btnMenu.setAttribute("src", "../assets/img/icons/menu-btn.svg");
    sidebar.setAttribute("class", "sidebar");
  } else {
    btnMenu.setAttribute("src", "../assets/img/icons/close-btn.svg");
    sidebar.setAttribute("class", "sidebar active");
  }
}

$(document).ready(function () {
  $(".multiple-items").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    accessibility: false,
    arrows: false,
    draggable: true,
    useCSS: true,
  });
});
