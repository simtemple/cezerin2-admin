import FlatButton from "material-ui/FlatButton"
import React from "react"
import { Field, reduxForm } from "redux-form"
import { TextField } from "redux-form-material-ui"
import messages from "../../../../lib/text"
import style from "./style.css"

const validate = values => {
  const errors = {}
  const requiredFields = ["city"]

  requiredFields.map(field => {
    if (values && !values[field]) {
      errors[field] = messages.errors_required
    }
  })

  return errors
}

class CustomerAddressForm extends React.Component {
  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      initialValues,
      onCancel,
    } = this.props

    return (
      <form
        onSubmit={handleSubmit}
        style={{
          display: "initial",
          width: "100%",
        }}
      >
        <>
          <Field
            component={TextField}
            fullWidth
            name="full_name"
            floatingLabelText={messages.fullName}
          />
          <Field
            component={TextField}
            fullWidth
            name="company"
            floatingLabelText={messages.company}
          />
          <Field
            component={TextField}
            fullWidth
            name="address1"
            floatingLabelText={messages.address1}
          />
          <Field
            component={TextField}
            fullWidth
            name="address2"
            floatingLabelText={messages.address2}
          />
          <Field
            component={TextField}
            fullWidth
            name="city"
            floatingLabelText={messages.city}
          />
          <Field
            component={TextField}
            fullWidth
            name="state"
            floatingLabelText={messages.state}
          />
          <Field
            component={TextField}
            fullWidth
            name="postal_code"
            floatingLabelText={messages.postal_code}
          />
          <Field
            component={TextField}
            fullWidth
            name="country"
            floatingLabelText={messages.country}
          />
          <Field
            component={TextField}
            fullWidth
            name="phone"
            floatingLabelText={messages.phone}
          />
        </>
        <div className={style.shippingButtons}>
          <FlatButton label={messages.cancel} onClick={onCancel} />
          <FlatButton
            label={messages.save}
            primary
            type="submit"
            style={{ marginLeft: 12 }}
            disabled={pristine || submitting}
          />
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: "CustomerAddressForm",
  validate,
  enableReinitialize: true,
})(CustomerAddressForm)
