import React, {Component} from 'react';
import './LanguageNavigations.css';

class LanguageNavigations extends Component {
    constructor(props) {
        super(props);
    } 
    
    onLanguageChange(language) {
        this.props.onLanguageChange(language);
    }
    
    render() {
        return (
            <div className="language-navigations">
                <ul className="list-of-languages">
                    {
                        this.props.languages.map((language, index, languages) => {
                            return (
                                <li 
                                    className={
                                        (this.props.currentLanguage === language) 
                                            ? "language current-language" 
                                                : "language"
                                    } key={index}> 
                                    <a 
                                        href="#" 
                                        onClick={() => this.onLanguageChange(language)}
                                        > 
                                        {language}  
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default LanguageNavigations;