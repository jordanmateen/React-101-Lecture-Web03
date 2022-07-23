import React, { PureComponent } from 'react'
import Button from 'react-bootstrap/Button';

class ClickyThing extends PureComponent {
    render() {
        const {handleEvent, variant, btnName, isButtonDisabled} = this.props
        return (
            <Button onClick={handleEvent} variant={variant} disabled={isButtonDisabled}>{btnName}</Button>
        )
    }
}

export default ClickyThing
