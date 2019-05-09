module.exports = app => {

let authRoutes= require('./authRoutes')(app);
let bookCategories= require('./BookCategoriesRoutes')(app);
let payment= require('./PaymentRoutes')(app);
let address= require('./addressRoutes')(app);

}
