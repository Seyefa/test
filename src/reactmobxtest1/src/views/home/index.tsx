import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import CSSModules from 'react-css-modules';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { default as Fa } from 'react-fontawesome';

import { Textbox, TextboxProps } from '../../components/Textbox';

import { Arende, Handelse } from '../../data/test';

import styles from './styles.scss';

@CSSModules(styles)
@observer
export class Home extends React.Component<{}, {}> {

    arende: Arende;
    private handelseId = 0;
    @observable private textboxparams: TextboxProps;

    constructor() {
        super();
        this.arende = new Arende();
        this.arende.dnr = 'L 2017-000001';

        this.textboxparams = { title: 'Diarienummer', value: 'Hej', editing: false };
    }

    private add = () => {
        var handelse: Handelse = { id: ++this.handelseId, handelseTyp: this.textboxparams.value };
        this.arende.handelser.push(handelse);
    }

    public render() {
        return (
            <div>
                <ButtonToolbar>
                    <Button bsStyle="primary" onClick={this.add} disabled={this.textboxparams.value.length === 0}>Add</Button>
                    {this.textboxparams.editing === true && <Button bsStyle="danger" onClick={() => this.textboxparams.editing = false}><Fa name="times" /> Avbryt</Button>}
                    {this.textboxparams.editing === false && <button className="btn btn-default background-gray-lighter" onClick={() => this.textboxparams.editing = true}><i className="fa fa-pencil" /> Redigera</button>}
                </ButtonToolbar>
                <Textbox params={this.textboxparams} />
                <Textbox params={this.textboxparams} />
                {this.arende.handelser.length === 0 && "Inga händelser"}
                {this.arende.handelser.length > 0 && "Händelser"}
                {this.arende.handelser.map(handelse =>
                    <div key={handelse.id}>{handelse.id} = {handelse.handelseTyp}</div>)
                }

                <div styleName="img" />
                <img src='./images/rxslvkontroll72.png' />
            </div>
        );
    }
}