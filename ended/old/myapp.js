// function set()
// {
//     let elements =
//         document.getElementsByName('CssProperty');
//
//     for (let index=0; index < elements.length; index++){
//       let cssPropery = elements[index].getAttribute('id');
//        let cssValue = elements[index].value;
//
//        let div = document.getElementById('modify');
//
//        div.style[cssPropery] = cssValue;
//     }
// }
//
// document.getElementById('set').addEventListener('click', set);



function newitem()
{
    var element = document.createElement('p');
    element.innerText = document.getElementById('input').value;

    document.body.appendChild(element);
}

document.getElementById('add').addEventListener('click', newitem);