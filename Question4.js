import React, { useState } from 'react';

import { createRoot } from 'react-dom/client';

const Message = () => {

    const [isParagraphVisible, setIsParagraphVisible] = useState(false);

    const toggleParagraphVisibility = () => {

        setIsParagraphVisible((prevVisibility) => !prevVisibility);

    };

    return (

        <React.Fragment>

            <a href="#" onClick={toggleParagraphVisibility}>

                Want to buy a new car?

            </a>

            {isParagraphVisible && <p>Call +11 22 33 44 now!</p>}

        </React.Fragment>

    );

};

const rootElement = document.getElementById('root');

if (rootElement) {

    const root = createRoot(rootElement);

    root.render(<Message />);

}

