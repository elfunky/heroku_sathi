class ProductsController{
    renderPage = [
        async(req, res)=>{
            res.render('auth/login');
        }
    ];

    create = [
        async(req, res)=>{
            return res.json({status: 1, msg: "Message", data: req.body})
        }
    ];

    update = [
        async(req, res)=>{
            return res.json({status: 1, msg: "Message", data: {email: "asdghsjddgjadgsjgdjsgdja"}})
        }
    ]
}

module.exports = new ProductsController();