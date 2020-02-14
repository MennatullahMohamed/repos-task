import React, { Component } from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faStar } from '@fortawesome/free-solid-svg-icons'
export default class Repo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Hover: false
        };
    }
    async saveRepo(repo) {
        let myCollection = JSON.parse(localStorage.getItem('myCollection'));
        if (!myCollection.some(itm => itm.id === repo.id)) {
            myCollection.push(repo);
            localStorage.setItem('myCollection', JSON.stringify(myCollection))
        }
        else {
            alert("this repository already exists in your collection")
        }
    }
    render() {
        return (
            <div className="repo-container"
                onMouseOver={() => this.setState({ Hover: true })}
                onMouseLeave={() => this.setState({ Hover: false })}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                    <div style={{ width: '70%' }} >
                        <div style={{ cursor: 'pointer' }} onClick={() => window.open(this.props.repo.html_url, "_blank")}>
                            <text style={{ fontSize: 14, fontWeight: 'bold', color: this.state.Hover ? '#1690ae' : '#444444' }}>{this.props.repo.full_name}</text>
                            <FontAwesomeIcon icon={faExternalLinkAlt} size={12} style={{ marginLeft: 10, color: this.state.Hover ? '#1690ae' : '#a3a39f', visibility: this.state.Hover ? 'visible' : 'hidden' }} />
                        </div>
                        <br />
                        <text style={{ color: '#444444', fontSize: 14, }} >{this.props.repo.description}</text>
                    </div>
                    <div>
                        {this.state.Hover ? <button className="save-button" onClick={() => this.saveRepo(this.props.repo)}  >Save to my collection</button>
                            : <div style={{ display: 'flex', justifyContent: 'flex-end' }} >
                                <FontAwesomeIcon icon={faStar} size={12} style={{ color: '#f5a623' }} />
                                <text style={{ color: '#444444', fontSize: 14, fontWeight: 'bold' }} >2,500 stars</text>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
