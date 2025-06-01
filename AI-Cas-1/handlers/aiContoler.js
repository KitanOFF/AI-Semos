const { chatWithAi } = require("./aiSistem")

const  handleChatRequest = async (req,res) =>{
    try{
        const {prompt} = req.body

        if(!prompt){
            return req.status(400).json({
                success:false,
                error:'Prompt is required',
            })
        }
        const result = await chatWithAi(prompt)
        console.log(result)
        if(result.success){
            res.json({
                success:true,
                answer: result.answer,
            })

        }else{
            res.status(500).json({
                success:false,
                error:'Our ai not working '
            })
        }
    }catch{
        res.status(500).json({
            success:false,
            error:'internal server err'
        })
    }
}
module.exports = {
  handleChatRequest,
}