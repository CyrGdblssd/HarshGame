function work() {
    let input = document.getElementById("diasUberiTelefon")
    let name = input.value;
    let newText = document.createElement("h2");
    newText.innerHTML = "Привет, " + name + "! В Алматы прилетел метеор, на котором сидел инопланетянин, твои действия:";
    let gamebox = document.getElementById("gamebox");
    gamebox.appendChild(newText);
    let newInput=document.createElement("input");
    newInput.id="input2";
    gamebox.appendChild(newInput);
    let newBtn=document.createElement("a");
    newBtn.classList.add("knopka");
    newBtn.innerHTML="Продолжить";
    newBtn.setAttribute("onclick", "work2()");
    gamebox.appendChild(newBtn);
}

function work2(){
    let newText = document.createElement("h2");
    newText.innerHTML = "Что бы ты не сделал, ты опоздал: инопланетянин прилетел с миром и его уже кормят баурсаками.";
    let gamebox = document.getElementById("gamebox");
    gamebox.appendChild(newText)
}