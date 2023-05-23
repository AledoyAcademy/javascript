function add()
{
    document.getElementById("sign").innerText = '+';
}
function sub()
{
    document.getElementById("sign").innerText = '-';
}
function divide()
{
    document.getElementById("sign").innerText = '/';
}
function multiply()
{
    document.getElementById("sign").innerText = 'x';
}

function cal()
{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sign = document.getElementById("sign").innerText;

    num1  = parseInt(num1);
    num2  = parseInt(num2);

    if(num1 == '' || num2 == '')
    {
        alert('You must enter values in text fields before calculating');
        return false;
    }

    if(sign == '+')
    {
        var ans = num1+num2;
        alert('Your answer is '+ans);
    }
    if(sign == '-')
    {
        var ans = num1-num2;
        alert('Your answer is '+ans);
    }
    if(sign == '/')
    {
        var ans = num1/num2;
        alert('Your answer is '+ans);
    }
    if(sign == 'x')
    {
        var ans = num1*num2;
        alert('Your answer is '+ans);
    }
}