const checkbox = Array.from(document.getElementsByClassName("interest__check"));
checkbox.forEach(box => {
    box.addEventListener("change", click);
});

function click() {
    let childCheckboxes = Array.from(this.closest(".interest").querySelectorAll(".interest__check"));
    if (this.checked && childCheckboxes.length > 1) {
        childCheckboxes.forEach(box => {
            box.checked = true;
        });
    }
    if (this.checked===false && childCheckboxes.length > 1) {
        childCheckboxes.forEach(box => {
            box.checked = false;
        });
    }
}
