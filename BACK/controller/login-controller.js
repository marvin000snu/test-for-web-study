const SHA256 = require("crypto-js/sha256");
var crypto = require("crypto");

const pool = require("../utils/mysql");
async function signUp(req, res, next) {
  const connection = await pool.getConnection();
  try {
    const { user_email, user_password, user_name } = req.body;
    const [
      results,
    ] = await connection.query("SELECT * FROM NEWS.USER WHERE email=?", [
      user_email,
    ]);
    if (results.length > 0) {
      res.status(400).json({ message: "중복된이메일" });
    }
    var hashedPassWord = crypto.createHash("sha256");
    console.log(user_password)
    hashedPassWord.update(user_password);
    var hashedPassWordString = hashedPassWord.digest("hex");
    // const hashedPassWordString = Base64.stringify(hmacSHA512(path + hashDigest, privateKey));
    console.log(hashedPassWordString);
    await connection.query(
      "INSERT INTO NEWS.USER (`password`, `username`, `email`) VALUES (?,?,?) ",
      [hashedPassWordString, user_name, user_email]
    );
    res.status(200).json({ message: "성공" });
  } catch (err) {
    next(err);
  } finally {
    connection.release();
  }
}

async function logIn(req, res, next) {
    const connection = await pool.getConnection(); 
    try{
        const { user_email, user_password} = req.body
        const [results] = await connection.query("SELECT * FROM NEWS.USER WHERE email=?",[user_email])
        if(results.length===0){ res.status(400).json({ message:"아이디가 존재하지 않습니다."})}
        var hashedPassWord = crypto.createHash("sha256");
        hashedPassWord.update(user_password);
        var hashedPassWordString = hashedPassWord.digest("hex");
        console.log(hashedPassWordString)
        if(hashedPassWordString===results[0].password){
            res.status(200).json({message: "성공"})
        }else{
            res.status(400).json({message: "비밀번호가 일치하지 않습니다."})
        }
    }catch(err){
        console.log(err)
        next(err)
    }finally{
        connection.release() 
    }
}
module.exports = {
  signUp,
  logIn
};
