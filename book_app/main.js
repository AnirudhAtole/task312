var sub = document.getElementById("my-form");
var user_list = document.getElementById("user");

sub.addEventListener('submit',store_details);

function store_details(e)
{
    e.preventDefault();

    let my_obj = {
        "name" : document.getElementById("name").value,
        "email" : document.getElementById("email").value,
        "phone_number" : document.getElementById("phone_num").value
    };

    let my_obj_serialized = JSON.stringify(my_obj);

    let user = document.createElement('li');
    user.appendChild(document.createTextNode(`name:- ${my_obj.name}  email id:- ${my_obj.email}  phone_number:- ${my_obj.phone_number}`));
    user_list.appendChild(user);

    localStorage.setItem(document.getElementById("email").value,my_obj_serialized);


}
