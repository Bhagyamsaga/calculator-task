let inputbox = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string ='';
buttons.forEach(element => {
    element.addEventListener('click',(b)=>
    {
        if(b.target.innerText == '=')
        {
            string = String(eval(string));
            inputbox.value = string;
        }
        else if(b.target.innerText == 'AC')
        {
            string = '';
            inputbox.value = string;
        }
        else if(b.target.innerText == 'DEL')
        {
            string = String.substring(0,string.length-1);
            inputbox.value=string;
        }
        
        else
        {
            try{
                let answer = eval(screen.value);
                inputbox.value = answer;
            } catch (error) {
                inputbox.value = 'Error';
            }
            string += b.target.innerText;
            inputbox.value = string;
        }
    })
});