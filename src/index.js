const csvFilePath='./src/assets/ExtratoModificado2.csv'
const csv=require('csvtojson');
const dividendFilter = 'DIVIDENDOS';
const ffiProventFilter = 'RENDIMENTO';
var itub4 = mglu3 = taee3 = flry3 = vale3 = bcff = hglg = arri = vino = xpml = 0
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    const rows = jsonObj.map((row)=>{
        if(row['Extrato Conta Corrente ;;;'].includes(dividendFilter) || row['Extrato Conta Corrente ;;;'].includes(ffiProventFilter))
        {
            const stringComOValor= row[Object.keys(row)[0]]
            const arraySplitado = stringComOValor.split(';')
            //console.log(arraySplitado)
            const tickets = arraySplitado[1].split(' ').pop().replace(/[^\w\s]/gi, '');
            const valores=arraySplitado[2].replace(/[^0-9\.]/g,'');
            const finalObject = {
                ticket:tickets,
                value: valores
            };
            if(finalObject.ticket=='TAEE3'){
                taee3 += Number(finalObject.value)
            }
            if(finalObject.ticket=='ITUB4'){
                itub4 += Number(finalObject.value)
            } 
            if(finalObject.ticket=='MGLU3'){
                mglu3 += Number(finalObject.value)
            } 
            if(finalObject.ticket=='VALE3'){
                vale3 += Number(finalObject.value)
            } 
            if(finalObject.ticket=='FLRY3'){
                flry3 += Number(finalObject.value)
            } 
            if(finalObject.ticket=='BCFF11'){
                bcff += Number(finalObject.value)
            } 
            if(finalObject.ticket=='ARRI11'){
                arri += Number(finalObject.value)
            } 
            if(finalObject.ticket=='XPML11'){
                xpml += Number(finalObject.value)
            } 
            if(finalObject.ticket=='HGLG11'){
                hglg += Number(finalObject.value)
            } 
            if(finalObject.ticket=='VINO11'){
                vino += Number(finalObject.value)
            } 
            console.log(finalObject);
        }
        return row;
    })
    console.log('Taesa: '+ taee3) 
    console.log('Itau: '+ itub4) 
    console.log('MagazineLuiza: '+ mglu3) 
    console.log('Vale: '+ vale3) 
    console.log('Fleury: '+ flry3) 
    console.log('VINO: '+ vino) 
    console.log('HGLG: '+ hglg) 
    console.log('ARRI: '+ arri) 
    console.log('XPML: '+ xpml) 
    console.log('BCFF: '+ bcff) 

})

