import React, { Component } from 'react';
import Layout from '../components/layout';
import  jsPDF from 'jspdf'
import html2canvas from 'html2canvas';

class Index extends Component {
    state = { 
        visible: "false"
     }
   
     getHide =() =>{
       if (this.state.visible == "true"){
           this.setState({visible : "false" })  
       }else{
        this.setState({visible : "true" }) 
       }
     }

    printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF("portrait", "mm", "a4");
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("download.pdf");
      })
    ;
  }

    render() { 
        return (  
            <Layout>
                <div id="divToPrint"> 
                    <h1 className="fa fa-trash" style={{visibility: this.state.visible == "true" ? 'visible' : 'hidden' }}>Hello Next.Jsx</h1>
                    <button onClick={this.getHide}>Hide Element</button>
                    <button onClick={this.printDocument}>Save Element</button>
                </div>
            </Layout>
        );
    }
}
 
export default Index;
//https://stackoverflow.com/questions/44989119/generating-a-pdf-file-from-react-components
// printDocument() {
//     const input = document.getElementById('divToPrint');
//     html2canvas(input)
//       .then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF();
//         pdf.addImage(imgData, 'JPEG', 0, 0);
//         // pdf.output('dataurlnewwindow');
//         pdf.save("download.pdf");
//       })
//     ;
//   }