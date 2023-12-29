import { Schema, model } from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const cartSchema = new Schema({
		products: {
			type: [
					{
						id_prod: { 
							type: Schema.Types.ObjectId, 
							ref: 'products',
							required: true,
						},
						quantity: {
							type: Number,
							required: true,
						},
					},
				],
				default: function () {
					return [];
				},
			}		
		});
		//populate para que traiga el objeto completo
		cartSchema.pre('find', function () { // es un solo carrito
				this.populate('products.id_prod')		
		});

		cartSchema.plugin(paginate);

const cartModel = model('carts', cartSchema);
export default cartModel;