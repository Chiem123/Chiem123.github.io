
function showMessage()
{
    let x = 5;
    let name = "James";
    let age = 21;
    let school = "SADT";
    alert("HEY" + name + ",your age is"+ age);
}

function checkAge()
{
    let age = 19;
    if (age>=18)
    {
        alert("Hey you can enter the party. You are old enough!")
    }
    else 
    {
        alert("Hey, you're too young.")
    }
}

function showMany()
{
    for(let i=1;i<=10;i=i+1)
    {
        alert("Don't close me! You cliecked me "+i +" times")
    }
}

function changeColor()
{
    document.getElementById("main").style.color="red";
    document.getElementById("main").style.backgroundColor="black";
}
function changeToCat()
{
    document.getElementById("catdog").src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0zeAjuvBegxSKU-hsUbKVoIdDM7DxLIc0zts1krMZ8lzpfIerboxY5FcCt18skcbFQCpkDgkrRALAzFyX8L3b4B_SrMPDTyJZb1z_Dws"
}
function changeToDog()
{
    document.getElementById("catdog").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw"
}
function changeTheme()
{
    document.getElementById("css").href="./styles/styles.css";
}
