import mongoose   from "mongoose";


const orederSchema = mongoose.Schema({
    user:{
	 type:mongoose.Schema.Types.ObjectId,
	 ref:'User',
	 required:true
    },
    orederItems:[{
	  name:{type:String,required:true},
	  qty:{type:Number,required:true},
	  image:{type:String,required:true},
	  product:{type:mongoose.Schema.Types.ObjectId,ref:'Product',required:true}
    }],
    shippingAddress:{
	    address:{type:String,required:true},
	    city:{type:String,required:true},
	    postCode:{type:String,required:true},
	    country:{type:String,required:true}
    },
    paymentMethode:{
	    type:String,
	    required:true
    },
    paymentResult:{
	id:{type:String},
	status:{type:String},
	update_time:{type:String},
	email_address:{type:String}
    },
    taxPrice:{
	type:Number,
	required:true,
	default:0.0
    },
    shippingPrice:{
	type:Number,
	required:true,
	default:0.0
    },
    totalPrice:{
	type:Number,
	required:true,
	default:0.0
    },
    isPaid:{
        type:Boolean,
	default:false,
	required:true
    },
    paidAt:{
	type:Date
    },
    isDelivered:{
	type:Boolean,
	required:true,
	default:false
    },
    deliverdAt:{
	type:Date
    },
},{
	    timestamp:true
    });

const Order = mongoose.model('order',orederSchema);
export default User;