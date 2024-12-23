import ConnectMongo from '../../utilis/MongoDb/connectDb';
import modelMessages from '../../Model/contact';
import {mailOptions, transporter} from "../../Config/nodemailer";

const AddMessage = async (req, res) => {
    try{
        await ConnectMongo()
        const {name, email, phone, message, subject} = req.body;

        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

        if(!name || !phone || !email || !message || !subject){
            return res.status(400).json({
                message: "please fill all fields",
                status: false,
                code: 400
            })
        }

        if(name < 2){
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

        await transporter.sendMail({
            ...mailOptions,
            subject: subject,
            html: `<!DOCTYPE html><html lang="en"><body><div class="">
            <h1>SLUMTECH WEBSITE CONTACT MESSAGE</h1>
            <p>Name:<span> ${name}</span></p>
            <p>Email:<span> ${email}</span></p>
            p>Phone:<span>${phone}</span></p>
             <p>lastname:<span>${subject}</span></p>
            <p>Message:<span>${message}</span></p>
            </div></body></html>`
        })

        return res.status(200).json({
            message: "message sent successfull",
            status: true,
            code: 200
        })

    }
    catch(error){
        res.status(500).json({
            message: error.message,
            status: false,
            code: 500
        })
    }
}

export default AddMessage;