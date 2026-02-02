import Restorant from "../models/restorantModel.js";

//==== create resotrant function =====//

export const createRestorant = async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      food,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    } = req.body;

    if (!title) {
      return res.status(400).send({
        success: false,
        message: "Title and Address are required",
      });
    }

    const newRestorant = new Restorant({
      title,
      imageUrl,
      food,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    });

    //======= save restorant data =======//
    await newRestorant.save();

    //===========  send response =========================

    res.status(201).send({
      success: true,
      message: "Restorant created successfully",
      newRestorant,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in creating restorant API",
      error,
    });
  }
};

export const getAllRestorant = async (req,res) => {
    try{
            cosnt Rest

    }catch(error){
        res.status(500).send({
            success:false,
            message: "Error in get resotrent API",
            error,
        })
    }
}
