const Categories = require("../models/categories.model");
const formidable = require("formidable");

exports.create = (req, res) => {
  const categories = new Categories(req.body);
  categories.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.json(result);
  });
};

exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "name";

  Categories.find()
    .sort([[sortBy, order]])
    .exec((err, categories) => {
      if (err) {
        return res.status(400).json({
          error: "Categorias no encontrados.",
        });
      }
      res.json(categories);
    });
};

exports.listname = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "name";

  Categories.find()
    .sort([[sortBy, order]])
    .exec((err, categories) => {
      if (err) {
        return res.status(400).json({
          error: "Categorias no encontrados.",
        });
      }
      var ans = [];
      for(var i = 0; i < categories.length; i++){
        ans[i] = categories[i].category +"-"+ categories[i].subcategory;
      }
      // console.log(ans);
      res.json(ans);
    });
};

exports.getlist = (req, res) => {
    let order = req.query.order ? req.query.order : "asc";
    let sortBy = req.query.sortBy ? req.query.sortBy : "name";
  
    Categories.find()
      .sort([[sortBy, order]])
      .exec((err, categories) => {
        if (err) {
          return res.status(400).json({
            error: "Categorias no encontrados.",
          });
        }
        var cat = {};
        var rep = [];
        var ans = categories.filter(function (e) { 
          if(cat[e.category]){
            return false
          }else{
            (cat[e.category] = true)
            rep.push(e.category);
          }
        })
        res.json(rep);
        
      });
  };


exports.getSubcat_bycat = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "name";

  Categories.find()
    .sort([[sortBy, order]])
    .exec((err, categories) => {
      if (err) {
        return res.status(400).json({
          error: "Categorias no encontrados.",
        });
      }
      let key = req.body.value;
      var ans    = []
      var temp = []
      for(var i=0; i<categories.length; i++){
          temp = ans.filter(resp => resp["cat"] == categories[i]["category"])
          if(temp.length>0){
            ans[ans.indexOf(temp[0])]["subcat"].push(categories[i]["subcategory"])
          }else{
            ans.push({"cat" : categories[i]["category"] , "subcat" : [categories[i]["subcategory"]]})
          }
      }
      let refinate = ans.filter(resp => resp["cat"] == key)
      console.log(refinate[0]["subcat"])
      res.json(refinate[0]["subcat"])
    });
};


// exports.getlist = (req, res) => {
//   let order = req.query.order ? req.query.order : "asc";
//   let sortBy = req.query.sortBy ? req.query.sortBy : "name";

//   Categories.find()
//     .sort([[sortBy, order]])
//     .exec((err, categories) => {
//       if (err) {
//         return res.status(400).json({
//           error: "Categorias no encontrados.",
//         });
//       }
//       let ans = {};
//       categories.forEach((x) => {
//         if (!ans.hasOwnProperty(x.category)) {
//           ans[x.category] = [];
//         }
//         ans[x.category].push(x.subcategory);
//       });
      
//       console.log(ans);
//       res.json(ans);
//     });
// };
