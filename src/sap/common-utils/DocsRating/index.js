import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import React, { useState } from 'react';
import './docRating.css';
<script src="https://sap.github.io/cloud-sdk/js/swa.js"></script>

const DocsRating = ({ label }) => {

    const [haveVoted, setHaveVoted] = useState(false);
    const giveFeedback = value => {

        if (swa && swa.hasOwnProperty("trackCustomEvent")) {
            swa.trackCustomEvent("collectFeedback", value);
        }
        setHaveVoted(true);
    };

    return (
        <div className="docsRating">
            {haveVoted ? (
                'Thanks for giving feedback!'
            ) : (
                <>
                    Is this page useful?
                    <svg
                        className="i_negative"
                        alt="Dislike"
                        onClick={() => giveFeedback(0)}
                        xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M 10.15625 6 C 8.746094 6 7.515625 6.996094 7.21875 8.375 L 5.0625 18.375 C 4.667969 20.222656 6.113281 22 8 22 L 13.75 22 L 13.5625 22.75 C 13.359375 22.90625 13.230469 22.972656 12.9375 23.375 C 12.46875 24.015625 12 25.007813 12 26.34375 C 12 27.769531 13.289063 29 14.90625 29 L 15.3125 29 L 15.625 28.71875 L 22.40625 22 L 27 22 L 27 6 Z M 10.15625 8 L 21 8 L 21 20.59375 L 14.59375 26.90625 C 14.171875 26.824219 14 26.652344 14 26.34375 C 14 25.441406 14.273438 24.882813 14.53125 24.53125 C 14.789063 24.179688 14.96875 24.09375 14.96875 24.09375 L 15.3125 23.90625 L 15.4375 23.5 L 16.03125 21.25 L 16.34375 20 L 8 20 C 7.339844 20 6.894531 19.425781 7.03125 18.78125 L 9.15625 8.78125 C 9.257813 8.3125 9.679688 8 10.15625 8 Z M 23 8 L 25 8 L 25 20 L 23 20 Z"/>
                    </svg>
                    <svg
                        className="i_positive"
                        alt="Like"
                        onClick={() => giveFeedback(1)}
                        xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M 16.6875 3 L 16.375 3.28125 L 9.59375 10 L 5 10 L 5 26 L 21.84375 26 C 23.253906 26 24.484375 25.003906 24.78125 23.625 L 26.9375 13.625 C 27.332031 11.777344 25.886719 10 24 10 L 18.25 10 L 18.4375 9.25 C 18.640625 9.09375 18.769531 9.027344 19.0625 8.625 C 19.53125 7.984375 20 6.992188 20 5.65625 C 20 4.230469 18.710938 3 17.09375 3 Z M 17.40625 5.09375 C 17.828125 5.175781 18 5.347656 18 5.65625 C 18 6.558594 17.726563 7.117188 17.46875 7.46875 C 17.210938 7.820313 17.03125 7.90625 17.03125 7.90625 L 16.6875 8.09375 L 16.5625 8.5 L 15.96875 10.75 L 15.65625 12 L 24 12 C 24.660156 12 25.105469 12.574219 24.96875 13.21875 L 22.84375 23.21875 C 22.742188 23.6875 22.320313 24 21.84375 24 L 11 24 L 11 11.40625 Z M 7 12 L 9 12 L 9 24 L 7 24 Z"/>
                    </svg>
                </>
            )}
        </div>
    );
};

export default DocsRating;
