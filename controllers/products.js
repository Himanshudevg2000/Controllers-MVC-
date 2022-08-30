const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  };
  
exports.getContact = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'contact.html'))
  res.render('contact', {
      pageTitle: 'Contact',
      path: '/contact'
  });
};



exports.postContact = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'login_success.html'))
  res.redirect('/success')
}


exports.getSuccess = (req, res, next) => {
  res.render('success', {
    pageTitle: 'Success',
    path: '/success'
  });
};


exports.postSuccess = (req, res, next) => {
  res.redirect('/success')
};