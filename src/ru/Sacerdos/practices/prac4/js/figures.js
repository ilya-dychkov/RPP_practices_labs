var ip = 1, jp = 0, vp = "";
var nm = [['button1','button2','button3'],
    ['button4','button5','button6'],
    ['button7','button8','button9']];
function onClick(i, j, v) {
    v = document.all(v).value;
    if(v=="" && vp==String.fromCharCode(9816)){
        if((i==ip-2 && (j == jp+1 || j == jp-1)) || (i==ip+2 && (j == jp+1 || j == jp-1)) || (j==jp+2 && (i == ip+1 || i == ip-1)) || (j==jp-2 && (i == ip+1 || i == ip-1))){
            document.all(nm[i][j]).value = vp;
            document.all(nm[ip][jp]).value = "";
        }
    }
    if(v=="" && vp==String.fromCharCode(9820)){
        if((Math.abs(i-ip) == 0 && Math.abs(j-jp) != 0) ||
            (Math.abs(j-jp) == 0 && Math.abs(i-ip) != 0)){
            document.all(nm[i][j]).value = vp;
            document.all(nm[ip][jp]).value = "";
        }
    }

    if(document.all(nm[0][0]).value == String.fromCharCode(9816) &&
        document.all(nm[0][1]).value == String.fromCharCode(9816) &&
        document.all(nm[0][2]).value == String.fromCharCode(9816) &&
        document.all(nm[2][0]).value == String.fromCharCode(9820) &&
        document.all(nm[2][1]).value == String.fromCharCode(9820) &&
        document.all(nm[2][2]).value == String.fromCharCode(9820) ){
        alert("Молодец!");
        window.location.reload();
    }
    ip = i;
    jp = j;
    vp = document.all(nm[i][j]).value
}