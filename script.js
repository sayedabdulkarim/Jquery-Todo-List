 $("#addItem").click(addItem);
 $('#todos').on('change', '.completeItem', completeItem); 
 $('#todos').on('click', '.todoText', startEditing);
 $('#todos').on('click', '.del', deleteItem);
 $('#todos').on('click', '.saveItem', saveItem);

 $('#newTodo').on('keypress', function(event) {
   if (event.keyCode == 13) { 
     addItem();
     event.preventDefault();
   }
 })

 function addItem(argument) {
   var newTodo = $('#newTodo').val();
   $('#todos').append(`<li><input class="completeItem" type="checkbox"> <span class="todoText">${newTodo}</span> <input type="text" class ="editText"><button class="btn btn-success saveItem">save</button>  <span class="glyphicon glyphicon-trash del"></span></li>`);
   $('#newTodo').val("");
 }

 function deleteItem() {
   $(this).parent().remove();
 }

 function completeItem(argument) {
   $(this).parent().toggleClass('done');
 }

 function startEditing(argument) {
   var currentText = $(this).parent().find('.todoText').val();
   $(this).parent().find('.editText').val(currentText);
   $(this).parent().find('.editText').show();
   $(this).parent().find('.saveItem').show();
   $(this).parent().find('.todoText').hide();
 }

 function saveItem(argument) {
   $(this).hide();
   var newText = $(this).parent().find('.editText').val();
   $(this).parent().find('.editText').hide();
   $(this).parent().find('.todoText').text(newText);
   $(this).parent().find('.todoText').show();



 }