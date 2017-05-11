import React from 'react';
import Iframe from 'react-iframe'

class scrapedNews extends React.Component{
    render(){
        const scrapedNewsUrl = this.props.location.search.slice(8);
        return (
            <div>                
                <Iframe url={scrapedNewsUrl}
                width="100%"
                height="1050px"
                display="initial"
                position="relative"
                allowFullScreen />
           </div>
        )
    }
}

export default scrapedNews;