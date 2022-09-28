import React from 'react';

class Name extends React.Component {
render() {
    const Arr = ['Ricardo', 'Gabriel', 'Antônio', 'da', 'Silva'];
    const arrMap = Arr.map((name) => <li>{name}</li>)
    return (
        <div>
            <ul>{ arrMap }</ul>
        </div>
    )
}
}

export default Name;