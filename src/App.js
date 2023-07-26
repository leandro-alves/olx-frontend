import React from "react";
import { connect } from "react-redux";

const Page = (propos) => {
  return (
    <div>Opa, funcionando...</div>
  );
}

const mapStateToProps = (state) => {
  return {
    user:state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);