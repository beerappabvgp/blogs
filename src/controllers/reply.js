import Reply from "../models/replySchema.js";

export const createReply = async (req, res) => {
    try {
        const { content, commentId } = req.body;
        if (!content || !commentId) {
            return res.status(400).json({
                msg: "All the fields are required ... "
            });
        }
        if (typeof content !== "string" || typeof commentId !== "string") {
            return res.status(400).json({
                msg: "Please send me the correct data types in the body of the request ... "
            });
        }
        // create a new reply and store it in the DB
        const reply = await Reply.create({
            ...req.body, author: req.user
        });

        console.log("reply: ", reply);
        return res.status(201).json({
            msg: "Reply created successfully ....",
            reply: reply,
        });
    } catch (error) {
        console.log("error is", error);
        return res.status(500).json({
            msg: "Error while creating the reply ..."
        });
    }
}