import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCZSCRYEMgJCngIfyltmBVoej3k4tp5As0';

class App extends Component{
    constructor(props){
        super(props);
        this.state = { videos:[],
                        selectedVideo:null
                     };
        this.videoSearch('aaoge jab tum wo sajna');             
        
    }
    videoSearch(term){
        YTSearch({key: API_KEY, term: term},(videos)=>{
                this.setState({ videos:videos,
                                selectedVideo:videos[0] });
                // as the property and value have the same variable name, only one is written {video}is written
        });
    }

   render(){
       const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
       return(
        <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>
        </div>
       );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));