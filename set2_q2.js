var array = [1,2,3,4,5,6,7,8,9];
var ul = document.getElementById("list");

for (var i = 0; i < array.length; i++) {
    var text = array[i];
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(text));
    ul.appendChild(li);
}

console.log(ul);