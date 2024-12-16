//TASK2. 1-den verilen edede qeder olan ededlerin cemi.
let n =25;
let cem=0;
for(let i=1;i<n;i++){
    cem+=i
}
document.write(`1 den ${n}ededine qeder butun reqemlerin cemi =${cem} <br/>`)

// -------------------------------------------------------------------------------------------------------------------
/*TASK3. ekranda bu formada sekil cekin
****
***
**
**/
//1ci usul
const rows= 4;
for(let i=rows;i>0;i--){
    document.write ("*".repeat(i)+"<br/>")
}
//2ci usul
const setir= 4;
for(let i=setir;i>0;i--){
    for(let setir_ici=i;setir_ici>0;setir_ici--){
        document.write ("salam")
    }
    document.write ("<br/>")
}

// -------------------------------------------------------------------------------------------------------------------

//TASK4.  1-den verilen edede qeder ededlerin hasili -=>  faktorial (5!= 1*2*3*4*5)
let a= 5;
let hasil =1;
for(let i=1;i<=a;i++){
    hasil*=i;
   }
   document.write (`1 den ${a}ededine qeder butun reqemlerin hasili =${hasil} <br/>`)


/*Task-01
İkirəqəmli ədədi üçrəqəmli olana qədər artırın.
İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin.
Bu rəqəmi üçrəqəmli olana kimi 7 - ədədi qədər artırın.
Son dəyəri konsola çıxarın.(99+7=106'en cox )*/
//1ci usul
const d=12;
for (let i=d;i<=106;i+=7){
    document.write (i +"<br/>")
}
//2ci usul
let eded =+prompt("İkirəqəmli ədəd daxil et")
for (;eded<=100;eded+=7){
}
document.write (`ededen 100 e qeder olan ededlerin 7-7 artmasndan olan ededler = ${eded}<br/>`)
// -------------------------------------eded------------------------------------------------------------------------------
/*Task-02
Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
Proqram N ədədini istifadəçidən soruşur.*/
const k=5;
let i=0;
while(i<k){
    i++;
    document.write (i+" . I know how to use cycles <br/>")
}
// -------------------------------------------------------------------------------------------------------------------
/*Task-03
Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın.990 en cox*/
//1 ci usul
for (let i=100;i<=990;i++){
    if(i%10===0){document.write (i+ "<br/>")
    }
}

//2 ci usul
for (let i=100;i<=990;i++){
    if(!(i%10)){document.write (i+ "<br/>")
    }
}

// -------------------------------------------------------------------------------------------------------------------
/*Task-04
Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.*/
let toplama=0;
for(let i=11;i<= 99;i+=2){
    if(i%2===1){
        toplama+=i;
    }
}
    document.write(`11 den 99 ededine qeder butun reqemlerin cemi =${toplama} <br/>`)
// -------------------------------------------------------------------------------------------------------------------
/*Task-05
İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın.
Proqram istifadəçidən ədəd daxil etməyi xahiş edir. Bundan sonra proqram konsolda bu rəqəmin
bölünəni olan bütün üçrəqəmli ədədlərin cəmini çıxarır.*/
const u =14;
let topla =0;
for (let i=100;i<=999;i++){
    if(!(i % u) ){
      topla+=i;  
    }
}
document.write( i+"<br/>")
// -------------------------------------------------------------------------------------------------------------------
/*Task-06
Sadə ədədləri çıxaran proqram yazın.
İstifadəçidən n ədədini soruşan və n-dən 0-a kimi bütün tek ədədləri azalan ardıcıllıqla çıxaran proqram yazın.
«16» ədədi daxil edildikdə, konsola «15», «13», «11», «9», «7», «5», «3», «1» ardıcıllığı çıxarılmalıdır.*/
/*let a=+prompt("eded daxil et")
for(let i=1 ;i<=a;i++2)*/
const b=16;
for(let i=b; i>0; i--){
    if(i%2){
        document.write(i+ "<br/>")
    }
}
// -------------------------------------------------------------------------------------------------------------------
/*Task-07-dən Task-10-a qədər for ilə yazılmalıdır!
Task-07
10-a qədər bütün ədədlərin hasilin tapan proqram tərtib edin
For dövrün köməyi ilə 10-a qədər bütün ədədlərin hasilin tapan proqram tərtib edin.*/
let m= 10;
let result =1;
for(let i=1;i<=m;i++){
    result*=i;
   }
   document.write (`1 den ${m}ededine qeder butun reqemlerin hasili =${result} <br/>`)
// -------------------------------------------------------------------------------------------------------------------
/*Task-08 istifadeciden metn daxil ed=tmesini təleb edinve metni ters yazdirin*/
const word ="hello";
let newWord="";
for(let i = word.length - 1; i>=0; i--){
    newWord+= word[i];
}
document.write( newWord+"<br/>");
// -------------------------------------------------------------------------------------------------------------------
/*task9 metnde ". herfini ik defe hansi indeksde yerlesdiyini tapan proqram tertib edin"*/
const cumle ="salam .menim adin eli."
for(let i=0; i<=cumle.length; i++){
    if(cumle[i]="."){
        document.write(`ilk defe noqte ${i}-ci indeksdedir`);
        break;
    }
}