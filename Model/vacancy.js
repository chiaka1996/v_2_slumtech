import  {Schema, model, models} from 'mongoose';

const cvSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    position: {
        type: String,
        required: true
    },

    yearsOfExperience: {
        type: String,
        required: true
    },

    cv: {
        type: String,
        required: true
    },

    coverLetter: {
        type: String,
        required: true
    },

    cloudinaryIdCV: {
        type: String,
        required: true
    }
},
{
    timestamps: true
}
);

const AddCV = models.cv ||  model('cv', cvSchema);

export default AddCV;