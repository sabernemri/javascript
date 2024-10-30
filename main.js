

//1-Fonctions de manipulation de chaînes :
var ch="chaine de caractere";

console.log(ch)
//1.1:Inverser une chaîne
function inverse_ch(ch) {
    var inv="";

    for (let i=ch.length-1;i>=0;i--){
        
        inv+=ch[i];

    }


    return (inv);
}
console.log("inverse="+inverse_ch(ch));

//1.2: Compter les caractères
function long(ch) {
    return(ch.length);
    
}
console.log("longueur="+long(ch));

//1.3: Mettre les mots en majuscule
function majuscule(ch) {
    var s = ch[0].toUpperCase(); 
    for (let i = 1; i < ch.length; i++) {

        if (ch[i-1] == " ") { 
            s =s+ch[i].toUpperCase(); 
        } else
         {
            s=s+ch[i]; 
        }
    }


    return s;
}
console.log("1er mot maj="+majuscule(ch));

//2-Fonctions de tableau :

var arr=[-2,-1,0,1,2,3,4,];
console.log(arr)
//2.1: Rechercher le maximum et le minimum 
function minmax(arr) {
 
    var maxi=arr[0];
    var mini=arr[0];
for(let i=0;i<arr.length;i++){
    if (arr[i]>maxi) {maxi=arr[i];
        
    }
    if (arr[i]<mini) {mini=arr[i];
        
    }
}
    
   
  return("max:"+maxi.toString()+"   min:"+mini.toString())

 }
 console.log(minmax(arr));

 //2.2: Somme d'un tableau
function somme(arr) {
    var s=0;
    for(let i=0;i<arr.length;i++){
        s+=arr[i];
    }
    return(s)
    
}
console.log("somme="+somme(arr))
//2.3: Filtrer le tableau 

function filter(arr) {
   var array=[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>0) {
            
        array.push(arr[i])   ;
    
        }        
        }
    return(array)
}
console.log("filtre=   "+filter(arr))
//3-Fonctions mathématiques :

//3.1:Factorielle
function Factoriel(x) {
    let s=1;
    for(let i=1;i<x;i++){
        s=s*i;

    }
    return s
    
}
console.log("factoriel="+Factoriel(10))
//3.2: Vérification des nombres premiers

function premiers(x) {
    if (x==1) { return("1 est premiers")
        
    }
    for (let i= 2; i < x; i++) {
        if (x%i===0) {
            return( x+"   Le nombre n'est pas premier" )      }
        
    }
   
    return(x+"   nombres est premiers")
}

console.log(premiers(14))

//3.3: Suite de Fibonacci
 function Fibonacci(f,ff,n) {
   if ((f+ff)<n)
    {return(Fibonacci(ff,ff+f,n))}
   else {return(ff);}

 }
console.log("dernier nomber dans suit fibonacci avant  "+30+" est  "+Fibonacci(1,1,30))