// import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
import { Component } from 'react';
import $ from 'jquery';
import Header from './components/Header';
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Portofolio from "./components/Portofolio";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//     </div>
//   );
// }
class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      foo: "bar",
      resumeData: {}
    };
    // ReactGA.initialize("UA-110570651-1");
    // ReactGA.pageview(window.location.pathname);

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData(){
    $.ajax({
      url:"./resumeData.json",
      dataType: "json",
      cache:false,
      success: function(data) {
        this.setState({
          resumeData: data
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    })
  }

  // memnggil komponent
  componentDidMount(){
    this.getResumeData();
  }

  render(){
    return(
      <div className='App'>
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portofolio data={this.state.resumeData.portofolio}/>
        <Contact data={this.state.resumeData.main}/>
        {/* <Footer data={this.state.resumeData.main}/> */}
      </div>
    )
  }

}

export default App;
