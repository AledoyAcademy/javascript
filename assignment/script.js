function validateForm()
{
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone-number").value;
    var fieldCourses = document.getElementById("field-courses").value;
    var terms = document.getElementById("terms").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;



    if(!firstName || !lastName || !email || !username || !password || !password2)
    {
        document.getElementById("error").innerHTML = 'All fields in red are required';
        document.getElementById("error").style.display = 'block';
        
        if(!firstName)
        {
            document.getElementById("first-name").style.borderColor = 'red';
        }
        else{
            document.getElementById("first-name").style.borderColor = '#ccc';
        }


        if(!lastName)
        {
            document.getElementById("last-name").style.borderColor = 'red';
        }
        else{
            document.getElementById("last-name").style.borderColor = '#ccc';
        }


        if(!email)
        {
            document.getElementById("email").style.borderColor = 'red';
        }
        else{
            document.getElementById("email").style.borderColor = '#ccc';
        }


        if(!username)
        {
            document.getElementById("username").style.borderColor = 'red';
        }
        else{
            document.getElementById("username").style.borderColor = '#ccc';
        }

        if(!password)
        {
            document.getElementById("password").style.borderColor = 'red';
        }
        else{
            document.getElementById("password").style.borderColor = '#ccc';
        }


        if(!password2)
        {
            document.getElementById("password2").style.borderColor = 'red';
        }
        else{
            document.getElementById("password2").style.borderColor = '#ccc';
        }


        return false;

    }


    //validate username
    if(username.length < 10)
    {
        document.getElementById("username").style.borderColor = 'red';
        document.getElementById("error").innerHTML = 'Username must be more than 10 characters';
        document.getElementById("error").style.display = 'block';

        document.getElementById("user-error").innerHTML = 'Username must be more than 10 characters';
        return false;
    }

    //Check is password and confirm are the same
    if(password != password2)
    {
        document.getElementById("password2").style.borderColor = 'red';
        document.getElementById("error").innerHTML = 'Password and Confirmation are not the same';
        document.getElementById("error").style.display = 'block';
        return false;
    }



    // validates the terms
    if (document.getElementById('terms').checked)
    {
        return true;
    }
    else
    {
        alert('All terms and conditions are required');
        return false;
    }

}


function validateLogin()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;



    if(!username || !password)
    {
        document.getElementById("error").innerHTML = 'Enter username and password';
        document.getElementById("error").style.display = 'block';
        return false;
    }

    if(username == 'tobi' && password == 'tobi1234' || username == 'richard' && password == 'richard1234')
    {
        document.getElementById("error").style.display = 'none';

        document.getElementById("success").innerHTML = 'Login authenticated successfully';
        document.getElementById("success").style.display = 'block';
        return false;
    }
    else
    {
        document.getElementById("success").style.display = 'none';

        document.getElementById("error").innerHTML = 'Invalid username and password';
        document.getElementById("error").style.display = 'block';
        return false;
        
    }

}


function checkUser()
{
    var username = document.getElementById("username").value;
    if(username.length < 5)
    {
        document.getElementById("user-error").innerHTML = 'Poor username';
    }
    else if(username.length > 5 && username.length < 10)
    {
        document.getElementById("user-error").innerHTML = 'Weak username';
    }
    else{

        document.getElementById("user-error").innerHTML = '<span style="color:green;">Username OK</span>';
    }
}

