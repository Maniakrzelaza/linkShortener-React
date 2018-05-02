import Icon from 'material-ui/Icon';
import PropTypes from 'prop-types';
import React from 'react';

class Short extends React.Component {
    handleInputChange = (event) => {
        this.setState({
            shortPhrase: event.target.value
        });
    };

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleShort();
        }
    };

    handleShort = () => {
        this.props.onUse(this.state.shortPhrase);
    };

    constructor() {
        super();

        this.state = {
            shortPhrase: ''
        };
    }

    render() {
        return (
            <div className="short">
                <label>Link: </label>
                <input style={{width: 500}}
                    value={this.state.shortPhrase}
                    onChange={this.handleInputChange}
                    onKeyPress={this.handleKeyPress}
                    className="short-input"  />

            </div>
        );
    }
}

Short.propTypes = {
    onUse: PropTypes.func
};

export default Short;
