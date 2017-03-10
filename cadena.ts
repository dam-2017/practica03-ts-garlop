export class Cadena{
    public cadena:string;

    constructor(cad:string){
        this.cadena = cad;
    }

    get isReversible():boolean{
        let cad = this.cadena.trim().toLowerCase().replace(/ /g,"");
        for(let i = 0;i<cad.length/2;i++){
            if(!(cad.charAt(i) == cad.charAt(cad.length-i-1))){
                return false;
            }
        }
        return true;
    }

    get vowelsNumber():any{
        let vowels:any ={a:0,e:0,i:0,o:0,u:0};
        for(let i =0;i<this.cadena.length;i++){
            if(this.cadena.toLowerCase().charAt(i)=="a")
                vowels.a++;
            if(this.cadena.toLowerCase().charAt(i)=="e")
                vowels.e++;
            if(this.cadena.toLowerCase().charAt(i)=="i")
                vowels.i++;
            if(this.cadena.toLowerCase().charAt(i)=="o")
                vowels.o++;
            if(this.cadena.toLowerCase().charAt(i)=="u")
                vowels.u++;
        }
        return vowels;
    }

    get lettersNumber():number{
        return this.cadena.trim().replace(/ /g,"").length;
    }

    get wordsNumber():number{
        let cad:string = this.cadena;
        while(cad.trim().search("  ")!=-1){
            cad = cad.trim().replace(/  /g," ");
        }
        let words = cad.split(" ");
        return words.length;
    }
}