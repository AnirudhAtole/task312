var sub = document.getElementById("my-form");

sub.addEventListener('submit',store_details);

function store_details(e)
{
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    localStorage.setItem(name,email);

}