import Post from "../models/postsSchema.js";

export const createPost = async (req, res) => {
    try {
        // get all the details from the request body 
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({
                msg: "All the fields are required .. "
            });
        }

        if (typeof title !== "string" || typeof content !== "string") {
            return res.status(400).json({
                msg: "Please send the correct data types in the request ... "
            });
        }

        // Create a new post in the DB
        const newpost = await Post.create({ ...req.body, author: req.user });
        console.log("post: ", newpost);
        return res.status(201).json({
            msg: "Post created successfully ...",
            post: newpost
        });
    
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error while creating the post .... "
        });
    }
}


// 200 - success
// 201 - created
// 400 - client side errors
// 500 - server side errors
