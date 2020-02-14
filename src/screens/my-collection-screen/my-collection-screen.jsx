import React, { Component } from 'react'
import MyCollection from "../../components/repo-container/MyCollection";
import { box } from "../../assets/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
class MyCollectionScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MyCollection: []
        };
    }
    componentDidMount() {
        const MyCollection = JSON.parse(localStorage.getItem('myCollection'));
        this.setState({ MyCollection })
    }
    render() {
        return (
            <div style={{ width: '60%', margin: 'auto', textAlign: 'left' }} >
                <Link to="/home" ><div style={{ marginTop: '5%', marginBottom: '5%' }} >
                    <FontAwesomeIcon icon={faLongArrowAltLeft} size={20} style={{ color: '#a3a39f', marginRight: 10 }} />
                    <text style={{ fontSize: 16, fontWeight: 'bold', color: '#a3a39f' }} >Back to Home</text>
                </div>
                </Link>
                <h2 style={{ color: '#444444' }} >My Collection</h2>
                <text style={{ color: '#444444', fontSize: 14 }} >your collection contains all the repositories you saved</text>
                <hr />
                {this.state.MyCollection.length > 0 ?
                    this.state.MyCollection.map((repo) => {
                        return <MyCollection key={repo.id} repo={repo} />
                    })
                    :
                    <text style={{ color: '#444444', fontSize: 14, margin: 'auto' }} >You didn't add repositories to your collection yet.</text>
                }
            </div>
        )
    }
}
export default MyCollectionScreen
