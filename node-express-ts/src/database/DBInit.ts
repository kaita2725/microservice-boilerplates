import connectDB from '../config/dbConn'
import { Placeholder } from './models/placeholder'

const dbInit = async () => {
    try {
        await connectDB.authenticate()
        const placeholderAssoc = {
            //     "OTHERMODEL1": MODELNAME1,
            //     "OTHERMODEL2": MODELNAME2,
        }
        Placeholder.associate(placeholderAssoc)


        //console.log('Connection has been established successfully.');
        connectDB.sync({ alter: process.env.NODE_ENV !== 'production' })
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
}
//     connectDB.getQueryInterface().showAllSchemas().then((tableObj) => {
//     console.log('// Tables in database','==========================');
//     console.log(tableObj);

export default dbInit