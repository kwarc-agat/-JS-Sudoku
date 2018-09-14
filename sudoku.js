var numbers = new Array(81);
var need_help = 0;
for (i = 0; i < 81;i++)
{
    numbers[i]="";
}
// dane liczby
{
    var index = new Array(30);
    numbers[2] = 9;
    index[0] = 2;

    numbers[4] = 4;
    index[1] = 4;

    numbers[14] = 5;
    index[2] = 14;

    numbers[15] = 3;
    index[3] = 15;

    numbers[16] = 1;
    index[4] = 16;

    numbers[19] = 6;
    index[5] = 19;

    numbers[20] = 1;
    index[6] = 20;

    numbers[23] = 8;
    index[7] = 23;

    numbers[25] = 5;
    index[8] = 25;

    numbers[29] = 5;
    index[9] = 29;

    numbers[30] = 4;
    index[10] = 30;

    numbers[33] = 2;
    index[11] = 33;

    numbers[35] = 3;
    index[12] = 35;

    numbers[37] = 1;
    index[13] = 37;

    numbers[41] = 7;
    index[14] = 41;

    numbers[44] = 8;
    index[15] = 44;

    numbers[46] = 8;
    index[16] = 46;

    numbers[51] = 7;
    index[17] = 51;

    numbers[52] = 6;
    index[18] = 52;

    numbers[54] = 3;
    index[19] = 54;

    numbers[56] = 6;
    index[20] = 56;

    numbers[58] = 1;
    index[21] = 58;

    numbers[59] = 9;
    index[22] = 59;

    numbers[60] = 4;
    index[23] = 60;

    numbers[63] = 7;
    index[24] = 63;

    numbers[74] = 4;
    index[25] = 74;

    numbers[76] = 5;
    index[26] = 76;

    numbers[78] = 6;
    index[27] = 78;

    numbers[79] = 2;
    index[28] = 79;

    numbers[80] = 7;
    index[29] = 80;
}
// wszystkie liczby
var solution = new Array(81);
solution =
    ["5", "3", "9", "1", "4", "6", "8", "7", "2",
    "8", "4", "7", "9", "2", "5", "3", "1", "6",
    "2", "6", "1", "3", "7", "8", "9", "5", "4",
    "6", "7", "5", "4", "8", "1", "2", "9", "3",
    "9", "1", "2", "6", "3", "7", "5", "4", "8",
    "4", "8", "3", "5", "9", "2", "7", "6", "1",
    "3", "2", "6", "7", "1", "9", "4", "8", "5",
    "7", "5", "8", "2", "6", "4", "1", "3", "9",
    "1", "9", "4", "8", "5", "3", "6", "2", "7"];
window.onload = show_board;
function show_board()
{
    var printing = "";
    for(i=0;i<81;i++)
    {
        var element = "el" + i;
        printing = printing + '<div class="number" onclick="increase(' + i + ')" id="' + element + '">' + numbers[i] + '</div>';
        if ((i + 1) % 9 == 0) printing = printing + '<div style="clear:both;"></div>';
        document.getElementById("board").innerHTML = printing;
    }
    // wylaczenie klikania danych liczb
    for (j = 0; j <= 29; j++)
    {
        var element = "el" + index[j];
        document.getElementById(element).style.backgroundColor = "#000000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");
    }
    // pogrubione linie oddzielajace kwadraty
    for (i = 18; i < 27; i++)
    {
        var element = "el" + i;
        document.getElementById(element).style.borderBottomWidth = "3px";
    }
    for (i = 45; i < 54; i++)
    {
        var element = "el" + i;
        document.getElementById(element).style.borderBottomWidth = "3px";
    }
    for (i = 2; i <=74 ; i+=9) {
        var element = "el" + i;
        document.getElementById(element).style.borderRightWidth = "3px";
    }
    for (i = 5; i <= 77 ; i += 9) {
        var element = "el" + i;
        document.getElementById(element).style.borderRightWidth = "3px";
    }

    
}
function increase(position)
{
    var element = "el" + position;
    if (numbers[position] >= 9) numbers[position] = "";
    else numbers[position]++;
    document.getElementById(element).innerHTML = numbers[position];
}
function help()
{
    if (need_help == 0) // jeśli włączamy to kolorujemy na zielono i czerwono
    {
        for (i = 0; i < 81; i++)
        {
            var element = "el" + i;
            if (numbers[i] == solution[i])
                document.getElementById(element).style.backgroundColor = "#003300";
            else document.getElementById(element).style.backgroundColor = "#330000";
        }
        need_help = 1;
        document.getElementById("help").style.backgroundColor = "#2d3018";
    }
    else    // jeśli wyłączamy to kolorujemy na czarno
    {
        for (i = 0; i < 81; i++)
        {
            var element = "el" + i;
            document.getElementById(element).style.backgroundColor = "black";
        }
        need_help = 0;
        document.getElementById("help").style.backgroundColor = "black";
    }
}
function random()
{
    var index_hard = new Array(17);
    for (i = 0; i < 81; i++)
        numbers[i] = "";
    for (i = 0; i < 17; i++)
    {
        index_hard[i] = Math.floor(Math.random() * (80 - 0 + 1) + 0);
    }
    for (i = 0; i < 17; i++)
    {
        j = index_hard[i];
        numbers[j] = Math.floor(Math.random() * 10);
    }
    show_board();    
}

