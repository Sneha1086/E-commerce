const db = require('./db')

//get all the products from db

const getProducts =()=>{
    return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statuscode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statuscode:404,
                    message:'No products found'
                }
            }
        }
    )
}

const addtowishlist=(id,title,price,image,description)=>{
    return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"Product already exist"
                }
            }
            else{
                const newProduct =new db.Wishlist({id,title,price,image,description})
                newProduct.save()
                return{
                    status:true,
                    statusCode:200,
                    message:"Product added to wishlist"
                }
            }
        }
    )
}

//to get wishlist

const getwishlist=()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your Wishlist is Empty'
                }
            }
        }
    )
}


deletewish=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result,
                    message:"product removed successfully"
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your Wishlist is Empty'
                }
            }
        }
    )
}

module.exports ={
    getProducts,
    addtowishlist,
    getwishlist,
    deletewish


}