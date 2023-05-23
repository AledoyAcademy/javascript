function show()
    {
        alert('You have just cleked on a button');
        document.getElementById("demo3").innerText = 'I am the <b>third</b> guy';
    }

    function increase()
    {
        show();
        document.getElementById("demo3").style.fontSize = '34px';
    }
    function reduce()
    {
        show();
        document.getElementById("demo3").style.fontSize = '12px';
    }