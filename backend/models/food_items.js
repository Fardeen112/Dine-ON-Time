const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  CategoryName: { type: String },
  name: { type: String },
  img: { type: String },
  options: {
    type: [
      {
        regular: String,
        medium: String,
        large: String,
        half: String,
        full: String,
      },
    ],
    required: true,
  },
  description: { type: String },
});

const Menu = mongoose.model("Menu", menuSchema);

// const item1 = new Menu({
//     CategoryName: "Biryani/Rice",
//     name: "Chicken Briyani",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65s4FVJPcAOmmITjN62U7fhbtkcBnwz6mcA&usqp=CAU",
//     options: [
//         {
//             half: "130",
//             full: "220"
//         }
//     ],
//     description: "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
// });
// item1.save();
// const item3 = new Menu({
//         CategoryName: "Pizza",
//         name: "Chicken Cheese Pizza",
//         img: "https://media.istockphoto.com/photos/double-topping-pizza-on-the-wooden-desk-isolated-picture-id1074109872?k=20&m=1074109872&s=612x612&w=0&h=JoYwwTfU_mMBykXpRB_DmgeecfotutOIO9pV5_JObpk=",
//         options: [
//             {
//                 regular: "120",
//                 medium: "230",
//                 large: "350"
//             }
//         ],
//         description: "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
//     }
//     );
// item3.save();

// const item2 = new Menu(
//     {
//         CategoryName: "Starter",
//         name: "chicken Tikka",
//         img: "https://www.kitchensanctuary.com/wp-content/uploads/2020/07/Chicken-Tikka-Skewers-square-FS-77.jpg",
//         options: [
//             {
//                 "half": "150",
//                 "full": "260"
//             }
//         ],
//         description: "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
//     }
// );
// item2.save();
module.exports = Menu;
