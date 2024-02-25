var accordian = document.getElementsByClassName("accordians");
var i;

for (i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var tekstAccordians = this.nextElementSibling;
    if (tekstAccordians.style.display === "block") {
      tekstAccordians.style.display = "none";
    } else {
      tekstAccordians.style.display = "block";
    }
  });
}
