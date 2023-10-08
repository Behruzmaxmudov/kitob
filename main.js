let x = [];

while (true) {
    let a = prompt("Yaxshi ko'rgan kitobingiz :");

    if (a.toLowerCase() === "stop") {
        break;
    }
    x.push(a);
}
document.write("Yaxshi ko'rgan kitobingiz :")
for (let i = 0; i < x.length ; i++ ) {
    document.write(x[i]);
}