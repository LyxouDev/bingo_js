temp = []

function change_to_old_num(){
    for(i=1; i<91; i++){
        num_cell = document.getElementById(i)

        if (num_cell.classList.contains("green")){
            num_cell.classList.remove("green")
            num_cell.classList.add("orange")
        }
    } 
}

function change_to_new_num(idx){
    num_cell = document.getElementById(idx)
    num_cell.classList.add("green")
}

function clean_grid(){
    new_num_str = document.getElementById('nv_numero')

    for(i=1; i<91; i++){
        num_cell = document.getElementById(i)

        num_cell.classList.remove("green")
        num_cell.classList.remove("orange")
    }
    new_num_str.textContent = ''
    temp = []
}

function random_number(){
    new_num_str = document.getElementById('nv_numero')
    num = Math.trunc(Math.random()*90) + 1

    while(temp.includes(num)){
        num = Math.trunc(Math.random()*90) + 1
    }

    temp.push(num)
    new_num_str.textContent = num

    return num;
}

document.body.onkeyup = function(e) {
    // Tirage nouveau numéro
    if (e.code == "Space") {
        change_to_old_num()
        change_to_new_num(random_number())  
    }
    
    // Reset Grille
    if(e.code == 'KeyR'){
        clean_grid()
    }
}