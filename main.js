const sortable_list = document.querySelector(".drag_drop")
const items = document.querySelectorAll(".item")

items.forEach(item =>{
    item.addEventListener("dragstart", () =>{
        item.classList.add("dragging")
    })
    item.addEventListener("dragend", () =>{
        item.classList.remove("dragging")
    })

})

const initSortableList = (e) =>{
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");
    let undrags = [...sortable_list.querySelectorAll(".item:not(.dragging)")];


    let nextSibling = undrags.find(undrag => {
        return e.clientY <= undrag.offsetTop + undrag.offsetHeight / 2;
    });

    sortable_list.insertBefore(draggingItem, nextSibling)
}

sortable_list.addEventListener("dragover", initSortableList);
sortable_list.addEventListener("dragenter", e => e.preventDefault())