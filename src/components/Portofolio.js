import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-awesome-reveal";

let id=0;
class Portofolio extends Component{
// render dulu datanya
    render(){
        if (!this.props.data) return null;

        const projects = this.props.data.projects.map(function(projects){
            // membuat variabel baru
            let propjectImage ="image/portfolio/" + projects.image;

            // karna bentuk let maka perlu key, id
            return(
                <div key={id++} className="columns portfolio-item">
                    <div className="item-warp">
                        {/* menambahkan dipackage json */}
                        <Zmage alt={projects.title} src={propjectImage}/>
                        <div style={{textAlign: "center"}}>{projects.title}</div>
                    </div>
                </div>
            );
        });
        return(
            <section id="portfolio">
            <Fade left duration={1000} distance="40px">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check out some of my works</h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {projects}
                        </div>
                    </div>
                </div>
            </Fade>
         </section>
        );
    }

}

export default Portofolio;