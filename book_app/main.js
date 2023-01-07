var sub = document.getElementById("my-form");
var user_list = document.getElementById("user");

sub.addEventListener('submit',store_details);
user_list.addEventListener('click',remove_user);

function store_details(e)
{
    e.preventDefault();

    let my_obj = {
        "name" : document.getElementById("name").value,
        "email" : document.getElementById("email").value,
        "phone_number" : document.getElementById("phone_num").value
    };

    let my_obj_serialized = JSON.stringify(my_obj);

    //creating user list
    let user = document.createElement('li');
    //creating tet node of li
    user.appendChild(document.createTextNode(`name:- ${my_obj.name}  email id:- ${my_obj.email}  phone_number:- ${my_obj.phone_number}`));

    //creating a delete button
    var del_butt = document.createElement('button');
    del_butt.appendChild(document.createTextNode("delete"));
    del_butt.className = 'btn1';
    del_butt.onclick = "remove_user()"; 

    user.appendChild(del_butt);

    //appending to the list
    user_list.appendChild(user);

    localStorage.setItem(document.getElementById("email").value,my_obj_serialized);
}

function retrieve_emails(text)
{
    return text.match(/([a-zA-Z0-9,_-]+@[a-zA-Z0-9,_-]+\.[a-zA-Z0-9_-]+)/gi);
}

function remove_user(e)
{
    if(confirm("Do you want to delete the booking"))
    {
        var li = e.target.parentElement;
        let email = retrieve_emails(li.innerText);
        localStorage.removeItem(email);
        user_list.removeChild(li);
    }
}
