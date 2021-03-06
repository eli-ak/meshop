import  mongoose from "mongoose";
const reviewsSchema = mongoose.Schema({
	name:{type:String,required:true},
	rating:{type:String,required:true},
	Comment:{type:String,required:true}
})
const productSchema = mongoose.Schema({
	user:{
	     type:mongoose.Schema.Types.ObjectId,
	     ref:'User',
	     required:true
	},
	name:{
           type:String,
	    required:true
	},
	image:{
	    type:String,
	    required:true
	},
	 brand:{
	     type:String,
	     required:true
	 },
	 category:{
	     type:String,
	     required:true
	 },
	  rating:{
	    type:Number,
	    required:true,
	    default:0
	  },
	  numReviews:{
	     type:Number,
	     required:true,
	     default:0
	  },
	  price:{
	     typr:Number,
	     required:true,
	     default:0
	  },
	  countInStock:{
	     type:Number,
	     required:true,
	     default:0
	  },
	  reviews:[reviewsSchema]

},{
	    timestamps:true
    });

const Product = mongoose.model('Product',productSchema);
export default Product;