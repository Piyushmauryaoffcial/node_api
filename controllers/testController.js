export const testController = (req,res) =>{

  try{
    res.status(200).send({
      message: "This is test API"
    });
  }catch(error){
    res.status(200).send({
      message: "Error in test API",
      error: error.message
    });
  }
}

