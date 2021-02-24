export const url_slug = (word) => {
    var answer = "", a = {}, i;

    a["ا"]="a";a["ب"]="b";a["ث"]="th";a["ج"]="g";a["ح"]="h";a["خ"]="kh";a["د"]="d";a["ذ"]="z";a["ر"]="r";a["ز"]="z";a["س"]="s";a["ش"]="sh";a["ص"]="ss";
    a["ض"]="d";a["ط"]="tt";a["ظ"]="ẓ";a["ع"]="a'";a["غ"]="g'";a["ف"]="f";a["ق"]="q";a["ك"]="k";a["ل"]="l";a["م"]="m";a["ن"]="n";a["ه"]="h";a["و"]="w";
    a["ي"]="ye";a["ة"]="t";a["ء"]="`";
    for (i in word){
        if (word.hasOwnProperty(i)) {
            if (a[word[i]] === undefined){
                answer += word[i];
            } else {
                answer += a[word[i]];
            }
        }
    }
    return answer.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
}