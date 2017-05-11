import React from 'react';
import Iframe from 'react-iframe'

class scrapedNews extends React.Component{

    componentDidMount(){
        console.log(this.props.location.search.slice(8));
    }

    render(){
        const scrapedNewsUrl = this.props.location.search.slice(8) + "&output=embed";
        return (
            <div>
                <Iframe url={scrapedNewsUrl}
                width="1050px"
                height="1050px"
                display="initial"
                position="relative"
                allowFullScreen />
           </div>
        )
    }
}

export default scrapedNews;