
const inputs= document.querySelectorAll("input")
function change(){

 const suffix=this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);

}

inputs.forEach((input)=> input.addEventListener("change",change ))
