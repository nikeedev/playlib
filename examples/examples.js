export function example(num) {
    let p = document.createElement('p');
    let a = document.createElement('a');
    p.style.fontFamily = "arial";
    a.href = `./example${num}.js`;
    a.target = "_blank";
    a.innerText = `example${num}.js`;
    p.innerHTML = "Source code: ";
    p.appendChild(a);

    document.body.appendChild(p);
}