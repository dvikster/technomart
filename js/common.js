//slider
var stepMove = 0;
var arrowLeft = document.getElementById("arrow_left");
var arrowRight = document.getElementById("arrow_right");
var moveSlider = document.getElementsByClassName("slider")[0];

arrowLeft.onclick = function(event) {
    event.preventDefault();
    if (stepMove == 0) {

    } else {
        stepMove = stepMove + 620;
        pagination();
    }
    moveSlider.style.marginLeft = stepMove + "px";
};
arrowRight.onclick = function(event) {
    event.preventDefault();
    if (stepMove == -1860) {

    } else {
        stepMove = stepMove - 620;
        pagination();
    }
    moveSlider.style.marginLeft = stepMove + "px";
};


// как это уменьшить и сделать правильно - и это не пагинация, а индикация слайдеров
function pagination() {
    if (stepMove == 0) {
        document.getElementsByClassName("pagin")[1].classList.remove("active");
        document.getElementsByClassName("pagin")[2].classList.remove("active");
        document.getElementsByClassName("pagin")[3].classList.remove("active");
        document.getElementsByClassName("pagin")[0].classList.add("active");
    }
    else if (stepMove == -620) {
        document.getElementsByClassName("pagin")[0].classList.remove("active");
        document.getElementsByClassName("pagin")[2].classList.remove("active");
        document.getElementsByClassName("pagin")[3].classList.remove("active");
        document.getElementsByClassName("pagin")[1].classList.add("active");
    }
    else if (stepMove == -1240) {
        document.getElementsByClassName("pagin")[0].classList.remove("active");
        document.getElementsByClassName("pagin")[1].classList.remove("active");
        document.getElementsByClassName("pagin")[3].classList.remove("active");
        document.getElementsByClassName("pagin")[2].classList.add("active");
    }
    else if (stepMove == -1860) {
        document.getElementsByClassName("pagin")[0].classList.remove("active");
        document.getElementsByClassName("pagin")[1].classList.remove("active");
        document.getElementsByClassName("pagin")[2].classList.remove("active");
        document.getElementsByClassName("pagin")[3].classList.add("active");
    }
}

// - по аналогии как в крестиках ноликах, должен быть вариант по проще
function hover_product(id, hover) {
    document.getElementById(id).className = 'col-3 product_item box ' + hover;
}

function out_product(id, out) {
    document.getElementById(id).className = 'col-3 product_item box ' + out;
}


// -  нашла такой код - было интересно испробывать для табов https://www.w3schools.com/howto/howto_js_tabs.asp
function openServices(event, servName) {
    event.preventDefault();

    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(servName).style.display = "block";
    event.currentTarget.className += " active";
}


document.getElementById('map_popup').onclick = function (event) {
    event.preventDefault();
    document.getElementsByClassName("map_popup")[0].style.display = 'block';
}

document.getElementById('close_map').onclick = function (event) {
    event.preventDefault();
    document.getElementsByClassName("map_popup")[0].style.display = 'none';
}


document.getElementById('write_us').onclick = function (event) {
    event.preventDefault();
    document.getElementsByClassName("write_us_block")[0].style.display = 'block';
}

document.getElementById('close_write_us').onclick = function (event) {
    event.preventDefault();
    document.getElementsByClassName("write_us_block")[0].style.display = 'none';
}