import React from 'react';
import { observer } from 'mobx-react';
import * as bs from 'react-bootstrap';
import Fa from 'react-fontawesome';

@observer class App extends React.Component {
    render() {
        return (
            <div>app</div>
        );
        // let state = this.props.state;
        // return (
        //     <bs.Grid>
        //         <bs.Row>
        //             <bs.Col sm={12}>
        //                 <div className="logo" />
        //             </bs.Col>
        //         </bs.Row>
        //         <bs.Row>
        //             <bs.Col sm={3}>
        //                 <bs.Button bsStyle="success" onClick={() => state.inc()}><Fa name="plus" /> Inc</bs.Button>
        //                 <bs.Button bsStyle={state.someObj.someInt > 5 ? 'primary' : 'default'} disabled={state.someObj.someInt === 0} onClick={() => state.dec()}><Fa name="minus" /> Dec</bs.Button>
        //             </bs.Col>
        //             <bs.Col sm={9}>
        //                 <bs.Well bsSize="small">{state.someObj.someInt}</bs.Well>
        //             </bs.Col>
        //         </bs.Row>
        //     </bs.Grid>
        // );
    }
}

export default App;