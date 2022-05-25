import React, { Component ,useState, setState } from 'react';

// const SimpleForm = () => {
//     const [content, setContent] = useState("");

//     const handleInput = (e) => {
//         setContent(e.target.value);
//         console.log(content);
//     }

//     return (
//         <div>
//             <label>이메일
//             <input type="text" value={content} onChange={e => handleInput(e)} />
//             </label>

//         </div>
//     );
// };


class SimpleForm extends Component {
    state = {
        content : ''
    };

    handleInput = (e)=>{
        this.setState({
            content : e.target.value
        });
        console.log(this.state.content);
    };

    render() {
        return (
            <div>
                <label>이메일
                <input type="text" value={this.state.content} onChange={e => this.handleInput(e)} />
                </label>
            </div>
        );
    }
}


export default SimpleForm;