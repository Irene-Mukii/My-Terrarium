dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));


function dragElement(terrariumElement){
    let pos1 =0,
    pos2 =0,
    pos3 =0,
    pos4 =0;

    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e){
    e.preventDefault();      //good to know default actions of methods so you can know when to disable them
    console.log(e);    //what exactly is e? our element say plant 14 with all its properties ehrn onpointerdown occurs , I think
    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
    }

    function elementDrag(e){
        pos1= pos3 - e.clientX;    //    why?
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;      //i think these are place holders so as to 
        pos4 = e.clientY;      //effect change on pos1 and pos2   

        console.log(pos1, pos2, pos3, pos4);   //(previous x, and y coordinates, current x, and y coordinates) 

        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';    //css styling in js
    }

    function stopElementDrag(){
        document.onpointerup = null; //does it not have default values on none? -- commented it out and works the same without it
        document.onpointermove = null; //this I understand, we want to stop any changes once the oiunter is up and is not moving....
    }
}



