


function FormValidate()
{
    if(document.forms[0].email.value == "")
    {
        alert("Email must not be empty");
    }
    else if(document.forms[0].name.value == "")
    {
        alert("Name must not be empty");
    }
    else if(document.forms[0].subject.value == "")
    {
        alert("Subject must not be empty");
    }
    else if(document.forms[0].comment.value == "")
    {
        alert("Comment must not be empty");
    }
    else
    {
        alert(`Thanks ${document.forms[0].name.value}`);

        document.forms[0].email.value = "";
        document.forms[0].name.value = "";
        document.forms[0].subject.value = "";
        document.forms[0].comment.value = "";
    }

    return false;
}


// function sendEmail()
// {
//     Email.send({
//         SecureToken : "05e471dc-819d-4b49-9a01-519e36d6df26",
//         To : 'jmunderhill24@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : document.getElementById("subject").value,
//         Body : "Name: " + document.getElementById("name").value 
//         + "<br> Email: " + document.getElementById("email").value
//         + "<br><br> Message: " +  document.getElementById("comment").value
//     }).then(
//         message => alert(message)
//     );
// }


function handleUnfinishedLink()
{
    alert("Unfinished link.");
}

function openHamNav()
{
    $('.mobile ul').toggle();
}


function toggleMobile()
{
    // about
    document.querySelector(".section").style.flexDirection = "column";
    document.querySelector(".section-text").style.width = "100%";
    document.querySelector("#about").style.padding = "0 40px";
    document.querySelector(".personal-photo").style.width = "100%";

    // nav
    $('.desktop').toggle(false);
    $('.tablet').toggle(false);
    $('.mobile').toggle(true);

    $('.mobile ul').toggle(false);

    //h padding
    let height = "5vh";
    document.querySelector("h1").style.paddingTop = height;
    document.querySelector("h2").style.paddingTop = height;
}

function toggleTablet()
{
    // about
    document.querySelector(".section").style.flexDirection = "column";
    document.querySelector(".section-text").style.width = "100%";
    document.querySelector("#about").style.padding = "0 100px";
    document.querySelector(".personal-photo").style.width = "100%";

    // nav
    $('.desktop').toggle(false);
    $('.tablet').toggle(true);
    $('.mobile').toggle(false);

    $('.mobile ul').toggle(false);

    //h padding
    let height = "15vh";
    document.querySelector("h1").style.paddingTop = height;
    document.querySelector("h2").style.paddingTop = height;
}

function toggleDesktop()
{
    // about
    document.querySelector(".section").style.flexDirection = "row";
    document.querySelector(".section-text").style.width = "600px";
    document.querySelector("#about").style.padding = "0 100px";
    document.querySelector(".personal-photo").style.width = "auto";

    // nav
    $('.desktop').toggle(true);
    $('.tablet').toggle(false);
    $('.mobile').toggle(false);

    $('.mobile ul').toggle(false);

    //h padding
    let height = "15vh";
    document.querySelector("h1").style.paddingTop = height;
    document.querySelector("h2").style.paddingTop = height;
}



///////////////////////////////////////////////////

function checkScreen(){
    const checkMobile  = window.matchMedia('screen and (max-width: 769px)');
    const checkTablet  = window.matchMedia('screen and (min-width: 770px) and (max-width: 1150px)');
    const checkDesktop = window.matchMedia('screen and (min-width: 1151px)');

    checkMobile.addListener(function(e){
        if(e.matches) {
            toggleMobile();
        }
    });

    checkTablet.addListener(function(e){
        if(e.matches) {
            toggleTablet();
        }
    });

    checkDesktop.addListener(function(e){
        if(e.matches) {
            toggleDesktop();
        }
    });
}

checkScreen();