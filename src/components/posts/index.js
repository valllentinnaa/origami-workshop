import React, {Component} from "react";
import styles from './posts.module.css';
import Post from "../post";


class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            origamis: []
        }
    }

    renderOrigamis() {
        const {origamis} = this.state;

        return origamis.map((origami, i) => {
            return (
                <Post key={origami._id} {...origami} index={i}/>
            )
        });
    }

    getOrigamis = async () => {
        const  {length} = this.props;
        const promise = await fetch(`http://localhost:9999/api/origami?length=${length}`);
        const origamis = await promise.json();

        this.setState({
            origamis
        })
    };

    componentDidMount() {
        this.getOrigamis();
    }

    render() {
        return (
            <div className={styles.Posts}>
                {this.renderOrigamis()}
            </div>
        );
    }
};

export default Posts;