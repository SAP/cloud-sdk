import React, { useReducer } from 'react';
import DocsRatingContext from '../sap/common-utils/DocsRating/DocsRatingContext';

const ratedSitesReducer = (ratedSites, newlyRatedSite) => {
    return [...ratedSites, newlyRatedSite];
}

function Root({children}) {

    const [ratedSites, addRatedSite] = useReducer(ratedSitesReducer, []);

    return (
        <>
            <DocsRatingContext.Provider value={{ratedSites, addRatedSite}}>
                {children}
            </DocsRatingContext.Provider>
        </>
    );
}

export default Root;