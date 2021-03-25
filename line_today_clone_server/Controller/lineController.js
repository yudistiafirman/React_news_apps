const { default: axios } = require("axios")

module.exports={
    getNewfromLineApi:(req,res)=>{
            axios.get('https://today.line.me/id/portaljson').then((response)=>{

                res.status(200).send({
                  success:true,  
                data: response.data
                })
            }).catch((err)=>{
                res.status(400).send({
                    success:false,
                    message:'something went wrong'
                })
            })
    },
    getImage:(req,res)=>{
        axios.get('http://www.kompas.com/0hXBYyshuAB21kAC48_tV4Ol5WBAJXbBRuADZWczRuWVkeMkczXm9LWEhTCwoeY0AzCjFKDUAAHFwbNkNoDGBL/IMAGE ').then((response)=>{
            console.log(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
}