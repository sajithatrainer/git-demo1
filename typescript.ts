function calcualteTax(amount:number,format:boolean):string|number|null {

    if(amount===0)
    {
        return null;
    }
    const calcAmount=amount*1.2;
    return  format ?`$${calcAmount.toFixed(2)}`: calcAmount;
}

//let taxNumber=calcualteTax(100,false);

let taxValue!:string|number|null;
eval("taxValue= calcualteTax(100,false)");
if(taxValue!== null)
{ let nonNullTaxValue:string|number =taxValue ; }


switch( typeof taxValue)
{
    case "number":
        console.log(`NUmber Value : ${taxValue.toFixed(2)}`);
        break;
        case "string":
            console.log(`String Value : ${taxValue.charAt(2)}`);
            break;
            default:

            if(taxValue ===null)
            {
                console.log("Value is null");
            }
            else{
                console.log(typeof taxValue);
                let value:never=taxValue;
                console.log(`Unexpected value : ${value}`);
            }

}


let newResult:unknown =calcualteTax(200,false);
let myNUmber:number=newResult as number;
//console.log(myNUmber.toFixed(2));


