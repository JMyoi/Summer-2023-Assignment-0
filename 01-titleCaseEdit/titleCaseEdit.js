function titleCaseEdit(title) {
    let Arr = title.split(' ');
    let FinalString = undefined;
    for(let i = 0; i<Arr.length; i++){
        let str = Arr.at(i).at(0).toUpperCase() + Arr[i].substring(1);
        if(FinalString!=undefined){
         FinalString = FinalString + ' '+ str;
        }
        else{
            FinalString =str;
        }

    }
    return FinalString;
}



// Do not edit this line;
module.exports = titleCaseEdit;