const {Post, sequelize} = require('../models');

const postsController = {
    index: async (req, res) => {
        let posts = await Post.findAll();
        return res.json(posts);
    },
    create: async (req, res) => {
        const post = req.body;
        await Post.create(post);
        return res.json(post);
    },
    update: async (req, res) => {
        const postId = req.params;
        const postInfo = req.body;
        await Post.update(postInfo, { 
            where: {id: postId.id}
        });
        return res.json(postInfo);
    },
    delete: async (req, res) => {
        const post = req.params;
        await Post.destroy({ where: {
            id: post.id
        }});
        return res.send('Deletado com sucesso!');
    }
}

module.exports = postsController;