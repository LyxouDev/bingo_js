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
    for(i=1; i<91; i++){
        num_cell = document.getElementById(i)

        num_cell.classList.remove("green")
        num_cell.classList.remove("orange")
    }

    temp = []
}

function random_number(){
    num = Math.trunc(Math.random()*90) + 1

    while(temp.includes(num)){
        num = Math.trunc(Math.random()*90) + 1
    }

    temp.push(num)

    return num;
}

document.body.onkeyup = function(e) {
    if (e.code == "Space") {
        change_to_old_num()    
    }
    
    change_to_new_num(random_number())
}