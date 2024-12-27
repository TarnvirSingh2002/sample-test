import express from "express";
import { userSchema } from "../Controller/scheme.js";
const router = express.Router();
router.post('/sith', async (req, res) => {
    try {
        const { bookId, bookTitle, name, contact, borrowDate } = req.body;
        if (!bookId || !bookTitle || !name || !contact || !borrowDate){
            return res.status(400).send("Fill the full form!");
        }
        await userSchema.create({ bookId, bookTitle, name, contact, borrowDate});
        res.status(200).send("Successfully registered");

    } catch (error) {
        console.log(error)
        res.status(500).send("An error occurred while processing your request.");
    }
});

router.post('/moreinfo', async (req, res) => {
    try {
        const { bookId, returnDate, billAmount } = req.body;
        if (!bookId || !returnDate || billAmount) {
            res.send("Fill the full form!");
        }
        const user = await userSchema.findOneAndUpdate({ bookId },
            { returnDate, billAmount },
            { new: true })
        if (!user) {
            res.send("user not found");
        }
        res.send("Succcesfuuly registered");

    } catch (error) {
        console.log(error)
        res.send("unsuccessful");
    }
});

router.get('/getall',async(req, res)=>{
    try {
        const indi=await userSchema.find();
        res.send(indi);

    } catch (error) {
        console.log(error)
        res.send("unsuccessful");
    }

});
export default router;