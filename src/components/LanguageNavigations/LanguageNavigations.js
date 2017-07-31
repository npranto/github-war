import React from 'react';
import './LanguageNavigations.css';

const LanguageNavigations = (props) => {

    const onLanguageChange = (language) => {
        props.onLanguageChange(language);
    }
    
    return (
        <div className="language-navigations">
            <ul className="list-of-languages">
                {
                    props.languages.map((language, index, languages) => {
                        return (
                            <li
                                className={
                                    (props.currentLanguage === language)
                                        ? "language current-language"
                                            : "language"
                                } key={index}>
                                <a
                                    href="/"
                                    onClick={() => onLanguageChange(language)}
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

export default LanguageNavigations;