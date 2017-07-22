import React, {Component} from 'react';
import './Popular.css';
import LanguageNavigations from './../LanguageNavigations/LanguageNavigations.js';

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
            currentLanguage: null
        };
        
    }
    
    componentWillMount() {
        this.setState({
            currentLanguage: this.state.languages[0]
        })
    }
    
    updateCurrentLangauge(newLanguage) {
        console.log(newLanguage);
        this.setState({
            currentLanguage: newLanguage
        })    
    }
    
    render() {
        return (
            <div className="popular">
                <h1> Popular </h1>
                <LanguageNavigations languages={this.state.languages} currentLanguage={this.state.currentLanguage} onLanguageChange={(language) => this.updateCurrentLangauge(language)} />
            </div>
        )
    }
}

export default Popular;