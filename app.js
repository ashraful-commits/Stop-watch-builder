const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const output = document.querySelector('#output')


let [mil,sec,min,hou] =[0,0,0,0];
output.innerHTML ='00:00:00:000';



function msmh(){
    mil+=10;
    if(mil == 1000){
        mil =0;
        sec++;
        if(sec ==60){
            sec =0;
            min++;
            if(min ==60){
                min =0;
                hou++;
            }
        }
    }

    let h = (hou>10)? hou:hou;
    let m = (min>10)? min:min;
    let s = (sec>10)? sec:sec;
    let ms = (mil>10)? mil:mil;
    output.innerHTML = `${h}  :  ${m}  :  ${s}  :  ${ms}`;
      
}




let setIn ="";
btn1.addEventListener('click',()=>{
    setIn = setInterval(()=>{
        msmh();
    },10)
});

btn2.addEventListener('click',()=>{
    clearInterval(setIn);
});

btn3.addEventListener('click',()=>{
    clearInterval(setIn);
    output.innerHTML = '00:00:00:000'
})
