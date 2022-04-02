let startNumber=16;
grid(startNumber);


function grid(num){
        let squared = num*num;
        let squareSize=(960/num)-2; //due to border width affecting the grid size we need to subtract by two(one for each side)
        
        
        for(let i=0;i<squared;i++){
            let div=document.createElement("div");
            div.style.minWidth = `${squareSize}px`;
            div.style.minHeight = `${squareSize}px`;
            div.value=0.1;
            container.appendChild(div);
            if((i)%num==0){
                div.setAttribute("class", "ender");
            }
            }
        
        
            let squares=document.querySelectorAll("div");
        squares.forEach((div) =>{
    
            div.addEventListener("mouseenter", () =>{
        
                if (div.value<1){
                    div.value+=0.1;
                    }
                
                    div.style.backgroundColor =`rgba(0,0,0,${div.value})`;
            })

        })
}


function getGridSize(){
    let size = prompt("Please enter the side length (100 is the maximum)","16");
    if (size>100){
        size=100;
    }
    return size;
}


function removeGrid(){
    const parent = document.getElementById("container");
    while(parent.hasChildNodes()){
    parent.removeChild(parent.firstChild);
    }
    
    
}


    const reset=document.getElementById("reset");
    reset.addEventListener("click", () =>{
    let container=document.createElement("div");
    let size=getGridSize();
    if (size != null){
    removeGrid();
    grid(size);
    }
})

    
    
    