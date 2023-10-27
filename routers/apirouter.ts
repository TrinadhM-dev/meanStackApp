import express from 'express';

const apiRouter:express.Router = express.Router();

//router configuration

apiRouter.get('/',(request:express.Request,response:express.Response)=>{
    response.status(200).json({
        text:'welcome from API trinadh'
    })
})

/*
Create a product

1.Create a product
URL : http://127.0.0.1:333/api/tri3/products
Method : POST
Fields : name,image,price,qty,info
Access: Public

*/

apiRouter.post('/products',(request:express.Request,response:express.Response)=>{
    response.status(200).json({
        text:'Product created'
    })
})






/*

2.update a product
http://127.0.0.1:333/api/tri3/products/:productId
URL : http://127.0.0.1:3333/api/tri3/products/:productId
Method : PUT
Fields : name,image,price,qty,info
Access: Public

 */

apiRouter.put('/products:productId',(request:express.Request,response:express.Response)=>{
    let {productId} = request.params;
    response.status(200).json({
        text:'Product created',
        productId:productId
    })
})


/*
3.Get all products
URL: http://127.0.0.1:333/api/tri3/products
Method: GET
Fields: no-fields
Access: Public

*/
apiRouter.get('/products',(request:express.Request,response:express.Response)=>{
    response.status(200).json({
        text:"Getting all products"
    })
})


/*
*/
apiRouter.get('/products/:productId',(request:express.Request,response:express.Response)=>{
    let productId = request.params.productId;
    response.status(200).json({
        productId:productId,
        text:"Getting a product by its id"
    })
})

/**
 *  URL:http://127.0.0.1.333/api/tri3/products/:productId
Method: DELETE
Fields:no-fields
MongoDB configuration
Database: big-basket
Tables: Products
Fields: _id,name,image,price,qty,info,created_at,updated_at.
 * 
 */
apiRouter.delete('/products/:productId',(request:express.Request,response:express.Response)=>{
    let productId = request.params.productId;
    response.status(200).json({
        productId:productId,
        text:"Getting a product by its id"
    })
})




export default apiRouter;