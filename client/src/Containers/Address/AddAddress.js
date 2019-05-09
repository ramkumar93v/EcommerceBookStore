import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { addNewAddress } from "../../Action/AddressAction";
import {
  required,
  number,
  maxLength10,
  maxLength15,
  maxLength6,
  mobile
} from "../../Utilities/Validation";
import RenderField from "../../Utilities/RenderField";

const AddressForm = props => {
  const { handleSubmit, pristine, invalid, reset, submitting } = props;
  debugger;
  return (
    <div>
      <div className="row">
        <div className="col-md-11 col-md-offset-1">
          <form className="form-horizontal" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="col-md-3 control-label">First Name</label>
              <div className="col-md-7 control-label">
                <Field
                  name="firstName"
                  type="text"
                  fontAwesome="fa fa-user"
                  placeholder="First Name"
                  className="form-control"
                  component={RenderField}
                  validate={[required, maxLength15]}
                  label="firstName"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label">Last Name</label>
              <div className="col-md-7 control-label">
                <Field
                  name="lastName"
                  type="text"
                  fontAwesome="fa fa-user"
                  placeholder="Last Name"
                  className="form-control"
                  component={RenderField}
                  validate={[required, maxLength15]}
                  label="lastName"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label">Mobile</label>
              <div className="col-md-7 control-label">
                <Field
                  name="mobile"
                  type="text"
                  placeholder="Mobile"
                  fontAwesome="fa fa-mobile"
                  className="form-control"
                  component={RenderField}
                  validate={[required, number, mobile]}
                  label="mobile"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label">Address Line 1</label>
              <div className="col-md-7 control-label">
                <Field
                  name="address1"
                  type="text"
                  placeholder="Address"
                  fontAwesome="fa fa-address-book"
                  className="form-control"
                  component={RenderField}
                  validate={[required]}
                  label="address1"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label">Address Line 2</label>
              <div className="col-md-7 control-label">
                <Field
                  name="address2"
                  type="textarea"
                  fontAwesome="fa fa-address-book"
                  placeholder="Address"
                  className="form-control"
                  component={RenderField}
                  validate={[required]}
                  label="address2"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label">City</label>
              <div className="col-md-7 control-label">
                <Field
                  name="city"
                  type="text"
                  placeholder="City"
                  fontAwesome="fa fa-building"
                  className="form-control"
                  component={RenderField}
                  validate={[required, maxLength15]}
                  label="city"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label">State</label>
              <div className="col-md-7 control-label">
                <Field
                  name="state"
                  type="text"
                  placeholder="State"
                  fontAwesome="fa fa-building"
                  className="form-control"
                  component={RenderField}
                  validate={[required, maxLength15]}
                  label="state"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label">Postcode</label>
              <div className="col-md-7 control-label">
                <Field
                  name="zipCode"
                  type="text"
                  placeholder="Post Code"
                  fontAwesome="fa fa-building"
                  className="form-control"
                  component={RenderField}
                  validate={[required,number, maxLength6]}
                  label="zipCode"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="btn-group">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={invalid || submitting || pristine}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is config, 2nd is mapStateToProps, 3rd is mapDispatchToProps


const submitFunction = (values, dispatch) => {
 dispatch(addNewAddress(values))
};
export default reduxForm({
  form: "addressForm",
  onSubmit: submitFunction
}, null, {addNewAddress})(AddressForm);
