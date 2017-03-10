export class Operaciones{
    private a:number;
    private b:number;
    constructor(a:number, b:number){
        this.a = a;
        this.b = b;
    }

    get add():number{
        return this.a+this.b;
    }

    get substraction():number{
        return this.a-this.b;
    }

    get factorialA():any{
        if(this.a<0){
            return "No se puede calcular el factorial de un número negativo"
        }
        let factorial = this.a;
        for(let i=this.a-1;i>1;i--){
            factorial*=i;
        }
        return factorial;
    }

    get isPrimeA():boolean{
        for(let i=2;i<this.a;i++){
            if(this.a%i==0){
                return false;
            }
        }
        if(this.a<2)
            return false;
        return true;
    }
}