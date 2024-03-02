function setMode(){
    const isDark = document.body.classList.contains("dark");
    console.log(isDark);
    const btnToggle = document.querySelector(".toggle-btn");
    //document.body.classList.toggle("dark");
    if (isDark) {
        document.body.classList.remove("dark");
        btnToggle.innerHTML = '<i class="far fa-moon"></i>';
        
    }else{
        document.body.classList.add("dark");
        btnToggle.innerHTML =  '<i class="fas fa-sun"></i> ';

    }
}