import React, {useState} from 'react';
// import { SetState } from 'react';

function About(props) {
    
    const [class0,setClass0] = useState('inactive');
    const [class1,setClass1] = useState('inactive');
    const [class2,setClass2] = useState('inactive');
    const [class3,setClass3] = useState('inactive');
    
    const toggle0=()=>{
        if(class0==='inactive'){
            setClass0('active');
        }
        else{
            setClass0('inactive');
        }
    }
    const toggle1=()=>{
        if(class1==='inactive'){
            setClass1('active');
        }
        else{
            setClass1('inactive');
        }
    }
    const toggle2=()=>{
        if(class2==='inactive'){
            setClass2('active');
        }
        else{
            setClass2('inactive');
        }
    }
    const toggle3=()=>{
        if(class3==='inactive'){
            setClass3('active');
        }
        else{
            setClass3('inactive');
        }
    }
    
  return (
    <div>
        <div className={`about-heading acc-${props.mode}`}>about this website</div>
        {/* <div className="container"> */}
        <div className="accordion">
            <div className="accordion-head" onClick={toggle0} >
                why there's a need to use this website.
            </div>
            <div className={`accordion-body acc-${props.mode} ${class0}`}>
                We can use this website to manipulate , edit and analyse our text.<br/>
                You can bring random text to this website and can convert the case to upper case, lowercase, or capitalize.<br/>
                You can also remove extra spaces from your text and take a copy of the text with yourself and 
                use it in your Assignments, projects and other places.
            </div>
        </div>
        <div className="accordion">
            <div className="accordion-head" onClick={toggle1}>
                which technologies was used to make this website ?
            </div>
            <div className={`accordion-body acc-${props.mode} ${class1}`}>
                Many Front End Web Technologies are used to make this website.<br/>
                The basic language HTML(Hyper Text Markup Language) is used for the datas shown.<br/>
                CSS(Cascading Style Sheets) is also used for the styling part.<br/>
                But the most used Language is javascript which is implemented using It's framework React JS.
            </div>
        </div>
        <div className="accordion">
            <div className="accordion-head" onClick={toggle2}>
                was react router used in this website ?
            </div>
            <div className={`accordion-body acc-${props.mode} ${class2}`}>
                Yes, React Router Dom is used in this webpage.
            </div>
        </div>
        <div className="accordion">
            <div className="accordion-head" onClick={toggle3}>
                whats the benefit of using react in this website?
            </div>
            <div className={`accordion-body acc-${props.mode} ${class3}`}>
                Using of React-Router-Dom package of React makes this React based Web app a Single Page application.<br/>
                This makes loading of pages easier. 
            </div>
        </div>
    </div>
  )
}

export default About