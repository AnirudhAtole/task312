var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var desc = document.getElementById('desc');

//form submit event
form.addEventListener('submit', addItem);
filter.addEventListener('keyup',filter_item);

//delete event
itemList.addEventListener('click',remove_item)

function addItem(e)
{
    e.preventDefault();
    
    //get input value
    var newItem = document.getElementById('item').value;
    var newdesc = document.getElementById('desc').value;

    var element = newItem + ' ' + newdesc

    //
    var li = document.createElement('li');

    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(element));

    //create del button
    var del_butt = document.createElement('button');

    //add classes to del button
    del_butt.className = "btn btn-danger btn-sm float-right delete";

    //create edit button
    var edit_button = document.createElement('button');

    //add classes to edit button
    edit_button.className = "btn btn-light btn-sm float-right edit";


    //apped text node
    edit_button.appendChild(document.createTextNode('Edit'));
    del_butt.appendChild(document.createTextNode('X'));
    li.appendChild(del_butt);
    li.appendChild(edit_button);

    itemList.appendChild(li);
}

function remove_item(e)
{
    if(e.target.classList.contains('delete')){
        console.log(1);
        if(confirm('are you sure'))
        {
            var li = e.target.parentElement;

            itemList.removeChild(li);
        }
    }
}

function filter_item(e)
{
    //convert upper to lowerr
    var tet_el = e.target.value.toLowerCase();
    console.log(tet_el);
    var items = itemList.getElementsByTagName('li');
    
    //comvert it to array
    Array.from(items).forEach(function(item){
        var item_name = item.firstChild.textContent;
        if(item_name.toLowerCase().indexOf(tet_el) != -1){
            item.style.display = 'block';
        }
        else
        {
            item.style.display = 'none';
        }
    });

}