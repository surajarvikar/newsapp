
import React,{useState,useEffect} from 'react';
import {Card , Button} from "antd";
import axios from "axios" ;
const {Meta} = Card ;

function App() {

  const [news , setNews] = useState([]);

  useEffect(()=>{
    const loadNews = async () =>{
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6d7ee95c10c340abb729309748e17a92")
      setNews(response.data.articles);
    };
    loadNews();
  },[]);

  console.log("news" , news);

  return (
    <div className="App">
      {news && news.map((item , index)=>{
        return(
          <Card
          key={index}
          hoverable
          style={{width : "50%" , height: "50%" ,  marginLeft : "300px" }}
          cover={<img src={item.urlToImage} alt="image" />}
          >

            <Meta title={item.title} description={item.content} />
            <a href={item.url} target="_blank" rel="noopener noreferrer" >
            <Button type="primary" style={{marginTop: "10px"}} > Read More </Button>
            </a>
          </Card>
        )
      }) }
    </div>
  );
}

export default App;
