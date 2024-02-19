function getData(dataId,datanext){
    setTimeout( () => {
        console.log("data",dataId);
        if(datanext){
            datanext();
        }
        datanext();
    },4000);
}
getData(1,()=>{
    getData(3,()=>{
        getData();
    })
});
