     apex.server.process ('MY_PROCESS', {
             x01: '123'
            ,x02: '456'
            , pageItems: "#P3_PARAM"     
            },{
                success: function( pData ){
                    /*****************************************/
                     apex.message.showPageSuccess(pData.trim());
                    /*****************************************/
                }
                ,error: function( pData ) {    

                    /*****************************************/
                        apex.message.clearErrors();
                        apex.message.showErrors([
                        {
                            type: apex.message.TYPE.ERROR,
                            location: ["page", "inline"],
                            pageItem: "",
                            message: pData.trim(),
                            unsafe: false
                        }
                        ]);
                    /*****************************************/
                }
                ,dataType: "text"
            }); 