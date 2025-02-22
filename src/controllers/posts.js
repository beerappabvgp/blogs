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

// http://localhost:5000/posts/all?content=true&author=true&isInclusive=true
        // get all the posts with the content and author
        export const getAllPosts = async (req, res) => {
    try {
        // const posts = await Post.find({}).select({
        //     author: 0,
        //     content: 0,
        // });
        
        // we need to extract content and author from query params

        const content = req.query.content;
        const author = req.query.author;
        const isInclusive = req.query.isInclusive;

        console.log(content, author, isInclusive);

        let projections = {};

        console.log(isInclusive === "false");

        if (isInclusive === "true" && content) {
            projections.content = 1;
        } else if (isInclusive === "false" && content) {
            console.log("content is false");
            projections.content = 0;
        }
        if (isInclusive === "true" && author) {
            projections.author = 1;
        } else if (isInclusive == "false" && author) {
            projections.author = 0;
        }
        console.log(projections);
        const posts = await Post.find({}, projections);
        return res.status(200).json({
            msg: "All the posts fetched successfully ....",
            posts: posts,
        });
    } catch (error) {
        console.log("error: ", error);
        return res.status(500).json({
            msg: "Error while fetching all the posts ....",
        });
    }
}


// 200 - success
// 201 - created
// 400 - client side errors
// 500 - server side errors


// if (isInclusive === "true"):
//     projections.content = 1;
//     projections.author = 1;
// else:
//     projections.content = 0;
//     projections.author = 0;

