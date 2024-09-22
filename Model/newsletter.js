import  {Schema, model, models} from 'mongoose';

const NewsletterSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
},
{
    timestamps: true
}
);

const Newsletter = models.newsletter ||  model('newsletter', NewsletterSchema);

export default Newsletter;