import  {Schema, model, models} from 'mongoose';

const registerSchema = new Schema({
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
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    interest: {
        type: String,
        required: true
    },
    availability: {
        type: String,
        required: true
    },
    whyVolunteer: {
        type: String,
        required: true
    },   
},
{
    timestamps: true
}
);

const RegisterSchool = models.register ||  model('register', registerSchema);

export default RegisterSchool;
