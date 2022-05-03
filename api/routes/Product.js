const router = require("express").Router();
const Product = require("../models/Product");
const upload = require("../middleware/uploadImages");

router.post("/", upload.single("imgProduct"), async (req, res) => {
  try {
    const newProduct = new Product({
      imgProduct: req?.file?.originalname,
      ...req.body,
    });
    res.status(200).json({ message: "post has been published" });
    await newProduct.save();
  } catch (error) {
    res.status(500).send("from here");
    console.log(error.message);
  }
});

router.get("/:cate", async (req, res) => {
  try {
    const products = await Product.find({ categoires: req.params.cate });
    products
      ? res.status(200).send(products)
      : res.status(404).json({ message: "this categoires not found" });
  } catch (error) {
    res.status(500).json({ message: "Something is wrong" });
    console.log(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).send("Post has been deleted");
  } catch (error) {
    res.status(500).json({ message: "Something is wrong" });
  }
});

module.exports = router;
