const pool = require("../utils/mysql");
async function scrapNews(req, res, next){
  const connection = await pool.getConnection();
    try{
        const {news_title, image_Url, text_url, user_id} = req.body;
        const [results] = await connection.query("INSERT INTO NEWS.SCRAP (imageUrl, textUrl, newsTitle, user_id) VALUES (?,?,?,?)",[image_Url,text_url,news_title,user_id])
        res.status(200).json({ message: "성공"})
    }catch(err){
        next(err);
        console.log(err)
    }finally{ 
        connection.release();
 
    }
}    


module.exports = {
    scrapNews
  };