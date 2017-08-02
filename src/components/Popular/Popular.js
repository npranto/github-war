import React, {Component} from 'react';
import './Popular.css';
import LanguageNavigation from './../LanguageNavigation/LanguageNavigation.js';
import Repos from './../Repos/Repos.js';
import getPopularReposByLanguage from './../../utilities/getPopularReposByLanguage.js';

class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: [
                "All",
                "JavaScript",
                "Ruby",
                "Java",
                "CSS",
                "Python"
            ],
            currentLanguage: null,
            popularReposByLanguage: null
        };
        
    }
    
    componentWillMount() {
        this.setState({
            currentLanguage: this.state.languages[0],
            popularReposByLanguage: []
        })
    }

    componentDidMount() {
        this.updatePopularReposByLanguage(this.state.currentLanguage);   
    }

    updateCurrentLanguage(newLanguage) {
        this.setState({
            currentLanguage: newLanguage
        }, this.updatePopularReposByLanguage(newLanguage))
    }

    updatePopularReposByLanguage(language) {
        getPopularReposByLanguage(language)
            .then((response) => {
                this.setState({
                    popularReposByLanguage: response.data.items
                })
            })
    }
    
    render() {
        return (
            <div className="popular">
                <h1> Popular </h1>
                <LanguageNavigation
                    languages={this.state.languages} 
                    currentLanguage={this.state.currentLanguage} 
                    onLanguageChange={(language) => this.updateCurrentLanguage(language)} />
                <Repos 
                    currentLanguage={this.state.currentLanguage} 
                    popularReposByLanguage={this.state.popularReposByLanguage} />
            </div>
        )
    }
}

export default Popular;