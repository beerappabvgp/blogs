import { Comments } from "../models/commentSchema.js";

export const createComment = async (req, res) => {
    try {
        const { content, author, postId } = req.body;
        if (!content || !postId) {
            return res.status(400).json({
                msg: "All the fields are required ... "
            });
        }
        if (typeof content !== "string" || typeof postId !== "string") {
            return res.status(400).json({
                msg: "Please send me the correct data types in the body of the request .. "
            });
        }

        // create a new comment in the Db

        const comment = await Comments.create({...req.body, author: req.user });
        console.log("comment: ", comment);
        return res.status(201).json({
            msg: "Comment created successfully ... ",
            comment: comment
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error while creating the comment ... "
        });
    }
}