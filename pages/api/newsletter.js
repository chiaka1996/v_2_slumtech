import ConnectMongo from '../../utilis/MongoDb/connectDb';
import modelMessages from '../../Model/newsletter';

const AddNewsletter = async (req, res) => {
    try{
        await ConnectMongo()
        const {name, email} = req.body;

        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

        if(!name || !email){
            return res.status(400).json({
                message: "please fill all fields",
                status: false,
                code: 400
            })
        }

        if(name.length < 2){
            return res.status(400).json({
                message: "name should be a minnimum of 2 characters",
                status: false,
                code: 400
            })
        }

        if(!emailRegex.test(email)){
            return res.status(400).json({
                message: "invalid email",
                status: false,
                code: 400
            })
        }

        const saveMessage = new modelMessages({
            name,
            email,
        })

        const response = await saveMessage.save()

        if(response){
            return res.status(200).json({
                message: "message sent",
                status: true,
                code: 200
            })
        }
    }
    catch(error){
        res.status(500).json({
            message: error.message,
            status: false,
            code: 500
        })
    }
}

export default AddNewsletter;