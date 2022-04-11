/**
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
    let res=s.split("");
    let a=res.slice(0,Math.floor(res.length/2));
    let b=res.slice(Math.floor(res.length/2));
    let count_a=0;
    let count_b=0

    for(let i=0;i<a.length;i++){
        if(a[i]=="a" || a[i]=="e" || a[i]=="i" || a[i]=="o" || a[i]=="u" || a[i]=="A" || a[i]=="E" || a[i]=="I" || a[i]=="O" || a[i]=="U" ){        count_a+=1;}

    }
    for(let j=0;j<b.length;j++){
       if(b[j]=="a" || b[j]=="e" || b[j]=="i" || b[j]=="o" || b[j]=="u" || b[j]=="A" || b[j]=="E" || b[j]=="I" || b[j]=="O" || b[j]=="U"){
            count_b+=1;
        }
    }
    
    if(count_a==count_b){
        return true;
    }
    else{
        return false;
    }
    
};