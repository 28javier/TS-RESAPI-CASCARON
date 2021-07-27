import mongoose from 'mongoose';


export const dbConnection = async () => {
    try {
        const URI:any = process.env.DB_URI;
       await mongoose.connect(URI, {
            useNewUrlParser:true,
            useFindAndModify:false,
            useUnifiedTopology:true,
            useCreateIndex:true
        });
        console.log('Connect on Exelent ------ Online OK');
    } catch (error) {
        console.log(error);
        throw new Error("Error al inicializar la BDD");
    }

} 



// export default dbConnection;


