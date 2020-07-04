var log={
    info: function(info){
        console.log("Information: "+info);
    },
    warning:function(warning){
        console.log(warning);
    },
    error:function(error){
        console.log(error);
    }
};

module.exports=log