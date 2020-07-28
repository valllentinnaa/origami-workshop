import React, {Component} from "react";
import styles from './main.module.css';
import Post from "../post";

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            origamis: []
        }
    }

    renderOrigamis() {
        const {origamis} = this.state;

        return origamis.map(origami => {
            return (
                <Post key={origami._id} {...origami}/>
            )
        });
    }

    getOrigamis = async () => {
        const promise = await fetch('http://localhost:9999/api/origami')
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
            <div className={styles.Main}>
                <h1 className={styles.title}>Origamis</h1>
                <div className={styles.Posts}>
                    {this.renderOrigamis()}
                </div>
            </div>
        );
    }
};

export default Main;