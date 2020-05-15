import React from 'react';
import { Grid, Container, makeStyles } from '@material-ui/core';
import Post from '../../components/Post/Post';
import { posts } from '../../store';


const useStyles = makeStyles({
    container: {
        marginBottom: '2.5em'
    },
    '@media (max-width: 768px)': {
        container: {
            marginBottom: 0
        }
    }
});

const PostList = ({ currentCategory, amount }) => {

    const classes = useStyles();

    const filterPosts = post => {
        return currentCategory === 'all' || currentCategory === post.category
    }

    return (
        <Container className={classes.container}>
            <Grid container justify="center" spacing={4}>
                {posts.filter(filterPosts).map(post => (
                    <Post key={post.id} post={post} />
                )).slice(0, amount)}
            </Grid>
        </Container>
    );
}

export default PostList;