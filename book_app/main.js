var sub = document.getElementById("my-form");

sub.addEventListener('submit',store_details);

function store_details(e)
{
    e.preventDefault();

    let my_obj = {
        "name" : document.getElementById("name").value,
        "email" : document.getElementById("email").value
    };

    let my_obj_serialized = JSON.stringify(my_obj);

    localStorage.setItem("my_obj",my_obj_serialized);

}
