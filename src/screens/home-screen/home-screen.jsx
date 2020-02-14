import React, { Component } from 'react'
import Repo from "../../components/repo-container/Repo";
import { box } from "../../assets/index"
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AllRepos: [],
            matchString: '',
            matchedElements: []
        };
    }
    componentDidMount() {
        fetch('https://api.github.com/repositories')
            .then(res => {
                if (res.ok) {
                    res.json()
                        .then(json => this.setState({ AllRepos: json }))
                }
            })
    }
    matcharray(text) {
        let array = this.state.AllRepos
        let filtered = []
        if (text != '') {
            let regexp = new RegExp(text, 'i')
            for (let i = 0; i < array.length; i++) {
                if (regexp.test(array[i].full_name)) {
                    filtered.push(array[i])
                }
            }
        }
        this.setState({
            matchString: text,
            matchedElements: filtered
        })
    }
    render() {
        return (
            <div style={{ width: '60%', margin: 'auto', textAlign: 'left' }} >
                <Link to="/my-collection" ><div className="my-collection">
                    <text>My Collection</text>
                    <img src={box} style={{ width: 20, height: 20 }} />
                </div>
                </Link>
                <div className="search-container">
                    <FontAwesomeIcon icon={faSearch} size={20} style={{ color: '#a3a39f', position: 'absolute', top: 16, left: 10 }} />
                    <input placeholder="Search Repositories…"
                        onFocus={(e) => e.target.placeholder = ""}
                        onChange={(e) => this.matcharray(e.target.value)}
                        onBlur={(e) => e.target.placeholder = "Search Repositories…"}
                        className="search-input" />
                </div>
                {this.state.AllRepos.length > 0 ?
                    this.state.matchString == '' ?
                        this.state.AllRepos.map((repo) => {
                            return <Repo key={repo.id} repo={repo} />
                        }) :
                        this.state.matchedElements.map((repo) => {
                            return <Repo key={repo.id} repo={repo} />
                        })
                    : undefined}
            </div>
        )
    }
}
export default HomeScreen
