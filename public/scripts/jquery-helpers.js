const addAfterPriority = function(categoryId, $newItem){

   const categoriesChildren = $(`.id-${categoryId} .todo-list`).children();
   let listNode = $(categoriesChildren[0]); //gets the first child

   if (!categoriesChildren.length || $newItem.hasClass("priority") || !listNode.hasClass("priority")){
     $newItem.prependTo($(`.id-${categoryId} .todo-list`)); // if the list is empty, prepend normally
     return;
   }

  //continues traversing through all children until there is no priority class
  while (listNode.next().hasClass("priority")) {
    listNode = $(listNode.next());
  }
  //appends new item after the last priority item
  listNode.after($newItem);

}

// after item is modified in anyway
const resetCSS = function(selector) {
  $('#mod-items-wrapper').remove();
  $('.body-container').css('filter','blur(0px)')
  $(`${selector}`).hasClass("highlight") ?  null : $(`${selector}`).addClass("highlight");
  setTimeout(()=>{$(`${selector}`).removeClass("highlight")}, 1500)
}
