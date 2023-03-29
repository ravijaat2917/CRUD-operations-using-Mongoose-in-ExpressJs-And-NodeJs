import StudentModel from "../models/student.js";

class studentController {
  static createDoc = async (req, res) => {
    try {
      const formData = req.body;
      const FN = this.nameFormatter(formData.name);
      // console.log(FN);
      const doc = new StudentModel({
        name: FN,
        age: formData.age,
        fees: formData.fees,
      });
      //Saving Document
      const result = await doc.save();
      res.redirect("/student");
    } catch (err) {
      console.log(err);
    }
  };

  static getAllDoc = async (req, res) => {
    try {
      const result = await StudentModel.find();
      // console.log(result);
      res.render("index", { data: result });
    } catch (err) {
      console.log(err);
    }
  };

  static editDoc = async (req, res) => {
    const ID = req.params.id;
    // console.log(ID);
    const result = await StudentModel.findById(ID);
    // console.log(result);
    res.render("edit", { data: result });
  };

  static updateDocByID = async (req, res) => {
    // console.log(req.params.id);
    // console.log(req.body);
    try {
      const ID = req.params.id;
      const formData = req.body;
      const result = await StudentModel.findByIdAndUpdate(ID, formData);
      res.redirect("/student");
    } catch (err) {
      console.log(err);
    }
  };

  static deleteDocByID = async (req, res) => {
    // console.log(req.params.id)
    try{
        const ID = req.params.id ;
        const result = await StudentModel.findByIdAndDelete(ID);
        res.redirect("/student");
    }catch(err){
        console.log(err);
    }
  };

  static backToHomePage = (req, res) => {
    res.redirect("/student");
  };

  static nameFormatter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
}

export default studentController;
