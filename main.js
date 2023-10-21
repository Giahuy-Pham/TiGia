var tigia = document.getElementById('tigia'),
    chu = document.getElementById('chu'),
    sotien = document.getElementById('sotien'),
    kq1 = document.getElementById('kq1'),
    kq = document.getElementById('kq'),
    wrapper = document.getElementById('wrapper');

var unit=[' Đồng ',' Ngàn ',' Triệu ',' Tỉ '],hang=['',' Mươi ',' Trăm '];

/*23456
01234
43210*/

function thanhchu(s) {
    let ss='',tmp;
    for(let i=s.length-1,j=0;i>=0;i--,j++) {
        tmp=s[i];
        if (!(j%3)) tmp+=unit[j/3]; else tmp+=hang[j%3];
        if (s[i]=='0') {
            if (j%3==1) {
                if (s[i+1]!='0'&&i) tmp='lẻ '; else tmp='';
            } else
            if (j%3==2) {
                if (s[i+1]=='0'&&s[i+2]=='0') tmp='';
            } else
            if (!(j%3)) {
                tmp=tmp.slice(1);
                if (j&&s[i-1]=='0'&&s[i-2]=='0') tmp='';
            }
        }
        if (tmp=="1 Mươi ") tmp="Mười ";
        ss=tmp+ss; 
    }
    return ss;
}

tigia.addEventListener("input", (event) => {
    let s=tigia.value; 
    if (s.length) chu.innerHTML=thanhchu(s)+"/ 1 Đô la Mỹ";
    else chu.innerHTML='';
    let s1=tigia.value,s2=sotien.value,ss;
    ss=(+s1)*(+s2);
    if (ss) kq.innerHTML=thanhchu(ss.toString());
    else kq.innerHTML='';
});

sotien.addEventListener("input", (event) => {
  let s1=tigia.value,s2=sotien.value,ss;
  ss=(+s1)*(+s2);
  kq1.innerHTML=thanhchu(s2).slice(0,-5)+"Đô la Mỹ bằng:"
  if (ss) kq.innerHTML=thanhchu(ss.toString());
  else kq.innerHTML='';
});

