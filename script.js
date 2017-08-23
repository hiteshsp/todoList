document.addEventListener('keydown',function(event){

	if( event.keyCode== 13)
	{
		
		var inputTask = document.getElementById('txtInput').value;
		var ul = document.getElementById('ulTodo'); 

		var liElement = document.createElement("li");
		var liClassAttribute = document.createAttribute("class");
//		var tasksCheckedAttribute = document.createAttribute("checked");
		
		liClassAttribute.value = "chkbox";

//		tasksCheckedAttribute.value = "";
		
	
		liElement.setAttributeNode(liClassAttribute);
		

		var text = document.createTextNode(inputTask)		
		var tasks = document.createElement("input");
		var taskAttribute = document.createAttribute("type");

		taskAttribute.value = "checkbox";
		tasks.setAttributeNode(taskAttribute);
//		tasks.setAttributeNode(tasksCheckedAttribute);
		
		liElement.appendChild(tasks);					
		liElement.appendChild(text);

		ul.appendChild(liElement);
		
			
	}
});

//var btn = document.getElementById("btnMark");

//btn.addEventListener('click',

function checkTheCheckboxes(){

	var checkboxes = document.getElementsByClassName("chkbox");
	
	for( var i = 0; i <  checkboxes.length; i++)
	{
		if(checkboxes[i].checked == false)
		{
			checkboxes[i].checked = true;
		}
	
	}

}
//)
