import * as React from 'react';
import CSSModules from 'react-css-modules';
import FontAwesome from 'react-fontawesome';
import { observer } from 'mobx-react';

import ValidatorJs from 'validatorjs';
import messages from '../../services/validatorjs.sv';
import Form from 'mobx-react-form';

import { TestStore } from '../../data/stores/testStore'

import styles from './styles.scss';

@CSSModules(styles)
@observer
export class Search extends React.Component<{}, {}> {

    private form: any;
    private testStore: TestStore;

    constructor() {
        super();

        this.testStore = new TestStore();
        // this.testStore.get();

        const plugins = { dvr: ValidatorJs };
        ValidatorJs.setMessages('sv', messages);
        ValidatorJs.useLang('sv');

        const fields = [{
            name: 'email',
            label: 'E-post',
            placeholder: 'Skriv en e-postadress',
            rules: 'required|email|string|between:5,25'
        }];

        this.form = new Form({ fields }, { plugins });
    }

    render() {
        return (
            <div>
                <div className="form-horizontal">
                    <div className="form-group has-feedback">
                        <label className="col-sm-3 control-label">{this.form.select('email').label}</label>
                        <div className="col-sm-9">
                            <input type="text" {...this.form.select('email').bind() } className="form-control" />
                            <FontAwesome name={this.form.select('email').isValid ? 'envelope' : 'ban'} className="form-control-feedback" />
                            <span className="validationMessage">{this.form.$('email').error}</span>
                        </div>
                    </div>
                </div>

                {this.testStore.handelser.map(handelse => <div key={handelse.handelseId}>{handelse.handelseId} {handelse.rubrik}</div>)}

                <div styleName="img">
                <img src='./images/rxslvkontroll72.png' />
                </div>
            </div>
        );
    }
}
