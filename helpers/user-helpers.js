var db = require('../cofig/connection')
var collection = require('../cofig/collection')

const bcrypt = require('bcrypt')
const { ObjectId } = require('mongodb')

var objectId = require('mongodb').ObjectId

module.exports = {


    doSignup: (userData) => {
        return new Promise(async (resolve, reject) => {
            userData.Password = await bcrypt.hash(userData.Password, 10)
            db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data) => {
                userData._id = data.insertedId
                resolve(userData)
            })
        })
    },

    doLogin: (userData) => {
        return new Promise(async (resolve, reject) => {
            let loginStatus = false
            let response = {}
            let user = await db.get().collection(collection.USER_COLLECTION).findOne({ Email: userData.Email })
            if (user) {
                bcrypt.compare(userData.Password, user.Password).then((status) => {
                    if (status) {
                        console.log("login Success");
                        response.user = user
                        response.status = true
                        resolve(response)
                    } else {
                        console.log("login Unsuccessfull");
                        resolve({ status: false })
                    }
                })
            } else {
                console.log('login failed');
                resolve({ status: false })
            }
        })
    },

    addToCart: (user , time) => {
        return new Promise(async (resolve, reject) => {
            let userCart = await db.get().collection(collection.CART_COLLECTION).findOne({ user: new objectId(user._id) })
            if (userCart) {

                db.get().collection(collection.CART_COLLECTION)
                    .updateOne({ user: new objectId(user._id) },
                        {
                            $push: { products: time }
                        }).then((response) => {
                            resolve()
                        })

            } else {
                let cartObject = {
                    user: new objectId(user._id),
                    Name : user.Name,
                    products: [time]
                }
                db.get().collection(collection.CART_COLLECTION).insertOne(cartObject).then((response) => {
                    resolve()
                })
            }
        })
    },

    getCartProducts: () => {
        return new Promise(async (resolve, reject) => {
            let cartItems = await db.get().collection(collection.CART_COLLECTION).find().toArray()
            //console.log(cartItems);
            resolve(cartItems)
        })
    },
}