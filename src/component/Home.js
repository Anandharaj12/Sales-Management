import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import simg from'../component/sales.webp'
import vimg from'../component/sale1.png'

const App = ()=> {
  return (
    <div className="App">
      <h1>Welcome to our sales management system.</h1>
     
     <img className='as'src={simg}/>
      <header className="App-header">
        
        
      
      <br></br>
      </header>
      <section id="features" className="features">
        <div className="container">
         
          <div className="feature-item">
            <i className="fas fa-chart-line"></i>
            <p>With features tailored to meet the diverse needs of businesses across industries, our Sales Management System offers seamless integration with existing workflows and applications, ensuring a smooth transition and minimal disruption to operations. Whether you're a small startup or a multinational corporation, our scalable solution adapts to your evolving requirements, enabling you to stay ahead in today's competitive market landscape.</p>
          
           
      <h1>About Us</h1>

            <img className='ds'src={vimg}/>

            <p>Welcome to our Sales Management System! At our company, we are committed to offering top-notch solutions for streamlining your sales processes. With a team comprising seasoned professionals in sales management, software development, and customer support, we're well-equipped to tackle the challenges businesses encounter in managing their sales operations. </p>
           
            
          </div>
        </div>
      </section>

      <div className="Contact">
      <h1>Contact Us</h1>
      <p>For inquiries, please contact us at:</p>
      <p>Email: salesinfo@example.com</p>
      <p>Phone: +12345448490</p>
    </div>
      
    </div>
  
  );
}

export default App;
